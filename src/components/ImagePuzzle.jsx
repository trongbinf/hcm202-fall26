import React, { useState, useEffect, useCallback, useRef } from 'react';
import { puzzleImages } from '../data/puzzles';

/**
 * ImagePuzzle Component
 * - Sửa lỗi co tranh khi hoàn thành: Giữ nguyên bàn cờ các ô đúng 100%, bỏ border ngăn cách
 * - Hiệu ứng pháo hoa chúc mừng ăn mừng chiến thắng
 * - Khách KHÔNG được xem "Hiện hình gốc"
 * - Luôn pick trước DUY NHẤT 1 ô đúng (locked & correct)
 * - Chỉ bắt đầu đếm thời gian khi người chơi di chuyển BƯỚC ĐẦU TIÊN
 */
export default function ImagePuzzle({
  size = 6,
  onSizeChange,
  onOpenTournamentModal,
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(() => {
    return Math.floor(Math.random() * puzzleImages.length);
  });

  const [tiles, setTiles] = useState([]);
  const [locked, setLocked] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState('');
  const [moveCount, setMoveCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [selectedTileIndex, setSelectedTileIndex] = useState(null);
  const [isSwitchingImage, setIsSwitchingImage] = useState(false);

  // Password & Authentication State
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // Timer state
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);

  const activeImage = puzzleImages[currentImgIndex] || puzzleImages[0];
  const imageUrl = activeImage.src;

  // Initialize: TẤT CẢ CÁC DẠNG LUÔN PICK TRƯỚC CHÍNH XÁC 1 Ô ĐÚNG VÀ KHÓA LẠI
  const initPuzzle = useCallback(() => {
    const totalTiles = size * size;

    // 1. Chọn ngẫu nhiên 1 vị trí cố định để luôn đúng (anchor piece)
    const fixedIndex = Math.floor(Math.random() * totalTiles);

    // 2. Danh sách các ô còn lại cần xáo trộn
    const otherIndices = [];
    for (let i = 0; i < totalTiles; i++) {
      if (i !== fixedIndex) otherIndices.push(i);
    }

    // 3. Xáo trộn đảm bảo KHÔNG ô nào khác nằm đúng vị trí ban đầu (derangement trên otherIndices)
    let shuffledValues = [...otherIndices];
    let hasAccidentalMatch = true;
    let attempts = 0;

    while (hasAccidentalMatch && attempts < 500) {
      attempts++;
      for (let i = shuffledValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledValues[i], shuffledValues[j]] = [shuffledValues[j], shuffledValues[i]];
      }
      hasAccidentalMatch = otherIndices.some((boardPos, idx) => shuffledValues[idx] === boardPos);
    }

    // 4. Ghép lại mảng tiles: đúng duy nhất 1 ô fixedIndex
    const newTiles = new Array(totalTiles);
    newTiles[fixedIndex] = fixedIndex;

    let ptr = 0;
    for (let i = 0; i < totalTiles; i++) {
      if (i !== fixedIndex) {
        newTiles[i] = shuffledValues[ptr++];
      }
    }

    // 5. Khóa chính xác duy nhất ô được pick trước
    const newLocked = new Array(totalTiles).fill(false);
    newLocked[fixedIndex] = true;

    setTiles(newTiles);
    setLocked(newLocked);
    setIsComplete(false);
    setMessage('');
    setMoveCount(0);
    setShowHint(false);
    setSelectedTileIndex(null);

    // Reset Timer
    setIsRunning(false);
    setElapsedMs(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [size]);

  useEffect(() => {
    initPuzzle();
  }, [initPuzzle, currentImgIndex]);

  // Start timer CHỈ KHI di chuyển step đầu tiên
  const startTimerOnFirstMove = () => {
    if (!isRunning && !isComplete) {
      setIsRunning(true);
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        setElapsedMs(Date.now() - startTimeRef.current);
      }, 50);
    }
  };

  // Stop timer on complete
  useEffect(() => {
    if (isComplete && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    }
  }, [isComplete]);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Đổi hình ngẫu nhiên kèm animation
  const handleRandomNewImage = () => {
    setIsSwitchingImage(true);
    setTimeout(() => {
      let nextIdx = Math.floor(Math.random() * puzzleImages.length);
      if (nextIdx === currentImgIndex && puzzleImages.length > 1) {
        nextIdx = (nextIdx + 1) % puzzleImages.length;
      }
      setCurrentImgIndex(nextIdx);
      setTimeout(() => {
        setIsSwitchingImage(false);
      }, 50);
    }, 200);
  };

  // Handle Password Submit
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput.trim() === 'HCM202-FA26') {
      setIsUnlocked(true);
      setShowPasswordModal(false);
      setPasswordError(false);
      setPasswordInput('');
    } else {
      setPasswordError(true);
      setTimeout(() => setPasswordError(false), 2000);
    }
  };

  // Check if allowed to play (must enter password first)
  const verifyAccessBeforeAction = () => {
    if (!isUnlocked) {
      setShowPasswordModal(true);
      return false;
    }
    return true;
  };

  // Click hiện hình gốc: KHÁCH KHÔNG ĐƯỢC XEM
  const handleToggleHint = () => {
    if (!isUnlocked) {
      setShowPasswordModal(true);
      return;
    }
    setShowHint(!showHint);
  };

  // Swap logic
  const performSwap = (index1, index2) => {
    if (!verifyAccessBeforeAction()) return;
    if (index1 === index2) return;
    if (locked[index1] || locked[index2]) return;

    // BẮT ĐẦU TÍNH GIỜ TẠI STEP ĐẦU TIÊN
    startTimerOnFirstMove();

    const newTiles = [...tiles];
    [newTiles[index1], newTiles[index2]] = [newTiles[index2], newTiles[index1]];

    const newLocked = [...locked];
    for (let i = 0; i < newTiles.length; i++) {
      newLocked[i] = newTiles[i] === i;
    }

    setTiles(newTiles);
    setLocked(newLocked);
    setMoveCount((prev) => prev + 1);
    setSelectedTileIndex(null);

    if (newTiles.every((val, i) => val === i)) {
      setIsComplete(true);
      setMessage(`XUẤT SẮC! BẠN ĐÃ HOÀN THÀNH BỨC TRANH ${size}x${size}!`);
    }
  };

  // Drag & drop handlers
  const handleDragStart = (e, index) => {
    if (!isUnlocked) {
      e.preventDefault();
      setShowPasswordModal(true);
      return;
    }
    e.dataTransfer.setData('tileIndex', index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (!verifyAccessBeforeAction()) return;
    const draggedIndex = parseInt(e.dataTransfer.getData('tileIndex'), 10);
    if (isNaN(draggedIndex)) return;
    performSwap(draggedIndex, targetIndex);
  };

  // Click to swap handler
  const handleTileClick = (index) => {
    if (!verifyAccessBeforeAction()) return;
    if (isComplete || locked[index]) return;

    if (selectedTileIndex === null) {
      setSelectedTileIndex(index);
    } else if (selectedTileIndex === index) {
      setSelectedTileIndex(null);
    } else {
      performSwap(selectedTileIndex, index);
    }
  };

  // Format mm:ss.ms
  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const tenths = Math.floor((ms % 1000) / 100);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${tenths}`;
  };

  return (
    <div className="mn131-puzzle-wrapper">
      {/* Header controls & Stats matching MN131 glass theme */}
      <div className="mn131-header-bar glass">
        <div className="mn131-stats-group">
          <div className="mn131-stat-card">
            <span className="stat-label">LƯỢT DI CHUYỂN</span>
            <span className="stat-value font-mono">{moveCount}</span>
          </div>
          <div className="mn131-stat-card">
            <span className="stat-label">THỜI GIAN</span>
            <span className="stat-value font-mono" style={{ color: '#c59b27' }}>
              {formatTime(elapsedMs)}
            </span>
          </div>
          <div className="mn131-stat-card">
            <span className="stat-label">ĐÃ KHÓA ĐÚNG</span>
            <span className="stat-value font-mono" style={{ color: '#22c55e' }}>
              {locked.filter(Boolean).length} / {size * size}
            </span>
          </div>
          <div className="mn131-stat-card">
            <span className="stat-label">TRẠNG THÁI</span>
            <span className="stat-value font-mono" style={{ fontSize: '0.95rem', color: isUnlocked ? (isRunning ? '#22c55e' : '#eab308') : '#dc2626' }}>
              {!isUnlocked ? '[CHƯA NHẬP MẬT MÃ]' : (!isRunning && moveCount === 0 ? '[CHỜ STEP ĐẦU TIÊN]' : '[ĐANG TÍNH GIỜ]')}
            </span>
          </div>
        </div>

        <div className="mn131-actions-group">
          {/* Size picker: 4x4, 6x6, 8x8 */}
          <div className="mn131-size-segmented">
            <span className="size-label font-mono">CỠ LƯỚI:</span>
            {[
              { label: '4x4 (Vòng 1)', val: 4 },
              { label: '6x6 (Bán kết)', val: 6 },
              { label: '8x8 (Chung kết)', val: 8 },
            ].map((btn) => (
              <button
                key={btn.val}
                className={`btn-size-choice font-mono ${size === btn.val ? 'active' : ''}`}
                onClick={() => onSizeChange(btn.val)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Tournament rules button */}
          <button
            className="btn-tournament-rule font-mono"
            onClick={onOpenTournamentModal}
            title="Xem thể lệ thi đấu giữa các nhóm"
          >
            [LUẬT ĐẤU NHÓM 1v1]
          </button>

          {!isUnlocked && (
            <button
              className="btn-mn131-primary font-mono"
              onClick={() => setShowPasswordModal(true)}
            >
              [BẮT ĐẦU / NHẬP PASS]
            </button>
          )}

          {/* Khách chưa nhập pass thì không xem được hình gốc */}
          {isUnlocked && (
            <button
              className={`btn-mn131-hint ${showHint ? 'active' : ''}`}
              onClick={handleToggleHint}
            >
              {showHint ? '[ẨN GỢI Ý]' : '[HIỆN HÌNH GỐC]'}
            </button>
          )}

          <button className="btn-mn131-sec" onClick={handleRandomNewImage}>
            [ĐỔI HÌNH NGẪU NHIÊN]
          </button>
          <button className="btn-mn131-primary" onClick={initPuzzle}>
            [TRỘN LẠI / RESET]
          </button>
        </div>
      </div>

      {/* Picture title banner */}
      <div className={`mn131-title-strip font-mono ${isSwitchingImage ? 'title-slide' : ''}`}>
        <span>TƯ LIỆU: {activeImage.title} ({currentImgIndex + 1}/{puzzleImages.length})</span>
        {selectedTileIndex !== null && (
          <span className="selecting-alert">
            ĐÃ CHỌN Ô #{selectedTileIndex + 1} — NHẤP Ô KHÁC ĐỂ ĐỔI VỊ TRÍ
          </span>
        )}
      </div>

      {/* Lock alert notice when not authenticated */}
      {!isUnlocked ? (
        <div className="mn131-lock-notice font-mono">
          <span>THÔNG BÁO: BÀN CỜ ĐANG KHÓA. BẤM "[BẮT ĐẦU / NHẬP PASS]" ĐỂ MỞ KHÓA KÉO THẢ & BẬT TÍNH NĂNG XEM HÌNH GỐC!</span>
        </div>
      ) : moveCount === 0 ? (
        <div className="mn131-lock-notice font-mono" style={{ background: '#fefce8', borderColor: '#eab308', color: '#854d0e' }}>
          <span>GỢI Ý: ĐÃ MỞ SẴN 1 Ô ĐÚNG LÀM ĐIỂM TỰA · ĐỒNG HỒ SẼ TỰ ĐỘNG BẤM GIỜ KHI BẠN DI CHUYỂN BƯỚC ĐẦU TIÊN!</span>
        </div>
      ) : null}

      {/* Hint original image */}
      {isUnlocked && showHint && (
        <div className="mn131-hint-container glass">
          <img
            src={imageUrl}
            alt="Hint"
            className="mn131-hint-img"
          />
          <div className="hint-caption font-mono">
            HÌNH GỐC ĐẦY ĐỦ · THAM KHẢO ĐỂ XẾP VỊ TRÍ
          </div>
        </div>
      )}

      {/* Main Puzzle Grid: Giữ nguyên bàn cờ các ô khi hoàn thành để hiển thị bức tranh trọn vẹn 100% */}
      <div
        className={`mn131-puzzle-grid ${isComplete ? 'complete' : ''} ${!isUnlocked ? 'locked-board' : ''} ${isSwitchingImage ? 'grid-image-switching' : 'grid-image-enter'}`}
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gap: isComplete ? '0px' : '2px',
          padding: isComplete ? '0px' : '8px',
        }}
        onClick={() => {
          if (!isUnlocked) setShowPasswordModal(true);
        }}
      >
        {tiles.map((tile, index) => {
          const row = Math.floor(tile / size);
          const col = tile % size;
          const xPos = (col / (size - 1)) * 100;
          const yPos = (row / (size - 1)) * 100;
          const isCorrect = tile === index;
          const isLocked = locked[index];
          const isSelected = selectedTileIndex === index;

          return (
            <div
              key={index}
              className={`mn131-tile ${isCorrect ? 'correct' : ''} ${isLocked ? 'locked' : ''} ${isSelected ? 'selected' : ''}`}
              draggable={!isLocked && isUnlocked && !isComplete}
              onDragStart={isLocked || isComplete ? undefined : (e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={isLocked || isComplete ? undefined : (e) => handleDrop(e, index)}
              onClick={(e) => {
                e.stopPropagation();
                if (!isComplete) handleTileClick(index);
              }}
              title={isComplete ? 'Bức tranh hoàn chỉnh' : !isUnlocked ? 'Cần nhập mật mã để chơi' : isLocked ? 'Ô đã đúng vị trí' : `Ô số #${index + 1}`}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: `${size * 100}% ${size * 100}%`,
                backgroundPosition: `${xPos}% ${yPos}%`,
                border: isComplete ? 'none' : undefined,
                borderRadius: isComplete ? '0px' : undefined,
                opacity: !isUnlocked ? 0.75 : isLocked ? 1 : 1,
                cursor: isComplete ? 'default' : !isUnlocked ? 'pointer' : isLocked ? 'not-allowed' : 'grab',
              }}
            >
              {!isComplete && isCorrect && <span className="correct-badge">ĐÚNG</span>}
              {!isComplete && isSelected && <span className="selected-badge">CHỌN</span>}
            </div>
          );
        })}
      </div>

      {/* Password Modal Form (*** hidden input) */}
      {showPasswordModal && (
        <div className="mn131-modal-overlay">
          <div className="mn131-password-card glass">
            <span className="font-mono" style={{ fontSize: '0.75rem', color: '#c59b27', letterSpacing: '0.1em' }}>
              [BẢO MẬT PHÒNG THI ĐẤU HCM202]
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#850005', margin: '4px 0' }}>
              NHẬP MẬT MÃ ĐỂ BẮT ĐẦU CHƠI
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
              Vui lòng nhập mật mã của ban tổ chức để mở khóa quyền kéo thả, tính giờ và xem hình gốc.
            </p>

            <form onSubmit={handlePasswordSubmit} className="password-form-wrap">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Nhập mật khẩu (dạng ***)..."
                className={`password-mask-input font-mono ${passwordError ? 'input-error' : ''}`}
                autoFocus
                autoComplete="off"
              />

              {passwordError && (
                <div className="password-error-text font-mono">
                  MẬT KHẨU KHÔNG CHÍNH XÁC! VUI LÒNG THỬ LẠI.
                </div>
              )}

              <div className="password-btn-group">
                <button type="submit" className="btn-mn131-primary font-mono" style={{ flex: 1 }}>
                  [XÁC NHẬN MỞ KHÓA]
                </button>
                <button
                  type="button"
                  className="btn-mn131-sec font-mono"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPasswordError(false);
                  }}
                >
                  [HỦY]
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Completion message banner */}
      {message && (
        <div className="mn131-win-banner glass win-celebration-animation">
          <div className="win-badge font-mono">[KẾT THÚC THÀNH CÔNG]</div>
          <div className="win-title font-serif">{message}</div>
          <div className="win-stats font-mono">
            <span>Thời gian: {formatTime(elapsedMs)}</span>
            <span>·</span>
            <span>Số bước: {moveCount} lượt</span>
            <span>·</span>
            <span>Lưới: {size}x{size}</span>
          </div>
          <div className="win-actions">
            <button className="btn-mn131-primary" onClick={handleRandomNewImage}>
              TRANH TIẾP THEO &rarr;
            </button>
            <button className="btn-mn131-sec" onClick={initPuzzle}>
              CHƠI LẠI VÁN NÀY
            </button>
          </div>
        </div>
      )}

      {/* Guide notes */}
      <div className="mn131-instructions font-mono">
        <span>THỂ LỆ THI ĐẤU: 4x4 (VÒNG BẢNG / TỨ KẾT) &rarr; 6x6 (BÁN KẾT) &rarr; 8x8 (CHUNG KẾT 1v1)</span>
        <span>QUY TẮC TÍNH ĐIỂM: ƯU TIÊN THỜI GIAN NHANH NHẤT &rarr; BẰNG NHAU XÉT ĐẾN SỐ LƯỢT DI CHUYỂN</span>
      </div>
    </div>
  );
}
