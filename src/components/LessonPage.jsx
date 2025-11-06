import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, BookOpen, Target, Key, Clock, Lightbulb, HelpCircle, CheckSquare, ExternalLink } from 'lucide-react';
import curriculumData from '../data/curriculum.json';

export default function LessonPage() {
  const { lessonId } = useParams();
  
  // Find the lesson and its chapter
  let lesson = null;
  let chapter = null;
  let lessonIndex = -1;
  let allLessons = [];

  // Build flat list of all lessons for navigation
  curriculumData.chapters.forEach(ch => {
    ch.lessons.forEach(l => {
      allLessons.push({ ...l, chapterId: ch.id, chapterTitle: ch.title });
    });
  });

  // Find current lesson
  lessonIndex = allLessons.findIndex(l => l.id === lessonId);
  if (lessonIndex !== -1) {
    lesson = allLessons[lessonIndex];
    chapter = curriculumData.chapters.find(c => c.id === lesson.chapterId);
  }

  if (!lesson || !chapter) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getSectionIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('objective')) return <Target className="h-5 w-5" />;
    if (titleLower.includes('key terms')) return <Key className="h-5 w-5" />;
    if (titleLower.includes('context') || titleLower.includes('background')) return <Clock className="h-5 w-5" />;
    if (titleLower.includes('concept')) return <Lightbulb className="h-5 w-5" />;
    if (titleLower.includes('question')) return <HelpCircle className="h-5 w-5" />;
    if (titleLower.includes('assessment')) return <CheckSquare className="h-5 w-5" />;
    if (titleLower.includes('resource')) return <ExternalLink className="h-5 w-5" />;
    return <BookOpen className="h-5 w-5" />;
  };

  const formatContent = (content) => {
    // Convert markdown-style formatting to JSX
    return content.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="font-semibold text-lg mt-4 mb-2">
            {line.slice(2, -2)}
          </h4>
        );
      }
      if (line.startsWith('- **') && line.includes('**:')) {
        const [term, definition] = line.slice(2).split('**:');
        return (
          <div key={index} className="mb-2">
            <span className="font-semibold">{term.slice(2)}</span>: {definition}
          </div>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-4 mb-1">
            {line.slice(2)}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="mb-2">
          {line}
        </p>
      );
    });
  };

  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/chapter/${chapter.id}`} className="hover:text-foreground">
            Chapter {chapter.id}
          </Link>
          <span>/</span>
          <span>Lesson {lesson.id}</span>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">
              Lesson {lesson.id}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {lesson.title}
            </h1>
            <p className="text-muted-foreground">
              Chapter {chapter.id}: {chapter.title}
            </p>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="space-y-6">
        {lesson.sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getSectionIcon(section.title)}
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                {formatContent(section.content)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t">
        <div className="w-full sm:w-auto">
          {prevLesson && (
            <Link to={`/lesson/${prevLesson.id}`} className="block">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="truncate max-w-48">Lesson {prevLesson.id}: {prevLesson.title}</div>
                </div>
              </Button>
            </Link>
          )}
        </div>
        
        <Link to={`/chapter/${chapter.id}`}>
          <Button variant="ghost">
            Chapter Overview
          </Button>
        </Link>
        
        <div className="w-full sm:w-auto">
          {nextLesson && (
            <Link to={`/lesson/${nextLesson.id}`} className="block">
              <Button variant="outline" className="w-full sm:w-auto">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="truncate max-w-48">Lesson {nextLesson.id}: {nextLesson.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

