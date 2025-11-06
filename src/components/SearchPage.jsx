import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, ArrowLeft } from 'lucide-react';
import curriculumData from '../data/curriculum.json';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('all');

  // Create searchable content
  const searchableContent = useMemo(() => {
    const content = [];
    
    curriculumData.chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        // Add lesson as searchable item
        content.push({
          type: 'lesson',
          id: lesson.id,
          title: lesson.title,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          content: lesson.sections.map(s => s.content).join(' '),
          sections: lesson.sections.map(s => s.title)
        });

        // Add individual sections as searchable items
        lesson.sections.forEach(section => {
          content.push({
            type: 'section',
            id: `${lesson.id}-${section.title}`,
            title: section.title,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            content: section.content
          });
        });
      });
    });
    
    return content;
  }, []);

  // Filter content based on search term and chapter
  const filteredContent = useMemo(() => {
    let filtered = searchableContent;

    // Filter by chapter
    if (selectedChapter !== 'all') {
      filtered = filtered.filter(item => item.chapterId === selectedChapter);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(term) ||
        item.content.toLowerCase().includes(term) ||
        (item.sections && item.sections.some(s => s.toLowerCase().includes(term)))
      );
    }

    return filtered;
  }, [searchableContent, searchTerm, selectedChapter]);

  const highlightText = (text, term) => {
    if (!term.trim()) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const getContentPreview = (content, term) => {
    if (!term.trim()) return content.slice(0, 200) + '...';
    
    const termIndex = content.toLowerCase().indexOf(term.toLowerCase());
    if (termIndex === -1) return content.slice(0, 200) + '...';
    
    const start = Math.max(0, termIndex - 100);
    const end = Math.min(content.length, termIndex + 100);
    const preview = content.slice(start, end);
    
    return (start > 0 ? '...' : '') + preview + (end < content.length ? '...' : '');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Search Curriculum</h1>
            <p className="text-xl text-muted-foreground">
              Find lessons, concepts, and topics across all chapters
            </p>
          </div>
        </div>

        {/* Search Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search for topics, concepts, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg h-12"
            />
          </div>
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="px-4 py-2 border border-input rounded-md bg-background"
          >
            <option value="all">All Chapters</option>
            {curriculumData.chapters.map(chapter => (
              <option key={chapter.id} value={chapter.id}>
                Chapter {chapter.id}: {chapter.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {searchTerm.trim() ? 'Search Results' : 'All Content'}
          </h2>
          <Badge variant="secondary">
            {filteredContent.length} results
          </Badge>
        </div>

        {filteredContent.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or selecting a different chapter.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredContent.map((item, index) => (
              <Card key={`${item.type}-${item.id}-${index}`} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={item.type === 'lesson' ? 'default' : 'secondary'}>
                          {item.type === 'lesson' ? 'Lesson' : 'Section'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Chapter {item.chapterId}: {item.chapterTitle}
                        </span>
                      </div>
                      <CardTitle className="text-lg">
                        {item.type === 'lesson' ? (
                          <>Lesson {item.id}: {highlightText(item.title, searchTerm)}</>
                        ) : (
                          <>
                            {highlightText(item.title, searchTerm)}
                            <div className="text-sm font-normal text-muted-foreground mt-1">
                              from Lesson {item.lessonId}: {item.lessonTitle}
                            </div>
                          </>
                        )}
                      </CardTitle>
                    </div>
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {highlightText(getContentPreview(item.content, searchTerm), searchTerm)}
                  </CardDescription>
                  
                  <Link to={item.type === 'lesson' ? `/lesson/${item.id}` : `/lesson/${item.lessonId}`}>
                    <Button variant="outline">
                      {item.type === 'lesson' ? 'View Lesson' : 'View Lesson'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

