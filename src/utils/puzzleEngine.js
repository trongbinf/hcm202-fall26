/**
 * PUZZLE ENGINE UTILITIES
 * Pure math & logic - 100% Solvable parity, Time/Steps ranking
 */

// Procedural Canvas Vector Images for instant offline play (Zero external assets needed)
export function createPresetImages() {
  return {
    hcm_duongcachmenh: 'https://hochiminh.vn/publish/thumbnail/3000001/480x720xfull/upload/3000001/20251024/8952355cfd4f9213404028053b86c9c4duong-cach-menh-400x610.jpg',
    hcm_bacholanhdao: 'https://mediacdn.vinhlong.dcs.vn/media/2026/07/24/6a6332b47c365308b8a57a5f_3795f34f6cd3028e5003b3ff04a51683bac-ho-2018-01-31-15-50-300x180_high.jpg',
    hcm_thanhnien: 'https://file3.qdnd.vn/data/images/0/2025/01/06/upload_2058/33.jpg',
    arch: createArchPattern(),
    cyber: createCyberPattern(),
    nature: createNaturePattern(),
  };
}

function createArchPattern() {
  const canvas = document.createElement('canvas');
  canvas.width = 1000;
  canvas.height = 1000;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 1000, 1000);
  
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 1000; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0); ctx.lineTo(i, 1000);
    ctx.moveTo(0, i); ctx.lineTo(1000, i);
    ctx.stroke();
  }
  
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

// Generate Solved Tiles Array: [1, 2, ..., N*N - 1, 0]
export function createInitialTiles(size) {
  const total = size * size;
  const result = [];
  for (let i = 1; i < total; i++) {
    result.push(i);
  }
  result.push(0); // 0 is empty slot
  return result;
}

// Solvable Shuffle: Random walk guaranteed to remain within reachable permutation group
export function generateSolvableShuffle(size) {
  const total = size * size;
  const currentTiles = createInitialTiles(size);
  let emptyIdx = total - 1;
  let lastMovedVal = -1;
  const totalMoves = size * size * 15;

  for (let m = 0; m < totalMoves; m++) {
    const validNeighbors = getNeighbors(emptyIdx, size);
    const candidates = validNeighbors.filter(idx => currentTiles[idx] !== lastMovedVal);
    const chosenIdx = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : validNeighbors[Math.floor(Math.random() * validNeighbors.length)];

    lastMovedVal = currentTiles[chosenIdx];
    currentTiles[emptyIdx] = currentTiles[chosenIdx];
    currentTiles[chosenIdx] = 0;
    emptyIdx = chosenIdx;
  }

  return { tiles: currentTiles, emptyIndex: emptyIdx };
}

function getNeighbors(idx, size) {
  const row = Math.floor(idx / size);
  const col = idx % size;
  const res = [];
  if (row > 0) res.push(idx - size);
  if (row < size - 1) res.push(idx + size);
  if (col > 0) res.push(idx - 1);
  if (col < size - 1) res.push(idx + 1);
  return res;
}

// Slide Tile action: supports multi-tile row/column slides!
export function tryMoveTile(currentTiles, clickedIndex, size) {
  const emptyIndex = currentTiles.indexOf(0);
  const clickedRow = Math.floor(clickedIndex / size);
  const clickedCol = clickedIndex % size;
  const emptyRow = Math.floor(emptyIndex / size);
  const emptyCol = emptyIndex % size;

  if (clickedRow !== emptyRow && clickedCol !== emptyCol) {
    return null; // Not in the same line
  }

  const newTiles = [...currentTiles];

  if (clickedRow === emptyRow) {
    // Horizontal slide
    const step = clickedCol < emptyCol ? 1 : -1;
    let curr = emptyCol;
    while (curr !== clickedCol) {
      const next = curr - step;
      const fromIdx = clickedRow * size + next;
      const toIdx = clickedRow * size + curr;
      newTiles[toIdx] = newTiles[fromIdx];
      curr = next;
    }
    newTiles[clickedRow * size + clickedCol] = 0;
  } else if (clickedCol === emptyCol) {
    // Vertical slide
    const step = clickedRow < emptyRow ? 1 : -1;
    let curr = emptyRow;
    while (curr !== clickedRow) {
      const next = curr - step;
      const fromIdx = next * size + clickedCol;
      const toIdx = curr * size + clickedCol;
      newTiles[toIdx] = newTiles[fromIdx];
      curr = next;
    }
    newTiles[clickedRow * size + clickedCol] = 0;
  }

  return newTiles;
}

// Victory check
export function isPuzzleSolved(tiles) {
  const total = tiles.length;
  for (let i = 0; i < total - 1; i++) {
    if (tiles[i] !== i + 1) return false;
  }
  return tiles[total - 1] === 0;
}

// Millisecond Time Formatter: 00:00.00
export function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centis = Math.floor((ms % 1000) / 10);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
}

// Leaderboard Storage & Priority Sorting (Time First, then Steps)
export function getLeaderboardRecords(size) {
  try {
    const raw = localStorage.getItem(`sliding_puzzle_leaderboard_${size}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function sortLeaderboard(list) {
  return [...list].sort((a, b) => {
    // Priority 1: Time (Least time wins)
    if (a.timeMs !== b.timeMs) {
      return a.timeMs - b.timeMs;
    }
    // Priority 2: Steps (Fewer steps wins if time is tied)
    return a.steps - b.steps;
  });
}

export function saveLeaderboardRecord(size, record) {
  const current = getLeaderboardRecords(size);
  const updated = sortLeaderboard([...current, record]);
  try {
    localStorage.setItem(`sliding_puzzle_leaderboard_${size}`, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }
  return updated;
}
