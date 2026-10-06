import React, { useState } from 'react';
import ImagePuzzle from './ImagePuzzle';
import TournamentModal from './TournamentModal';

export default function GamePage({
  gridSize,
  setGridSize,
  onNavigateToLessons,
}) {
  const [isTournamentModalOpen, setIsTournamentModalOpen] = useState(false);

  return (
    <div className="dedicated-game-page">
      {/* Game Page Hero Header */}
      <div className="game-hero-banner">
        <div className="game-hero-container">
          <span className="hero-pill font-mono">
            HỌC PHẦN HCM202 · GIẢI ĐẤU ĐỐI KHÁNG LIÊN NHÓM
          </span>
          <h1 className="game-hero-title font-serif">
            HỘI THI GHÉP TRANH TƯ LIỆU HỒ CHÍ MINH
          </h1>
          <p className="game-hero-sub">
            Thể thức thi đấu loại trực tiếp <strong>1v1 giữa 8 nhóm lớp</strong>: Vòng 1 Tứ kết (<strong>4x4: 16 ô</strong>) &rarr; Vòng Bán kết (<strong>6x6: 36 ô</strong>) &rarr; Trận Chung kết vô địch (<strong>8x8: 64 ô</strong>). Nhập mật mã từ Ban Tổ chức để mở khóa thi đấu. Khuyến khích giảng viên và các nhóm ghi chú danh sách đối đầu và kết quả trực tiếp lên bảng lớp học!
          </p>

          <div className="game-badges-row font-mono">
            <span className="badge-tag">[VÒNG 1: 4x4]</span>
            <span className="badge-tag">[BÁN KẾT: 6x6]</span>
            <span className="badge-tag">[CHUNG KẾT: 8x8]</span>
            <span className="badge-tag">[XÁC THỰC MẬT MÃ BAN TỔ CHỨC]</span>
            <span className="badge-tag">[ĐẤU LOẠI 1v1]</span>
          </div>
        </div>
      </div>

      {/* Main Game Layout: Game Puzzle Area + Right Sidebar Tournament info */}
      <div className="game-workspace-container mn131-layout">
        {/* Left / Center Main Area: The ImagePuzzle component */}
        <main className="game-col-board" style={{ flex: '1 1 65%', minWidth: '320px' }}>
          <ImagePuzzle
            size={gridSize}
            onSizeChange={setGridSize}
            onOpenTournamentModal={() => setIsTournamentModalOpen(true)}
          />
        </main>

        {/* Right Area: Sidebar Tournament Stage Info & Quick nav */}
        <aside className="game-col-leaderboard" style={{ flex: '0 0 340px' }}>
          <div className="tournament-sidebar-card glass">
            <div className="font-mono" style={{ fontSize: '0.72rem', color: '#c59b27', fontWeight: 700 }}>
              [TIẾN TRÌNH THI ĐẤU LỚP HỌC]
            </div>
            <div className="font-serif" style={{ fontSize: '1.2rem', color: '#850005', margin: '4px 0 8px 0', fontWeight: 700 }}>
              {gridSize === 4 && 'VÒNG 1 (TỨ KẾT 8 → 4 · 4x4)'}
              {gridSize === 6 && 'VÒNG 2 (BÁN KẾT 4 → 2 · 6x6)'}
              {gridSize === 8 && 'VÒNG CHUNG KẾT 1v1 · 8x8'}
            </div>
            <div className="font-mono" style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5 }}>
              Quy tắc tính điểm: <strong>Thời gian trước (ms)</strong>, nếu bằng nhau xét đến <strong>Số lượt di chuyển</strong>.
            </div>

            <div style={{ marginTop: '12px', padding: '10px', background: '#fefce8', borderRadius: '8px', border: '1px dashed #ca8a04' }}>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: '#854d0e', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                HƯỚNG DẪN TỔ CHỨC:
              </span>
              <p style={{ fontSize: '0.75rem', color: '#713f12', margin: 0, lineHeight: 1.45 }}>
                Khuyến khích sinh viên và ban cán sự lớp vẽ sơ đồ nhánh 8 nhóm và ghi tên đại diện cùng kết quả trực tiếp lên bảng đen lớp học để cả lớp cùng theo dõi!
              </p>
            </div>

            <button
              className="btn-mn131-sec font-mono"
              style={{ width: '100%', marginTop: '14px', fontSize: '0.75rem', padding: '10px' }}
              onClick={() => setIsTournamentModalOpen(true)}
            >
              [XEM SƠ ĐỒ NHÁNH THI ĐẤU]
            </button>
          </div>

          {/* Quick Nav back to lessons */}
          <div style={{ marginTop: '16px' }}>
            <button
              className="btn-action-sub font-mono"
              style={{ width: '100%', fontSize: '0.72rem', padding: '12px' }}
              onClick={onNavigateToLessons}
            >
              &larr; QUAY LẠI ĐỌC BÀI HỌC CHƯƠNG 4
            </button>
          </div>
        </aside>
      </div>

      {/* Tournament Modal */}
      <TournamentModal
        isOpen={isTournamentModalOpen}
        onClose={() => setIsTournamentModalOpen(false)}
        onSelectStage={(stageSize) => setGridSize(stageSize)}
      />
    </div>
  );
}
