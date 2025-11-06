import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ChapterPage from './components/ChapterPage';
import LessonPage from './components/LessonPage';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-background text-foreground">
          <Header 
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            darkMode={darkMode}
            onDarkModeToggle={() => setDarkMode(!darkMode)}
          />
          
          <div className="flex">
            <Sidebar 
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            
            <main className="flex-1 min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chapter/:chapterId" element={<ChapterPage />} />
                <Route path="/lesson/:lessonId" element={<LessonPage />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

