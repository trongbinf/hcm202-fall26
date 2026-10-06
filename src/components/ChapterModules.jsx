import React, { useState } from 'react';
import {
  PART_I_DATA,
  PART_II_DATA,
  PART_III_DATA,
  KEY_QUOTES,
  CHAPTER_INFO
} from '../data/chapterData';
import { puzzleImages } from '../data/puzzles';

export default function ChapterModules({ onNavigateToGame }) {
  const [activeTab, setActiveTab] = useState('part-1');
  const [quoteSearch, setQuoteSearch] = useState('');

  const filteredQuotes = KEY_QUOTES.filter(
    (q) =>
      q.content.toLowerCase().includes(quoteSearch.toLowerCase()) ||
      q.topic.toLowerCase().includes(quoteSearch.toLowerCase()) ||
      q.work.toLowerCase().includes(quoteSearch.toLowerCase())
  );

  const handleNextSection = (nextTab) => {
    setActiveTab(nextTab);
    const element = document.getElementById('noi-dung-bai-hoc');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="chapter-modules-container">
      {/* Navigation Tabs for Outlines */}
      <div className="modules-nav-tabs font-mono">
        <button
          className={`module-tab-btn ${activeTab === 'part-1' ? 'active' : ''}`}
          onClick={() => setActiveTab('part-1')}
        >
          [I. ĐẢNG CỘNG SẢN VIỆT NAM]
        </button>
        <button
          className={`module-tab-btn ${activeTab === 'part-2' ? 'active' : ''}`}
          onClick={() => setActiveTab('part-2')}
        >
          [II. NHÀ NƯỚC CỦA DÂN, DO DÂN, VÌ DÂN]
        </button>
        <button
          className={`module-tab-btn ${activeTab === 'part-3' ? 'active' : ''}`}
          onClick={() => setActiveTab('part-3')}
        >
          [III. VẬN DỤNG VÀO THỰC TIỄN]
        </button>
        <button
          className={`module-tab-btn ${activeTab === 'quotes' ? 'active' : ''}`}
          onClick={() => setActiveTab('quotes')}
        >
          [KHO TRÍCH DẪN TOÀN TẬP]
        </button>
      </div>

      {/* ==============================================================
          TAB 1: PHẦN I - ĐẢNG CỘNG SẢN VIỆT NAM
          ============================================================== */}
      {activeTab === 'part-1' && (
        <div className="module-content-pane">
          {/* Section Hero Card */}
          <div className="module-header-card">
            <div className="badge-tag">{PART_I_DATA.tag} · {PART_I_DATA.pageRange}</div>
            <h2 className="module-title font-serif">{PART_I_DATA.title}</h2>
            <p className="module-summary">{PART_I_DATA.summary}</p>
          </div>

          {/* Gallery ảnh tư liệu chính thức lấy từ file HCM202_Chuong4_NoiDung.md */}
          <div className="lesson-media-banner" style={{ marginTop: '24px' }}>
            <div className="lesson-image-card">
              <img
                src={puzzleImages[0]?.src}
                alt={puzzleImages[0]?.title}
                className="lesson-historical-img"
              />
              <div className="lesson-img-caption font-mono">
                {puzzleImages[0]?.title}
              </div>
            </div>
            <div className="lesson-image-card">
              <img
                src={puzzleImages[1]?.src}
                alt={puzzleImages[1]?.title}
                className="lesson-historical-img"
              />
              <div className="lesson-img-caption font-mono">
                {puzzleImages[1]?.title}
              </div>
            </div>
          </div>

          {/* I.1 Tính tất yếu & Vai trò */}
          <section className="section-block">
            <h3 className="section-block-title font-serif">
              I.1. Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam
            </h3>

            {/* So sánh luận điểm Mác - Lênin vs HCM */}
            <div className="comparison-box">
              <div className="comparison-col">
                <span className="col-label font-mono">QUAN ĐIỂM MÁC - LÊNIN</span>
                <div className="formula-tag font-mono">
                  ĐẢNG = CN MÁC + PHONG TRÀO CÔNG NHÂN
                </div>
                <p className="col-desc">
                  Áp dụng cho các nước tư bản công nghiệp phát triển, nơi giai cấp vô sản chiếm đa số và mâu thuẫn giai cấp vô sản - tư sản là chủ yếu.
                </p>
              </div>

              <div className="comparison-col col-highlight">
                <span className="col-label font-mono">SÁNG TẠO HỒ CHÍ MINH</span>
                <div className="formula-tag font-mono text-crimson">
                  ĐẢNG = CN MÁC-LÊNIN + PT CÔNG NHÂN + PT YÊU NƯỚC
                </div>
                <p className="col-desc">
                  Phát triển sáng tạo phù hợp với Việt Nam - nước thuộc địa nửa phong kiến. Phong trào yêu nước có trước và gắn bó máu thịt với giai cấp công nhân.
                </p>
              </div>
            </div>

            {/* Ảnh Hội VN Cách mạng Thanh niên */}
            <div className="single-image-spotlight" style={{ margin: '24px 0' }}>
              <div className="lesson-image-card" style={{ maxWidth: '640px', margin: '0 auto' }}>
                <img
                  src={puzzleImages[2]?.src}
                  alt={puzzleImages[2]?.title}
                  className="lesson-historical-img"
                  style={{ height: '300px' }}
                />
                <div className="lesson-img-caption font-mono">
                  {puzzleImages[2]?.title}
                </div>
              </div>
            </div>

            {/* Quote Spotlight */}
            <div className="quote-spotlight font-serif">
              <span className="quote-mark font-serif">“</span>
              <p className="quote-text">
                {PART_I_DATA.highlightQuote.text}
              </p>
              <div className="quote-author font-mono">
                — {PART_I_DATA.highlightQuote.author}, tác phẩm <em>{PART_I_DATA.highlightQuote.work}</em> ({PART_I_DATA.highlightQuote.year})
              </div>
            </div>
          </section>

          {/* I.2 Xây dựng Đảng trong sạch, vững mạnh */}
          <section className="section-block">
            <h3 className="section-block-title font-serif">
              I.2. Đảng phải trong sạch, vững mạnh (Cầm quyền & Đạo đức)
            </h3>

            {/* Ảnh kỷ niệm 30 năm thành lập Đảng */}
            <div className="lesson-media-banner" style={{ marginBottom: '24px' }}>
              <div className="lesson-image-card">
                <img
                  src={puzzleImages[3]?.src}
                  alt={puzzleImages[3]?.title}
                  className="lesson-historical-img"
                />
                <div className="lesson-img-caption font-mono">
                  {puzzleImages[3]?.title}
                </div>
              </div>
              <div className="lesson-image-card">
                <img
                  src={puzzleImages[4]?.src}
                  alt={puzzleImages[4]?.title}
                  className="lesson-historical-img"
                />
                <div className="lesson-img-caption font-mono">
                  {puzzleImages[4]?.title}
                </div>
              </div>
            </div>

            {/* 4 Trụ cột xây dựng Đảng */}
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-header font-serif">1. Tư tưởng & Lý luận</div>
                <p className="pillar-body">
                  Lấy chủ nghĩa Mác - Lênin làm "cốt", làm kim chỉ nam. Đảng không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam.
                </p>
              </div>
              <div className="pillar-card">
                <div className="pillar-header font-serif">2. Chính trị vững vàng</div>
                <p className="pillar-body">
                  Xây dựng đường lối độc lập dân tộc gắn liền CNXH. Đường lối phải dựa trên thực tiễn dân tộc và nguyện vọng thiết tha của nhân dân.
                </p>
              </div>
              <div className="pillar-card">
                <div className="pillar-header font-serif">3. Tổ chức & Kỷ luật</div>
                <p className="pillar-body">
                  Tổ chức chặt chẽ từ Trung ương đến chi bộ. Chi bộ là tế bào của Đảng, là cầu nối trực tiếp nhất giữa Đảng với quần chúng nhân dân.
                </p>
              </div>
              <div className="pillar-card">
                <div className="pillar-header font-serif">4. Đạo đức cách mạng</div>
                <p className="pillar-body">
                  "Đảng ta là đạo đức, là văn minh". Cán bộ, đảng viên phải là người đầy tớ thật trung thành của nhân dân, chống chủ nghĩa cá nhân.
                </p>
              </div>
            </div>

            {/* 8 Nguyên tắc tổ chức sinh hoạt Đảng */}
            <div className="concept-card" style={{ marginTop: '32px' }}>
              <div className="card-badge font-mono">// NGUYÊN TẮC CỐT LÕI</div>
              <h4 className="card-heading font-serif">8 Nguyên tắc tổ chức & sinh hoạt Đảng theo Tư tưởng Hồ Chí Minh</h4>
              <div className="principles-tags-cloud font-mono">
                {PART_I_DATA.principles.map((pr, i) => (
                  <span key={i} className="principle-pill">
                    <strong>0{i + 1}.</strong> {pr}
                  </span>
                ))}
              </div>
            </div>

            {/* Xây dựng đội ngũ cán bộ */}
            <div className="concept-card highlight-border" style={{ marginTop: '32px' }}>
              <div className="card-badge font-mono">// CÁN BỘ LÀ CÁI GỐC CỦA MỌI CÔNG VIỆC</div>
              <h4 className="card-heading font-serif">9 Yêu cầu trong công tác cán bộ của Hồ Chí Minh</h4>
              <p className="card-text">
                Người khẳng định: "Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém". Người cán bộ phải vừa có <strong>ĐỨC</strong> vừa có <strong>TÀI</strong>, vừa "hồng" vừa "chuyên", trong đó ĐỨC là gốc.
              </p>

              <div className="cadre-checklist-grid font-sans">
                <div className="cadre-item"><span className="cadre-num font-mono">1</span> Phải hiểu và đánh giá đúng cán bộ</div>
                <div className="cadre-item"><span className="cadre-num font-mono">2</span> Huấn luyện cán bộ thiết thực, hiệu quả</div>
                <div className="cadre-item"><span className="cadre-num font-mono">3</span> Phải đề bạt đúng cán bộ</div>
                <div className="cadre-item"><span className="cadre-num font-mono">4</span> Sắp xếp, sử dụng cán bộ cho đúng việc</div>
                <div className="cadre-item"><span className="cadre-num font-mono">5</span> Kết hợp cán bộ cấp trên với địa phương</div>
                <div className="cadre-item"><span className="cadre-num font-mono">6</span> Chống bệnh địa phương, cục bộ hẹp hòi</div>
                <div className="cadre-item"><span className="cadre-num font-mono">7</span> Kết hợp hài hòa cán bộ trẻ với cán bộ cũ</div>
                <div className="cadre-item"><span className="cadre-num font-mono">8</span> Phòng ngừa và chống các tiêu cực cán bộ</div>
                <div className="cadre-item"><span className="cadre-num font-mono">9</span> Thường xuyên kiểm tra, giúp đỡ cán bộ</div>
              </div>
            </div>
          </section>

          {/* Chuyển đến Phần tiếp theo */}
          <div className="module-cta-card">
            <span className="font-mono text-gold">[TIẾP TỤC TIẾN TRÌNH HỌC TẬP]</span>
            <h4 className="font-serif">Bạn đã hoàn thành xong Phần I: Đảng Cộng sản Việt Nam</h4>
            <p>Hãy chuyển sang nghiên cứu phần tiếp theo để nắm vững toàn bộ kiến thức bài học trước khi tham gia minigame.</p>
            <button className="btn-action-main font-mono" onClick={() => handleNextSection('part-2')}>
              CHUYỂN ĐẾN PHẦN TIẾP THEO: [II. NHÀ NƯỚC CỦA DÂN, DO DÂN, VÌ DÂN] &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 2: PHẦN II - NHÀ NƯỚC CỦA NHÂN DÂN, DO NHÂN DÂN, VÌ NHÂN DÂN
          ============================================================== */}
      {activeTab === 'part-2' && (
        <div className="module-content-pane">
          <div className="module-header-card">
            <div className="badge-tag">{PART_II_DATA.tag} · {PART_II_DATA.pageRange}</div>
            <h2 className="module-title font-serif">{PART_II_DATA.title}</h2>
            <p className="module-summary">{PART_II_DATA.summary}</p>
          </div>

          {/* Gallery tư liệu cho Phần 2 từ file markdown */}
          <div className="lesson-media-banner" style={{ marginTop: '24px' }}>
            <div className="lesson-image-card">
              <img
                src={puzzleImages[4 % puzzleImages.length]?.src}
                alt={puzzleImages[4 % puzzleImages.length]?.title}
                className="lesson-historical-img"
              />
              <div className="lesson-img-caption font-mono">
                {puzzleImages[4 % puzzleImages.length]?.title}
              </div>
            </div>
            <div className="lesson-image-card">
              <img
                src={puzzleImages[5 % puzzleImages.length]?.src}
                alt={puzzleImages[5 % puzzleImages.length]?.title}
                className="lesson-historical-img"
              />
              <div className="lesson-img-caption font-mono">
                {puzzleImages[5 % puzzleImages.length]?.title}
              </div>
            </div>
          </div>

          {/* II.1 Nhà nước dân chủ */}
          <section className="section-block">
            <h3 className="section-block-title font-serif">
              II.1. Nhà nước Dân chủ: Bản chất và Ba chiều không gian quyền lực
            </h3>

            <div className="pillars-3-grid">
              <div className="pillar-box">
                <div className="pillar-tag font-mono">CỦA NHÂN DÂN</div>
                <h4 className="font-serif">Quyền lực tối cao thuộc về dân</h4>
                <p>Mọi quyền bính trong nước đều là của nhân dân. Dân là người chủ tối cao. Nhân dân thực thi quyền lực thông qua Quốc hội và HĐND do chính dân bầu cử tự do.</p>
              </div>

              <div className="pillar-box">
                <div className="pillar-tag font-mono">DO NHÂN DÂN</div>
                <h4 className="font-serif">Dân ủng hộ, bảo vệ & đóng thuế</h4>
                <p>Nhà nước do dân bầu ra, được dân nuôi dưỡng, che chở và kiểm tra giám sát. "Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân".</p>
              </div>

              <div className="pillar-box">
                <div className="pillar-tag font-mono">VÌ NHÂN DÂN</div>
                <h4 className="font-serif">Công bộc phục vụ lợi ích của dân</h4>
                <p>Nhà nước không có đặc quyền cá nhân, mọi chính sách phải nhằm nâng cao đời sống dân sinh: "Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh".</p>
              </div>
            </div>
          </section>

          {/* II.2 Nhà nước pháp quyền */}
          <section className="section-block">
            <h3 className="section-block-title font-serif">
              II.2. Nhà nước Pháp quyền có hiệu lực pháp lý mạnh mẽ
            </h3>

            <div className="two-pillars-grid">
              <div className="pillar-card border-gold">
                <div className="pillar-header font-serif">Quản lý đất nước bằng Hiến pháp & Pháp luật</div>
                <p className="pillar-body">
                  Năm 1919: Bản <em>Yêu sách của nhân dân An Nam</em> đã đòi "Trăm điều phải có thần linh pháp quyền".<br />
                  Chủ tịch Hồ Chí Minh trực tiếp chỉ đạo soạn thảo <strong>Hiến pháp năm 1946</strong> và <strong>Hiến pháp năm 1959</strong>, đặt nền móng pháp lý vững chắc cho Nhà nước Việt Nam mới.
                </p>
              </div>

              <div className="pillar-card border-gold">
                <div className="pillar-header font-serif">Thượng tôn pháp luật & Tính nghiêm minh</div>
                <p className="pillar-body">
                  Pháp luật không thiên vị bất kỳ ai, từ Chủ tịch nước đến người dân bình thường. "Pháp luật phải nghiêm minh, công bằng, bảo đảm quyền tự do dân chủ thực sự của nhân dân".
                </p>
              </div>
            </div>

            {/* Phòng chống tiêu cực */}
            <div className="concept-card highlight-border" style={{ marginTop: '32px' }}>
              <div className="card-badge font-mono">// PHÒNG NGỪA SUY THOÁI</div>
              <h4 className="card-heading font-serif">Nhận diện và triệt tiêu 3 căn bệnh nguy hiểm trong bộ máy nhà nước</h4>

              <div className="diseases-grid">
                <div className="disease-card">
                  <span className="disease-name font-serif">1. Đặc quyền, đặc lợi</span>
                  <p>Thói cậy mình là người trong cơ quan chính quyền để cửa quyền, hách dịch với dân, lạm quyền để mưu cầu tư lợi cá nhân.</p>
                </div>
                <div className="disease-card highlight-danger">
                  <span className="disease-name font-serif">2. Tham ô, lãng phí, quan liêu</span>
                  <p>Hồ Chí Minh gọi đây là "giặc ở trong lòng", là bạn đồng minh của thực dân phong kiến, tội lỗi nặng như tội làm tay sai, mật thám.</p>
                  <div className="decree-callout font-mono">
                    [LỊCH SỬ] Ngày 26/1/1946: Ký Sắc lệnh xử phạt tội tham ô đến mức TỬ HÌNH.<br />
                    Ngày 27/11/1946: Ký Sắc lệnh xử phạt tội hối lộ từ 5 - 20 năm tù khổ sai.
                  </div>
                </div>
                <div className="disease-card">
                  <span className="disease-name font-serif">3. Tư túng, chia rẽ, kiêu ngạo</span>
                  <p>Kéo bè kéo cánh, cất nhắc người nhà dù bất tài, đố kỵ người tài giỏi hơn mình, tự cho mình là thần thánh không lắng nghe nhân dân.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Chuyển đến Phần tiếp theo */}
          <div className="module-cta-card">
            <span className="font-mono text-gold">[TIẾP TỤC TIẾN TRÌNH HỌC TẬP]</span>
            <h4 className="font-serif">Bạn đã hoàn thành xong Phần II: Nhà nước của dân, do dân, vì dân</h4>
            <p>Tiếp tục chuyển sang Phần III để tìm hiểu các bài học vận dụng vào thực tiễn hiện nay trước khi vào phòng thi đấu minigame.</p>
            <button className="btn-action-main font-mono" onClick={() => handleNextSection('part-3')}>
              CHUYỂN ĐẾN PHẦN TIẾP THEO: [III. VẬN DỤNG VÀO THỰC TIỄN HIỆN NAY] &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 3: PHẦN III - VẬN DỤNG VÀO THỰC TIỄN HIỆN NAY
          ============================================================== */}
      {activeTab === 'part-3' && (
        <div className="module-content-pane">
          <div className="module-header-card">
            <div className="badge-tag">{PART_III_DATA.tag} · {PART_III_DATA.pageRange}</div>
            <h2 className="module-title font-serif">{PART_III_DATA.title}</h2>
            <p className="module-summary">{PART_III_DATA.summary}</p>
          </div>

          {/* Gallery tư liệu cho Phần 3 */}
          <div className="lesson-media-banner" style={{ marginTop: '24px' }}>
            <div className="lesson-image-card">
              <img
                src={puzzleImages[2 % puzzleImages.length]?.src}
                alt={puzzleImages[2 % puzzleImages.length]?.title}
                className="lesson-historical-img"
              />
              <div className="lesson-img-caption font-mono">
                {puzzleImages[2 % puzzleImages.length]?.title}
              </div>
            </div>
            <div className="lesson-image-card">
              <img
                src={puzzleImages[3 % puzzleImages.length]?.src}
                alt={puzzleImages[3 % puzzleImages.length]?.title}
                className="lesson-historical-img"
              />
              <div className="lesson-img-caption font-mono">
                {puzzleImages[3 % puzzleImages.length]?.title}
              </div>
            </div>
          </div>

          <div className="two-pillars-grid" style={{ marginTop: '24px' }}>
            {PART_III_DATA.keyActions.map((domain, idx) => (
              <div key={idx} className="pillar-card border-red">
                <div className="pillar-header font-serif">{domain.domain}</div>
                <ul className="pillar-list">
                  {domain.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Chuyển đến Tra cứu trích dẫn */}
          <div className="module-cta-card" style={{ marginTop: '40px' }}>
            <span className="font-mono text-gold">[TIẾP TỤC TIẾN TRÌNH HỌC TẬP]</span>
            <h4 className="font-serif">Bạn đã nghiên cứu xong toàn bộ lý luận 3 Phần cốt lõi</h4>
            <p>Tra cứu nhanh 59 trích dẫn tư liệu lịch sử quan trọng để hoàn thành trọn vẹn chương học trước khi tham gia trò chơi.</p>
            <button className="btn-action-main font-mono" onClick={() => handleNextSection('quotes')}>
              XEM KHO TRÍCH DẪN & HOÀN THÀNH CHƯƠNG HỌC &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 4: KHO TRÍCH DẪN & TƯ LIỆU TOÀN TẬP
          ============================================================== */}
      {activeTab === 'quotes' && (
        <div className="module-content-pane">
          <div className="module-header-card">
            <div className="badge-tag">TƯ LIỆU NGUỒN · HỒ CHÍ MINH TOÀN TẬP</div>
            <h2 className="module-title font-serif">Kho Tàng Trích Dẫn Cốt Lõi Chương 4</h2>
            <p className="module-summary">
              Tổng hợp các danh ngôn, chỉ dẫn kinh điển của Chủ tịch Hồ Chí Minh về Đảng Cộng sản, Nhà nước dân chủ và đạo đức công vụ trong tác phẩm "Đường cách mệnh", "Sửa đổi lối làm việc", "Di chúc"...
            </p>

            <div style={{ marginTop: '16px' }}>
              <input
                type="text"
                className="search-input-pill"
                style={{ width: '100%', maxWidth: '400px', fontSize: '0.85rem', padding: '10px 14px' }}
                placeholder="Tìm trích dẫn theo từ khóa (cầm lái, đạo đức, cán bộ, giặc nội xâm)..."
                value={quoteSearch}
                onChange={(e) => setQuoteSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="quotes-catalog-grid" style={{ marginTop: '24px' }}>
            {filteredQuotes.map((q) => (
              <div key={q.id} className="quote-card-item">
                <div className="quote-card-header font-mono">
                  <span className="quote-id font-bold">{q.id}</span>
                  <span className="quote-topic">{q.topic}</span>
                </div>
                <blockquote className="quote-card-body font-serif">
                  "{q.content}"
                </blockquote>
                <div className="quote-card-footer font-mono">
                  {q.work} &middot; {q.source}
                </div>
              </div>
            ))}
          </div>

          {/* ĐỌC HẾT CHƯƠNG THÌ MỚI ĐẾN GAME */}
          <div className="module-cta-card" style={{ marginTop: '48px', border: '2px solid #c59b27', background: '#fffdf5' }}>
            <span className="font-mono text-gold">[HOÀN THÀNH TOÀN BỘ CHƯƠNG 4]</span>
            <h4 className="font-serif" style={{ fontSize: '1.4rem', color: '#850005' }}>
              Chúc mừng bạn đã hoàn thành nghiên cứu toàn bộ nội dung lý luận!
            </h4>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem', color: '#475569' }}>
              Bây giờ bạn đã sẵn sàng bước vào phòng thi đấu ghép tranh tư liệu lịch sử đối kháng liên nhóm (4x4, 6x6, 8x8).
            </p>
            <div style={{ marginTop: '16px' }}>
              <button className="btn-action-main font-mono" onClick={onNavigateToGame}>
                VÀO PHÒNG THI ĐẤU MINIGAME NGAY &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
