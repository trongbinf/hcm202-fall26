import React from 'react';

export default function Footer() {
  return (
    <footer className="hcm-footer">
      <div className="footer-container">
        <div className="footer-col" style={{ flex: '1 1 50%' }}>
          <h4>HỌC PHẦN HCM202 · TƯ TƯỞNG HỒ CHÍ MINH</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#94a3b8' }}>
            Nền tảng học tập và nghiên cứu trực quan Chương 4: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân. Tài liệu biên soạn theo Giáo trình chuẩn của Bộ Giáo dục & Đào tạo, Nhà xuất bản Chính trị quốc gia Sự thật.
          </p>
        </div>

        <div className="footer-col font-mono" style={{ fontSize: '0.78rem', flex: '1 1 35%' }}>
          <h4>NỘI DUNG CHUYÊN ĐỀ</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#cbd5e1' }}>
            <li><a href="#giao-trinh" style={{ color: 'inherit' }}>[I] ĐẢNG CỘNG SẢN VIỆT NAM</a></li>
            <li><a href="#giao-trinh" style={{ color: 'inherit' }}>[II] NHÀ NƯỚC CỦA DÂN, DO DÂN, VÌ DÂN</a></li>
            <li><a href="#giao-trinh" style={{ color: 'inherit' }}>[III] VẬN DỤNG VÀO XÂY DỰNG ĐẢNG & NHÀ NƯỚC</a></li>
            <li><a href="#game" style={{ color: 'inherit' }}>[GAME] THI ĐẤU GHÉP TRANH ĐỐI KHÁNG 1v1</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        BỘ MÔN LÝ LUẬN CHÍNH TRỊ · WEBSITE HỌC TẬP TƯƠNG TÁC CHUYÊN ĐỀ HCM202
      </div>
    </footer>
  );
}
