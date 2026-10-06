import React from 'react';
import { formatTime } from '../utils/puzzleEngine';

export default function Leaderboard({ gridSize, records, onClearLeaderboard }) {
  return (
    <div className="hcm-leaderboard-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span className="control-label" style={{ margin: 0 }}>
          // BẢNG XẾP HẠNG KỶ LỤC [{gridSize}x{gridSize}]
        </span>
        <button
          className="btn-action-sub"
          style={{ padding: '3px 8px', fontSize: '0.65rem' }}
          onClick={onClearLeaderboard}
        >
          XÓA
        </button>
      </div>

      <table className="hcm-leaderboard-table font-mono">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>HẠNG</th>
            <th style={{ width: '45%' }}>THỜI GIAN (ƯU 1)</th>
            <th style={{ width: '25%' }}>BƯỚC (ƯU 2)</th>
            <th style={{ width: '15%' }}>NGÀY</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '16px', color: 'var(--text-muted)' }}>
                // CHƯA CÓ KỶ LỤC LƯU TRỮ //
              </td>
            </tr>
          ) : (
            records.slice(0, 5).map((item, idx) => (
              <tr key={idx} className={idx === 0 ? 'rank-1' : ''}>
                <td>{idx === 0 ? '#01 [TOP]' : `#${String(idx + 1).padStart(2, '0')}`}</td>
                <td>
                  <strong>{formatTime(item.timeMs)}</strong>{' '}
                  <span style={{ fontSize: '0.65rem', color: '#64748b' }}>({item.name})</span>
                </td>
                <td>{item.steps}</td>
                <td style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{item.date || 'HÔM NAY'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '8px', lineHeight: 1.4 }} className="font-mono">
        TIÊU CHÍ XẾP HẠNG: SO SÁNH THỜI GIAN TRƯỚC, NẾU BẰNG NHAU MỚI XÉT SỐ BƯỚC ĐI.
      </div>
    </div>
  );
}
