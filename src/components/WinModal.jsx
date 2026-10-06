import React, { useState } from 'react';
import { formatTime } from '../utils/puzzleEngine';

export default function WinModal({
  isOpen,
  timeMs,
  steps,
  gridSize,
  rank,
  onSave,
  onPlayAgain,
}) {
  const [name, setName] = useState('PLAYER 1');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(name.trim().toUpperCase() || 'PLAYER');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <span className="modal-tag">[HOÀN THÀNH XUẤT SẮC]</span>
          <h2 className="modal-title">LƯỚI ĐÃ ĐƯỢC GIẢI TOÀN VẸN</h2>
        </div>
        <div className="modal-body">
          <p className="modal-intro font-mono">
            Chúc mừng bạn đã hoàn thành câu đố xếp hình! Dưới đây là thông số thành tích của bạn:
          </p>

          <div className="modal-stats-grid font-mono">
            <div className="stat-box">
              <span className="stat-name">THỜI GIAN (ƯU TIÊN 1)</span>
              <span className="stat-val text-accent">{formatTime(timeMs)}</span>
            </div>
            <div className="stat-box">
              <span className="stat-name">SỐ BƯỚC (ƯU TIÊN 2)</span>
              <span className="stat-val">{steps} BƯỚC</span>
            </div>
            <div className="stat-box">
              <span className="stat-name">KÍCH THƯỚC LƯỚI</span>
              <span className="stat-val">
                {gridSize}x{gridSize} ({gridSize * gridSize} Ô)
              </span>
            </div>
            <div className="stat-box">
              <span className="stat-name">XẾP HẠNG ĐẠT ĐƯỢC</span>
              <span className="stat-val text-record">HẠNG #{rank}</span>
            </div>
          </div>

          <div className="player-name-input-group">
            <label htmlFor="playerNameInput" className="font-mono">
              NHẬP TÊN NGƯỜI CHƠI ĐỂ LƯU KỶ LỤC:
            </label>
            <input
              id="playerNameInput"
              type="text"
              className="input-text font-mono"
              maxLength={15}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleSave}>
            LƯU KỶ LỤC VÀ ĐÓNG [ENTER]
          </button>
          <button className="btn btn-secondary" onClick={onPlayAgain}>
            CHƠI LẠI NGAY
          </button>
        </div>
      </div>
    </div>
  );
}
