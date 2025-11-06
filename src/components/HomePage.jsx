import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Scale, Vote } from 'lucide-react';
import curriculumData from '../data/curriculum.json';

export default function HomePage() {
  const featuredChapters = [
    {
      id: '1',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'text-blue-600'
    },
    {
      id: '2', 
      icon: <Scale className="h-8 w-8" />,
      color: 'text-green-600'
    },
    {
      id: '4',
      icon: <Vote className="h-8 w-8" />,
      color: 'text-purple-600'
    },
    {
      id: '7',
      icon: <Users className="h-8 w-8" />,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {curriculumData.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {curriculumData.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/chapter/1">
            <Button size="lg" className="w-full sm:w-auto">
              Start Learning
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Search Topics
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {curriculumData.chapters.length}
            </div>
            <div className="text-muted-foreground">Chapters</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {curriculumData.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)}
            </div>
            <div className="text-muted-foreground">Lessons</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">90+</div>
            <div className="text-muted-foreground">Key Concepts</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Chapters */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredChapters.map((featured) => {
            const chapter = curriculumData.chapters.find(c => c.id === featured.id);
            return (
              <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`${featured.color} mb-2`}>
                    {featured.icon}
                  </div>
                  <CardTitle className="text-lg">Chapter {chapter.id}</CardTitle>
                  <CardDescription>{chapter.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {chapter.lessons.length} lessons covering essential topics
                  </p>
                  <Link to={`/chapter/${chapter.id}`}>
                    <Button variant="outline" className="w-full">
                      Explore Chapter
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* All Chapters */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">All Chapters</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {curriculumData.chapters.map((chapter) => (
            <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Chapter {chapter.id}: {chapter.title}</CardTitle>
                <CardDescription>
                  {chapter.lessons.length} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {chapter.lessons.slice(0, 3).map((lesson) => (
                    <div key={lesson.id} className="text-sm text-muted-foreground">
                      • Lesson {lesson.id}: {lesson.title}
                    </div>
                  ))}
                  {chapter.lessons.length > 3 && (
                    <div className="text-sm text-muted-foreground">
                      ... and {chapter.lessons.length - 3} more lessons
                    </div>
                  )}
                </div>
                <Link to={`/chapter/${chapter.id}`}>
                  <Button className="w-full">
                    View Chapter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

