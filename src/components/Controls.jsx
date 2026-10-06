import React, { useRef, useState } from 'react';

export default function Controls({
  gridSize,
  setGridSize,
  mode,
  setMode,
  showHint,
  setShowHint,
  currentPreset,
  setCurrentPreset,
  customFileName,
  onCustomImageUpload,
  onUrlImageLoad,
  onStartShuffle,
  onResetBoard,
  setIsPreviewing,
}) {
  const fileInputRef = useRef(null);
  const [inputUrl, setInputUrl] = useState('');
  const [urlError, setUrlError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onCustomImageUpload(file);
      setUrlError('');
    }
  };

  const handleApplyUrl = () => {
    const trimmed = inputUrl.trim();
    if (!trimmed) {
      setUrlError('[VUI LÒNG NHẬP LINK ẢNH TRỰC TIẾP]');
      return;
    }
    if (trimmed.includes('google.com/search')) {
      setUrlError('[LƯU Ý: ĐÂY LÀ LINK TÌM KIẾM GOOGLE. HÃY CHUỘT PHẢI VÀO ẢNH > SAO CHÉP ĐỊA CHỈ HÌNH ẢNH HOẶC TẢI VỀ MÁY RỒI BẤM TẢI ẢNH]');
    } else {
      setUrlError('');
    }
    onUrlImageLoad(trimmed);
  };

  return (
    <div className="hcm-controls-box">
      {/* 01. Grid Size (8x8 and 12x12 required) */}
      <div>
        <label className="control-label">// 01. KÍCH THƯỚC LƯỚI Ô HÌNH</label>
        <div className="grid-selector-row">
          <button
            className={`btn-grid-select ${gridSize === 8 ? 'active' : ''}`}
            onClick={() => setGridSize(8)}
          >
            [08x08] 64 Ô
          </button>
          <button
            className={`btn-grid-select ${gridSize === 12 ? 'active' : ''}`}
            onClick={() => setGridSize(12)}
          >
            [12x12] 144 Ô
          </button>
          <button
            className={`btn-grid-select ${gridSize === 4 ? 'active' : ''}`}
            onClick={() => setGridSize(4)}
          >
            [04x04] TEST
          </button>
        </div>
      </div>

      {/* 02. Theme Presets */}
      <div>
        <label className="control-label">// 02. ẢNH TƯ LIỆU BÀI HỌC (HCM202)</label>
        <select
          className="theme-dropdown-select"
          value={currentPreset}
          onChange={(e) => {
            setCurrentPreset(e.target.value);
            setUrlError('');
          }}
        >
          <option value="hcm_duongcachmenh">Tác phẩm "Đường cách mệnh" (1927)</option>
          <option value="hcm_thanhnien">Hội Việt Nam Cách mạng Thanh niên</option>
          <option value="hcm_bacholanhdao">Bác Hồ lãnh đạo toàn dân kháng chiến</option>
          <option value="arch">Hình học nghệ thuật Bauhaus</option>
          <option value="cyber">Vi mạch điện toán Cyber Core</option>
          <option value="nature">Địa hình đường đồng mức</option>
        </select>
      </div>

      {/* 03. Custom Image Options */}
      <div>
        <label className="control-label">// 03. NẠP ẢNH TÙY CHỌN</label>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          <input
            type="text"
            className="search-input-pill"
            style={{ width: '100%', fontSize: '0.72rem' }}
            placeholder="Dán link ảnh (.jpg, .png)..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleApplyUrl()}
          />
          <button
            className="btn-action-sub"
            style={{ padding: '6px 10px', fontSize: '0.7rem' }}
            onClick={handleApplyUrl}
          >
            NẠP
          </button>
        </div>
        {urlError && (
          <div className="font-mono" style={{ fontSize: '0.65rem', color: '#b91c1c', marginBottom: '6px', lineHeight: 1.3 }}>
            {urlError}
          </div>
        )}

        <button
          className="btn-action-sub"
          style={{ width: '100%', fontSize: '0.72rem', padding: '8px' }}
          onClick={() => fileInputRef.current?.click()}
        >
          TẢI ẢNH TỪ THIẾT BỊ [UPLOAD FILE]
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div className="font-mono text-muted" style={{ fontSize: '0.65rem', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {customFileName || 'CHƯA CHỌN TỆP RIÊNG'}
        </div>
      </div>

      {/* 04. Display Options */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label className="custom-checkbox" style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showHint}
            onChange={(e) => setShowHint(e.target.checked)}
          />
          <span className="font-mono text-gold" style={{ fontWeight: 800 }}>{showHint ? '[X]' : '[ ]'}</span>
          <span className="font-mono">HIỆN SỐ THỨ TỰ Ô</span>
        </label>

        <button
          className="btn-action-sub"
          style={{ padding: '4px 8px', fontSize: '0.68rem' }}
          onMouseDown={() => setIsPreviewing(true)}
          onMouseUp={() => setIsPreviewing(false)}
          onMouseLeave={() => setIsPreviewing(false)}
          onTouchStart={() => setIsPreviewing(true)}
          onTouchEnd={() => setIsPreviewing(false)}
        >
          XEM ẢNH [HOLD]
        </button>
      </div>

      {/* 05. Main Actions */}
      <div className="action-row">
        <button className="btn-action-main font-mono" onClick={onStartShuffle}>
          XÁO TRỘN & BẮT ĐẦU
        </button>
        <button className="btn-action-sub font-mono" onClick={onResetBoard}>
          ĐẶT LẠI
        </button>
      </div>
    </div>
  );
}
