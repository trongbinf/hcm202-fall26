import React, { useEffect, useRef } from 'react';

export default function Board({
  gridSize,
  tiles,
  mode,
  showHint,
  activeImageUrl,
  onTileClick,
  isPreviewing,
}) {
  const frameRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      const emptyIndex = tiles.indexOf(0);
      if (emptyIndex === -1) return;

      const emptyRow = Math.floor(emptyIndex / gridSize);
      const emptyCol = emptyIndex % gridSize;
      let targetIdx = -1;

      if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && emptyRow < gridSize - 1) {
        targetIdx = (emptyRow + 1) * gridSize + emptyCol;
      } else if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && emptyRow > 0) {
        targetIdx = (emptyRow - 1) * gridSize + emptyCol;
      } else if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && emptyCol < gridSize - 1) {
        targetIdx = emptyRow * gridSize + (emptyCol + 1);
      } else if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && emptyCol > 0) {
        targetIdx = emptyRow * gridSize + (emptyCol - 1);
      }

      if (targetIdx !== -1) {
        onTileClick(targetIdx);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tiles, gridSize, onTileClick]);

  return (
    <div className="board-container">
      <div className="board-frame" ref={frameRef}>
        <div
          className={`puzzle-board grid-${gridSize}`}
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {tiles.map((val, idx) => {
            if (val === 0) {
              return <div key={idx} className="puzzle-tile empty" />;
            }

            const isImgMode = mode === 'image' && activeImageUrl;
            let tileStyle = {};

            if (isImgMode) {
              const originalPos = val - 1;
              const origRow = Math.floor(originalPos / gridSize);
              const origCol = originalPos % gridSize;
              const percentX = (origCol / (gridSize - 1)) * 100;
              const percentY = (origRow / (gridSize - 1)) * 100;

              tileStyle = {
                backgroundImage: `url("${activeImageUrl}")`,
                backgroundPosition: `${percentX}% ${percentY}%`,
                backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
              };
            }

            return (
              <div
                key={idx}
                className={`puzzle-tile ${isImgMode ? 'tile-image' : ''}`}
                style={tileStyle}
                onClick={() => onTileClick(idx)}
              >
                {isImgMode ? (
                  showHint && <span className="hint-badge font-mono">{val}</span>
                ) : (
                  <span className="tile-number font-mono">{val}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Overlay Preview */}
        {isPreviewing && (
          <div className="preview-overlay">
            <div className="preview-badge">[ẢNH GỐC ĐỐI CHIẾU]</div>
            <img src={activeImageUrl} alt="Bản gốc đối chiếu" />
          </div>
        )}
      </div>
    </div>
  );
}
