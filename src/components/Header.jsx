import { Menu, Search, Sun, Moon, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Header({ onMenuClick, darkMode, onDarkModeToggle }) {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/images/lpm-logo.png"
                alt="Liberty's Principles Media Logo"
                className="h-12 w-12 rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold">Classic U.S. Civics</h1>
                <p className="text-sm opacity-90">Liberty's Principles Media</p>
              </div>
            </Link>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-2">
            <Link to="/search">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onDarkModeToggle}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

