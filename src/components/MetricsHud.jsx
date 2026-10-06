import React from 'react';
import { formatTime } from '../utils/puzzleEngine';

export default function MetricsHud({ elapsedMs, stepCount, gridSize, bestRecord }) {
  return (
    <div className="hcm-hud-bar">
      <div className="hud-col">
        <span className="hud-tag">THỜI GIAN [ƯU TIÊN 1]</span>
        <span className="hud-val">{formatTime(elapsedMs)}</span>
      </div>

      <div className="hud-col">
        <span className="hud-tag">SỐ BƯỚC [ƯU TIÊN 2]</span>
        <span className="hud-val">
          {stepCount} <span style={{ fontSize: '0.75rem', fontWeight: 400 }}>BƯỚC</span>
        </span>
      </div>

      <div className="hud-col">
        <span className="hud-tag">KỶ LỤC TỐT NHẤT</span>
        <span className="hud-val text-gold">
          {bestRecord ? formatTime(bestRecord.timeMs) : '--:--.--'}
        </span>
      </div>
    </div>
  );
}
