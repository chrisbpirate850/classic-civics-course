import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import curriculumData from '../data/curriculum.json';

export default function Sidebar({ isOpen, onClose }) {
  const [expandedChapters, setExpandedChapters] = useState({});
  const location = useLocation();

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Auto-expand chapter if we're viewing a lesson from it
  useEffect(() => {
    const lessonMatch = location.pathname.match(/\/lesson\/(\d+)\.\d+/);
    if (lessonMatch) {
      const chapterId = lessonMatch[1];
      setExpandedChapters(prev => ({
        ...prev,
        [chapterId]: true
      }));
    }
  }, [location.pathname]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-80 bg-sidebar border-r border-sidebar-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-semibold text-sidebar-foreground">Curriculum</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-5rem)]">
          <div className="p-4 space-y-2">
            {curriculumData.chapters.map((chapter) => (
              <div key={chapter.id} className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-between text-left h-auto p-3"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div>
                    <div className="font-medium text-sidebar-foreground">
                      Chapter {chapter.id}
                    </div>
                    <div className="text-sm text-sidebar-foreground/70">
                      {chapter.title}
                    </div>
                  </div>
                  {expandedChapters[chapter.id] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>

                {expandedChapters[chapter.id] && (
                  <div className="ml-4 space-y-1">
                    {chapter.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/lesson/${lesson.id}`}
                        onClick={onClose}
                        className={`
                          block p-2 rounded text-sm transition-colors
                          hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                          ${location.pathname === `/lesson/${lesson.id}` 
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                            : 'text-sidebar-foreground/80'
                          }
                        `}
                      >
                        Lesson {lesson.id}: {lesson.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}

