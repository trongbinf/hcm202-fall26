import React from 'react';

/**
 * Tournament Rules & Bracket Modal
 * Modal thể lệ đấu loại nhóm học phần HCM202 (4x4, 6x6, 8x8)
 */
export default function TournamentModal({ isOpen, onClose, onSelectStage }) {
  if (!isOpen) return null;

  return (
    <div className="tournament-modal-overlay">
      <div className="tournament-modal-box glass">
        <div className="tournament-header">
          <div className="font-mono" style={{ fontSize: '0.75rem', color: '#c59b27', letterSpacing: '0.1em' }}>
            [QUY CHẾ THI ĐẤU MINIGAME LỚP HỌC]
          </div>
          <h2 className="font-serif" style={{ fontSize: '1.6rem', color: '#850005', margin: '4px 0' }}>
            THỂ LỆ THI ĐẤU ĐỐI KHÁNG GIỮA CÁC NHÓM
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
            Mỗi nhóm cử 01 đại diện tranh tài theo thể thức loại trực tiếp <strong>1v1 (Single Elimination)</strong> qua 3 vòng đấu vừa sức: <strong>4x4 &rarr; 6x6 &rarr; 8x8</strong>!
          </p>
        </div>

        {/* 3 Stages Information: 4x4, 6x6, 8x8 */}
        <div className="tournament-stages-grid">
          {/* Vòng 1 */}
          <div className="stage-card">
            <div className="stage-badge font-mono">VÒNG LOẠI (TỨ KẾT)</div>
            <div className="stage-match font-serif">8 NHÓM &rarr; 4 NHÓM</div>
            <div className="stage-grid font-mono">LƯỚI 4x4 (16 Ô)</div>
            <p className="stage-desc">
              Khởi động tốc độ phản xạ. 4 cặp đấu đối kháng 1v1. Nhóm nào hoàn thành ghép tranh nhanh hơn hoặc ít bước hơn sẽ giành quyền bước tiếp.
            </p>
            <button
              className="stage-select-btn font-mono"
              onClick={() => {
                onSelectStage(4);
                onClose();
              }}
            >
              [CHỌN CHƠI VÒNG 4x4]
            </button>
          </div>

          {/* Vòng 2 */}
          <div className="stage-card stage-highlight">
            <div className="stage-badge font-mono">BÁN KẾT</div>
            <div className="stage-match font-serif">4 NHÓM &rarr; 2 NHÓM</div>
            <div className="stage-grid font-mono">LƯỚI 6x6 (36 Ô)</div>
            <p className="stage-desc">
              Tăng độ thách thức vừa phải. 2 cặp bán kết tranh tài 36 mảnh ghép tư liệu lịch sử. 2 nhóm chiến thắng bước vào trận Chung Kết.
            </p>
            <button
              className="stage-select-btn font-mono"
              onClick={() => {
                onSelectStage(6);
                onClose();
              }}
            >
              [CHỌN CHƠI BÁN KẾT 6x6]
            </button>
          </div>

          {/* Vòng 3 */}
          <div className="stage-card stage-final">
            <div className="stage-badge font-mono">CHUNG KẾT 1v1</div>
            <div className="stage-match font-serif">TRANH NGÔI VÔ ĐỊCH</div>
            <div className="stage-grid font-mono">LƯỚI 8x8 (64 Ô)</div>
            <p className="stage-desc">
              Trận chung kết đỉnh cao giữa 2 nhóm xuất sắc nhất. Ghép trọn vẹn 64 mảnh ảnh tư liệu Bác Hồ. Đội về đích sớm nhất sẽ đạt giải Nhất!
            </p>
            <button
              className="stage-select-btn font-mono"
              onClick={() => {
                onSelectStage(8);
                onClose();
              }}
            >
              [CHỌN CHƠI CHUNG KẾT 8x8]
            </button>
          </div>
        </div>

        {/* Visual Bracket Diagram */}
        <div className="tournament-bracket-diagram font-mono">
          <div className="bracket-title">[SƠ ĐỒ NHÁNH THI ĐẤU 8 NHÓM]</div>
          <div className="bracket-flow">
            <div className="bracket-col">
              <span className="bracket-node">Nhóm 1 vs Nhóm 2</span>
              <span className="bracket-node">Nhóm 3 vs Nhóm 4</span>
              <span className="bracket-node">Nhóm 5 vs Nhóm 6</span>
              <span className="bracket-node">Nhóm 7 vs Nhóm 8</span>
            </div>
            <div className="bracket-arrow">&rarr; 4x4 &rarr;</div>
            <div className="bracket-col">
              <span className="bracket-node highlight">Bán kết A (Thắng 1-2 vs 3-4)</span>
              <span className="bracket-node highlight">Bán kết B (Thắng 5-6 vs 7-8)</span>
            </div>
            <div className="bracket-arrow">&rarr; 6x6 &rarr;</div>
            <div className="bracket-col">
              <span className="bracket-node final">CHUNG KẾT 1v1 (8x8)</span>
            </div>
          </div>
        </div>

        {/* Footer Close */}
        <div className="tournament-footer">
          <span className="font-mono" style={{ fontSize: '0.78rem', color: '#64748b' }}>
            MẬT MÃ BẮT ĐẦU VÁN ĐẤU ĐƯỢC CẤP BỞI BAN TỔ CHỨC / GIẢNG VIÊN
          </span>
          <button className="btn-mn131-sec font-mono" onClick={onClose}>
            [ĐÓNG BẢNG THỂ LỆ]
          </button>
        </div>
      </div>
    </div>
  );
}
