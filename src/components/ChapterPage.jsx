import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import curriculumData from '../data/curriculum.json';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const chapter = curriculumData.chapters.find(c => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Chapter {chapter.id}: {chapter.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {chapter.lessons.length} comprehensive lessons
            </p>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapter.lessons.map((lesson, index) => (
          <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                  Lesson {lesson.id}
                </div>
                <div className="text-sm text-muted-foreground">
                  {lesson.sections.length} sections
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">
                {lesson.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {lesson.sections.slice(0, 3).map((section, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground">
                    • {section.title}
                  </div>
                ))}
                {lesson.sections.length > 3 && (
                  <div className="text-sm text-muted-foreground">
                    ... and {lesson.sections.length - 3} more sections
                  </div>
                )}
              </div>
              
              <Link to={`/lesson/${lesson.id}`}>
                <Button className="w-full">
                  Start Lesson
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <div>
          {parseInt(chapterId) > 1 && (
            <Link to={`/chapter/${parseInt(chapterId) - 1}`}>
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Chapter
              </Button>
            </Link>
          )}
        </div>
        
        <div>
          {parseInt(chapterId) < curriculumData.chapters.length && (
            <Link to={`/chapter/${parseInt(chapterId) + 1}`}>
              <Button variant="outline">
                Next Chapter
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

