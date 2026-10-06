import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChapterModules from './components/ChapterModules';
import GamePage from './components/GamePage';
import Footer from './components/Footer';

export default function App() {
  // Page Routing: 'lessons' | 'game'
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#game' ? 'game' : 'lessons';
  });

  // Game Settings: 4x4, 6x6, 8x8
  const [gridSize, setGridSize] = useState(6);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const target = window.location.hash === '#game' ? 'game' : 'lessons';
      setCurrentPage(target);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update hash when switching page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'game' ? '#game' : '#bai-hoc';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hcm-app">
      {/* 01. Academic Header Navigation */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />

      {/* 02. Page Routing Switch */}
      {currentPage === 'lessons' ? (
        <main>
          {/* Hero Section */}
          <HeroSection onNavigateToGame={() => handlePageChange('game')} />

          {/* Main Structured Curriculum Content */}
          <div id="noi-dung-bai-hoc" className="single-page-wrapper">
            <div className="section-title-wrap">
              <span className="section-tag">// HỌC PHẦN HCM202 · GIÁO TRÌNH CHÍNH THỐNG</span>
              <h2 className="section-main-title">
                CHƯƠNG 4: NỘI DUNG LÝ LUẬN & CHUYÊN ĐỀ TƯƠNG TÁC
              </h2>
              <div className="section-divider-line"></div>
            </div>

            {/* Modules Layout */}
            <ChapterModules onNavigateToGame={() => handlePageChange('game')} />
          </div>
        </main>
      ) : (
        /* Dedicated Full-Page Game */
        <main>
          <GamePage
            gridSize={gridSize}
            setGridSize={setGridSize}
            onNavigateToLessons={() => handlePageChange('lessons')}
          />
        </main>
      )}

      {/* 03. Academic Footer */}
      <Footer />
    </div>
  );
}
