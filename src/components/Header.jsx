import React from 'react';

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="hcm-navbar">
      <div className="nav-brand-group" onClick={() => setCurrentPage('lessons')} style={{ cursor: 'pointer' }}>
        <span className="nav-emblem">HCM202</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="nav-title">TƯ TƯỞNG HỒ CHÍ MINH</span>
          <span className="nav-subtitle">CHƯƠNG 4: ĐẢNG CỘNG SẢN & NHÀ NƯỚC CỦA NHÂN DÂN</span>
        </div>
      </div>

      <nav className="nav-links-group font-mono">
        <button
          className={`nav-link-btn ${currentPage === 'lessons' ? 'active-nav' : ''}`}
          onClick={() => setCurrentPage('lessons')}
        >
          [BÀI HỌC CHƯƠNG 4]
        </button>
        <button
          className={`nav-link-btn btn-cta ${currentPage === 'game' ? 'active-game' : ''}`}
          onClick={() => setCurrentPage('game')}
        >
          [TRÒ CHƠI XẾP Ô HÌNH]
        </button>
      </nav>
    </header>
  );
}
