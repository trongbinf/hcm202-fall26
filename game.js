/**
 * SLIDING TILE ENGINE - ZERO-ICON SPECIFICATION
 * Strict compliance with UI_RULES.md
 * Multi-size (8x8, 12x12, 4x4)
 * Ranking Priority: Time (Ascending) -> Steps (Ascending)
 */

(function () {
  'use strict';

  // Game Configuration State
  let gridSize = 8; // Default 8x8 as required
  let mode = 'image'; // 'image' | 'number'
  let showNumberHint = true;
  let currentPreset = 'arch';
  let activeImageUrl = '';
  
  // Board State
  let tiles = []; // 1D array representing tiles (0 = empty)
  let emptyIndex = 0;
  let gameState = 'idle'; // 'idle' | 'running' | 'completed'
  let stepCount = 0;
  
  // Timing State
  let timerInterval = null;
  let startTimestamp = 0;
  let elapsedMs = 0;
  
  // DOM Elements
  const puzzleBoard = document.getElementById('puzzleBoard');
  const boardFrame = document.getElementById('boardFrame');
  const gameStatusBadge = document.getElementById('gameStatusBadge');
  const clockDisplay = document.getElementById('clockDisplay');
  const timeDisplay = document.getElementById('timeDisplay');
  const stepDisplay = document.getElementById('stepDisplay');
  const gridSizeInfo = document.getElementById('gridSizeInfo');
  const boardDimensionNote = document.getElementById('boardDimensionNote');
  const bestRecordDisplay = document.getElementById('bestRecordDisplay');
  const bestRecordHolder = document.getElementById('bestRecordHolder');
  const leaderboardModeBadge = document.getElementById('leaderboardModeBadge');
  const leaderboardBody = document.getElementById('leaderboardBody');
  const previewOverlay = document.getElementById('previewOverlay');
  const previewImage = document.getElementById('previewImage');
  const uploadFilename = document.getElementById('uploadFilename');
  const customImageInput = document.getElementById('customImageInput');
  const hintToggleRow = document.getElementById('hintToggleRow');
  const showNumberHintCheckbox = document.getElementById('showNumberHint');
  
  // Modal Elements
  const winModal = document.getElementById('winModal');
  const winTimeVal = document.getElementById('winTimeVal');
  const winStepsVal = document.getElementById('winStepsVal');
  const winGridVal = document.getElementById('winGridVal');
  const winRankVal = document.getElementById('winRankVal');
  const playerNameInput = document.getElementById('playerNameInput');
  const btnSaveRecord = document.getElementById('btnSaveRecord');
  const btnPlayAgain = document.getElementById('btnPlayAgain');

  // Procedural Image Generators (Self-contained, 100% offline, zero icons)
  const proceduralImages = {
    arch: createArchPattern(),
    cyber: createCyberPattern(),
    nature: createNaturePattern()
  };

  function createArchPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    
    // Background deep navy
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 1000, 1000);
    
    // Grid coordinate lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 1000; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0); ctx.lineTo(i, 1000);
      ctx.moveTo(0, i); ctx.lineTo(1000, i);
      ctx.stroke();
    }
    
    // Bauhaus Architectural Constructs
    ctx.fillStyle = '#ea580c';
    ctx.beginPath();
    ctx.arc(350, 400, 240, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#eab308';
    ctx.fillRect(450, 250, 380, 480);
    
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(200, 850);
    ctx.lineTo(850, 850);
    ctx.lineTo(525, 450);
    ctx.closePath();
    ctx.fill();
    
    // Bold structural typography in image
    ctx.fillStyle = '#f8fafc';
    ctx.font = '800 64px "Space Grotesk", sans-serif';
    ctx.fillText('BAUHAUS ARCH // 08', 80, 140);
    
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 4;
    ctx.strokeRect(80, 180, 840, 4);
    
    return canvas.toDataURL('image/png');
  }

  function createCyberPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#090a0f';
    ctx.fillRect(0, 0, 1000, 1000);
    
    // Circuit vectors
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 3;
    for (let r = 100; r < 900; r += 120) {
      ctx.beginPath();
      ctx.moveTo(100, r);
      ctx.lineTo(500, r);
      ctx.lineTo(600, r + 60);
      ctx.lineTo(900, r + 60);
      ctx.stroke();
      
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(500 - 4, r - 4, 8, 8);
      ctx.fillRect(900 - 4, r + 60 - 4, 8, 8);
    }
    
    // Center CPU Core
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.strokeRect(350, 350, 300, 300);
    
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(360, 360, 280, 280);
    
    ctx.fillStyle = '#38bdf8';
    ctx.font = '700 42px "JetBrains Mono", monospace';
    ctx.fillText('CORE: MATRIX', 385, 480);
    ctx.font = '400 24px "JetBrains Mono", monospace';
    ctx.fillText('SYSTEM READY: 144 CH', 385, 530);
    
    return canvas.toDataURL('image/png');
  }

  function createNaturePattern() {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(0, 0, 1000, 1000);
    
    // Topographic contours
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    for (let r = 80; r < 950; r += 45) {
      ctx.beginPath();
      for (let x = 50; x <= 950; x += 30) {
        const y = r + Math.sin(x * 0.01 + r * 0.02) * 28 + Math.cos(x * 0.005) * 15;
        if (x === 50) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    
    ctx.fillStyle = '#fbbf24';
    ctx.font = '700 48px "Space Grotesk", sans-serif';
    ctx.fillText('TOPOGRAPHY // CONTOUR 2400m', 100, 120);
    
    return canvas.toDataURL('image/png');
  }

  // Formatting Utilities
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centis = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
  }

  function updateSystemClock() {
    const now = new Date();
    clockDisplay.textContent = now.toTimeString().split(' ')[0];
  }
  setInterval(updateSystemClock, 1000);
  updateSystemClock();

  // Leaderboard Management
  // Priority: 1. Time (asc), 2. Steps (asc)
  function getLeaderboardKey() {
    return `sliding_puzzle_leaderboard_${gridSize}`;
  }

  function getLeaderboard() {
    try {
      const data = localStorage.getItem(getLeaderboardKey());
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveLeaderboard(list) {
    try {
      localStorage.setItem(getLeaderboardKey(), JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }
  }

  function sortLeaderboard(list) {
    return list.sort((a, b) => {
      if (a.timeMs !== b.timeMs) {
        return a.timeMs - b.timeMs; // Priority 1: Least time
      }
      return a.steps - b.steps; // Priority 2: Least steps
    });
  }

  function renderLeaderboard() {
    leaderboardModeBadge.textContent = `[LƯỚI ${gridSize}x${gridSize}]`;
    const records = getLeaderboard();
    leaderboardBody.innerHTML = '';
    
    if (records.length === 0) {
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `<td colspan="4" class="empty-row font-mono">// CHƯA CÓ KỶ LỤC LƯU TRỮ //</td>`;
      leaderboardBody.appendChild(emptyRow);
      bestRecordDisplay.textContent = '--:--.-- / -- BƯỚC';
      bestRecordHolder.textContent = 'CHƯA CÓ KỶ LỤC';
      return;
    }

    const sorted = sortLeaderboard(records).slice(0, 10);
    
    // Update best record on HUD
    const best = sorted[0];
    bestRecordDisplay.textContent = `${formatTime(best.timeMs)} / ${best.steps} BƯỚC`;
    bestRecordHolder.textContent = `KỶ LỤC BỞI: ${best.name}`;

    sorted.forEach((item, idx) => {
      const tr = document.createElement('tr');
      if (idx === 0) tr.classList.add('rank-1');
      
      const rankBadge = idx === 0 ? '#01 [TOP]' : `#${String(idx + 1).padStart(2, '0')}`;
      tr.innerHTML = `
        <td>${rankBadge}</td>
        <td><strong>${formatTime(item.timeMs)}</strong> <span style="color: var(--text-muted); font-size: 0.65rem;">(${item.name})</span></td>
        <td>${item.steps}</td>
        <td style="color: var(--text-muted); font-size: 0.65rem;">${item.date || 'HÔM NAY'}</td>
      `;
      leaderboardBody.appendChild(tr);
    });
  }

  // Board Initialization & Render
  function initBoard() {
    const total = gridSize * gridSize;
    tiles = [];
    for (let i = 1; i < total; i++) {
      tiles.push(i);
    }
    tiles.push(0); // Empty slot at bottom-right
    emptyIndex = total - 1;
    stepCount = 0;
    elapsedMs = 0;
    stopTimer();
    updateMetricsUI();
    setGameStatus('idle', '[TRẠNG THÁI: SẴN SÀNG]');
    renderBoard();
    renderLeaderboard();
  }

  function setGameStatus(state, badgeText) {
    gameState = state;
    gameStatusBadge.textContent = badgeText;
    if (state === 'running') {
      gameStatusBadge.className = 'status-indicator running';
    } else {
      gameStatusBadge.className = 'status-indicator';
    }
  }

  function updateMetricsUI() {
    timeDisplay.textContent = formatTime(elapsedMs);
    stepDisplay.innerHTML = `${String(stepCount).padStart(4, '0')} <span class="unit">BƯỚC</span>`;
    gridSizeInfo.textContent = `LƯỚI: ${gridSize} X ${gridSize} (${gridSize * gridSize} Ô)`;
    boardDimensionNote.textContent = `TỔNG ${gridSize * gridSize - 1} Ô + 1 Ô TRỐNG [CỐT LÕI TOÁN HỌC: SOLVABLE]`;
  }

  function startTimer() {
    if (timerInterval) return;
    startTimestamp = performance.now() - elapsedMs;
    timerInterval = setInterval(() => {
      elapsedMs = performance.now() - startTimestamp;
      timeDisplay.textContent = formatTime(elapsedMs);
    }, 30);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Render Puzzle Board DOM
  function renderBoard() {
    puzzleBoard.innerHTML = '';
    puzzleBoard.className = `puzzle-board grid-${gridSize}`;
    puzzleBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    puzzleBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    // Set board size CSS var for picture positioning
    const frameRect = boardFrame.getBoundingClientRect();
    const currentSize = frameRect.width > 0 ? frameRect.width : 580;
    puzzleBoard.style.setProperty('--board-size', `${currentSize}px`);

    tiles.forEach((value, index) => {
      const tileEl = document.createElement('div');
      tileEl.className = 'puzzle-tile';
      tileEl.dataset.index = index;

      if (value === 0) {
        tileEl.classList.add('empty');
      } else {
        // Tile has content
        if (mode === 'image' && activeImageUrl) {
          tileEl.classList.add('tile-image');
          tileEl.style.backgroundImage = `url("${activeImageUrl}")`;
          
          // Original position of this tile in 0-indexed grid
          const originalPos = value - 1;
          const origRow = Math.floor(originalPos / gridSize);
          const origCol = originalPos % gridSize;
          
          // Background position percentage
          const percentX = (origCol / (gridSize - 1)) * 100;
          const percentY = (origRow / (gridSize - 1)) * 100;
          tileEl.style.backgroundPosition = `${percentX}% ${percentY}%`;
          tileEl.style.backgroundSize = `${gridSize * 100}% ${gridSize * 100}%`;

          // Optional subtle number hint in the corner
          if (showNumberHint) {
            const hint = document.createElement('span');
            hint.className = 'hint-badge font-mono';
            hint.textContent = value;
            tileEl.appendChild(hint);
          }
        } else {
          // Number Mode
          const numSpan = document.createElement('span');
          numSpan.className = 'tile-number font-mono';
          numSpan.textContent = value;
          tileEl.appendChild(numSpan);
        }

        // Attach click listener
        tileEl.addEventListener('click', () => handleTileClick(index));
      }

      puzzleBoard.appendChild(tileEl);
    });
  }

  // Solvable Shuffle:
  // Random walk from the solved state ensures 100% mathematical solvability!
  function shuffleBoard() {
    initBoard();
    const totalMoves = gridSize * gridSize * 15; // Sufficient random walk
    let lastMovedVal = -1;

    for (let m = 0; m < totalMoves; m++) {
      const validNeighbors = getValidNeighbors(emptyIndex);
      // Avoid immediately undoing previous move for better randomization
      const candidates = validNeighbors.filter(idx => tiles[idx] !== lastMovedVal);
      const chosenIdx = candidates.length > 0
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : validNeighbors[Math.floor(Math.random() * validNeighbors.length)];

      lastMovedVal = tiles[chosenIdx];
      // Swap tiles
      tiles[emptyIndex] = tiles[chosenIdx];
      tiles[chosenIdx] = 0;
      emptyIndex = chosenIdx;
    }

    stepCount = 0;
    elapsedMs = 0;
    setGameStatus('running', '[TRẠNG THÁI: ĐANG CHƠI]');
    startTimer();
    updateMetricsUI();
    renderBoard();
  }

  function getValidNeighbors(idx) {
    const row = Math.floor(idx / gridSize);
    const col = idx % gridSize;
    const neighbors = [];

    if (row > 0) neighbors.push(idx - gridSize); // Up
    if (row < gridSize - 1) neighbors.push(idx + gridSize); // Down
    if (col > 0) neighbors.push(idx - 1); // Left
    if (col < gridSize - 1) neighbors.push(idx + 1); // Right

    return neighbors;
  }

  // Tile Interaction & Row/Column Line Push
  function handleTileClick(index) {
    if (gameState === 'idle') {
      // Auto start on first move if not shuffled
      setGameStatus('running', '[TRẠNG THÁI: ĐANG CHƠI]');
      startTimer();
    }
    if (gameState === 'completed') return;

    const clickedRow = Math.floor(index / gridSize);
    const clickedCol = index % gridSize;
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;

    // Check if in the same row or column as empty slot
    if (clickedRow === emptyRow) {
      // Horizontal slide
      const step = clickedCol < emptyCol ? 1 : -1;
      let curr = emptyCol;
      while (curr !== clickedCol) {
        const next = curr - step;
        const fromIdx = clickedRow * gridSize + next;
        const toIdx = clickedRow * gridSize + curr;
        tiles[toIdx] = tiles[fromIdx];
        curr = next;
      }
      tiles[clickedRow * gridSize + clickedCol] = 0;
      emptyIndex = clickedRow * gridSize + clickedCol;
      
      stepCount++;
      updateMetricsUI();
      renderBoard();
      checkWin();
    } else if (clickedCol === emptyCol) {
      // Vertical slide
      const step = clickedRow < emptyRow ? 1 : -1;
      let curr = emptyRow;
      while (curr !== clickedRow) {
        const next = curr - step;
        const fromIdx = next * gridSize + clickedCol;
        const toIdx = curr * gridSize + clickedCol;
        tiles[toIdx] = tiles[fromIdx];
        curr = next;
      }
      tiles[clickedRow * gridSize + clickedCol] = 0;
      emptyIndex = clickedRow * gridSize + clickedCol;

      stepCount++;
      updateMetricsUI();
      renderBoard();
      checkWin();
    }
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (gameState === 'completed') return;
    
    // Prevent default scroll for arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }

    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    let targetIdx = -1;

    // Notice: Arrow Up slides the tile BELOW into the empty spot, and vice versa
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
      handleTileClick(targetIdx);
    }
  });

  // Win Detection
  function checkWin() {
    const total = gridSize * gridSize;
    for (let i = 0; i < total - 1; i++) {
      if (tiles[i] !== i + 1) return false;
    }
    if (tiles[total - 1] !== 0) return false;

    // Victory achieved!
    stopTimer();
    setGameStatus('completed', '[TRẠNG THÁI: HOÀN THÀNH]');
    showVictoryModal();
    return true;
  }

  function calculateRank(timeMs, steps) {
    const list = getLeaderboard();
    const temp = [...list, { timeMs, steps }];
    const sorted = sortLeaderboard(temp);
    const rank = sorted.findIndex(item => item.timeMs === timeMs && item.steps === steps) + 1;
    return rank;
  }

  function showVictoryModal() {
    winTimeVal.textContent = formatTime(elapsedMs);
    winStepsVal.textContent = `${stepCount} BƯỚC`;
    winGridVal.textContent = `${gridSize}x${gridSize} (${gridSize * gridSize} Ô)`;
    const rank = calculateRank(elapsedMs, stepCount);
    winRankVal.textContent = `HẠNG #${rank}`;
    
    winModal.classList.remove('hidden');
    playerNameInput.focus();
  }

  function saveRecordAndClose() {
    const name = playerNameInput.value.trim().toUpperCase() || 'PLAYER';
    const now = new Date();
    const dateStr = `${now.getDate()}/${now.getMonth() + 1}`;
    
    const records = getLeaderboard();
    records.push({
      name,
      timeMs: elapsedMs,
      steps: stepCount,
      date: dateStr
    });
    
    saveLeaderboard(sortLeaderboard(records));
    winModal.classList.add('hidden');
    renderLeaderboard();
  }

  // Event Listeners for UI Controls
  // 1. Grid Size selector buttons
  document.querySelectorAll('.btn-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gridSize = parseInt(btn.dataset.size, 10);
      initBoard();
    });
  });

  // 2. Mode buttons (Image / Number)
  document.getElementById('btnModeImage').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('btnModeNumber').classList.remove('active');
    mode = 'image';
    document.getElementById('imagePresetSection').style.display = 'flex';
    hintToggleRow.style.display = 'block';
    renderBoard();
  });

  document.getElementById('btnModeNumber').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('btnModeImage').classList.remove('active');
    mode = 'number';
    document.getElementById('imagePresetSection').style.display = 'none';
    hintToggleRow.style.display = 'none';
    renderBoard();
  });

  // 3. Hint Checkbox
  showNumberHintCheckbox.addEventListener('change', (e) => {
    showNumberHint = e.target.checked;
    renderBoard();
  });

  // 4. Presets
  document.querySelectorAll('.btn-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPreset = btn.dataset.preset;
      activeImageUrl = proceduralImages[currentPreset];
      previewImage.src = activeImageUrl;
      renderBoard();
    });
  });

  // 5. Custom Image Upload
  customImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadFilename.textContent = file.name;
      const reader = new FileReader();
      reader.onload = function(evt) {
        activeImageUrl = evt.target.result;
        previewImage.src = activeImageUrl;
        document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
        renderBoard();
      };
      reader.readAsDataURL(file);
    }
  });

  // 6. Action buttons
  document.getElementById('btnStartShuffle').addEventListener('click', shuffleBoard);
  document.getElementById('btnResetBoard').addEventListener('click', initBoard);

  // 7. Preview Toggle (Hold or Click)
  const btnPreviewToggle = document.getElementById('btnPreviewToggle');
  const showPreview = () => previewOverlay.classList.remove('hidden');
  const hidePreview = () => previewOverlay.classList.add('hidden');
  
  btnPreviewToggle.addEventListener('mousedown', showPreview);
  btnPreviewToggle.addEventListener('mouseup', hidePreview);
  btnPreviewToggle.addEventListener('mouseleave', hidePreview);
  btnPreviewToggle.addEventListener('touchstart', showPreview);
  btnPreviewToggle.addEventListener('touchend', hidePreview);

  // 8. Clear Leaderboard
  document.getElementById('btnClearBoard').addEventListener('click', () => {
    if (confirm(`Bạn có chắc chắn muốn xóa bảng xếp hạng cho chế độ ${gridSize}x${gridSize}?`)) {
      localStorage.removeItem(getLeaderboardKey());
      renderLeaderboard();
    }
  });

  // 9. Modal actions
  btnSaveRecord.addEventListener('click', saveRecordAndClose);
  btnPlayAgain.addEventListener('click', () => {
    winModal.classList.add('hidden');
    shuffleBoard();
  });
  playerNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveRecordAndClose();
  });

  // Initial load
  activeImageUrl = proceduralImages.arch;
  previewImage.src = activeImageUrl;
  initBoard();

  // Resize handler for responsive board canvas
  window.addEventListener('resize', () => {
    const frameRect = boardFrame.getBoundingClientRect();
    if (frameRect.width > 0) {
      puzzleBoard.style.setProperty('--board-size', `${frameRect.width}px`);
    }
  });

})();
