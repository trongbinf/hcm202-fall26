import React from 'react';

export default function HeroSection({ onNavigateToGame }) {
  const scrollToLessons = () => {
    const el = document.getElementById('noi-dung-bai-hoc');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hcm-hero">
      <div className="hero-container">
        <span className="hero-pill">
          CHUYÊN ĐỀ GIÁO DỤC TRỰC QUAN · HỌC PHẦN HCM202
        </span>

        <h1 className="hero-main-title">
          TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẢNG CỘNG SẢN VIỆT NAM
          <span className="hero-highlight">
            VÀ NHÀ NƯỚC CỦA NHÂN DÂN, DO NHÂN DÂN, VÌ NHÂN DÂN
          </span>
        </h1>

        <p className="hero-desc font-sans">
          Website học tập số hóa tương tác toàn diện theo Giáo trình Tư tưởng Hồ Chí Minh (Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật). Hệ thống kết cấu theo các chuyên đề lý luận trực quan, sơ đồ so sánh, phân tích các nguyên tắc cốt lõi kết hợp phân hệ trò chơi giải đố tư liệu lịch sử.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '40px' }}>
          <button
            onClick={scrollToLessons}
            className="nav-link-btn btn-cta font-mono"
            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
          >
            KHÁM PHÁ BÀI HỌC CHƯƠNG 4 &darr;
          </button>
          <button
            onClick={onNavigateToGame}
            className="nav-link-btn font-mono"
            style={{ padding: '12px 24px', fontSize: '0.85rem' }}
          >
            VÀO TRANG GAME XẾP Ô HÌNH (8x8 & 12x12) &rarr;
          </button>
        </div>

        {/* 4 Stats Cards */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <span className="stat-number">03</span>
            <span className="stat-text">PHẦN LÝ LUẬN CỐT LÕI</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number">08</span>
            <span className="stat-text">NGUYÊN TẮC HOẠT ĐỘNG CỦA ĐẢNG</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number">09</span>
            <span className="stat-text">YÊU CẦU CÔNG TÁC CÁN BỘ</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number">60</span>
            <span className="stat-text">TRÍCH DẪN TƯ LIỆU TOÀN TẬP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
