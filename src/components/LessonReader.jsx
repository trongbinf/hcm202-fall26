import React, { useState, useEffect, useMemo } from 'react';
import { marked } from 'marked';

export default function LessonReader({ onOpenGameWithImage }) {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch('./HCM202_Chuong4_NoiDung.md')
      .then((res) => {
        if (!res.ok) throw new Error('Không thể tải file');
        return res.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const htmlContent = useMemo(() => {
    if (!markdown) return '';
    try {
      return marked.parse(markdown);
    } catch {
      return markdown;
    }
  }, [markdown]);

  const scrollToAnchor = (targetId) => {
    setActiveFilter(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="lesson-portal-card" id="giao-trinh">
      {/* Portal Top Bar */}
      <div className="lesson-portal-toolbar">
        <div className="toc-nav-chips">
          <button
            className={`chip-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            [TOÀN VĂN]
          </button>
          <button
            className={`chip-btn ${activeFilter === 'i' ? 'active' : ''}`}
            onClick={() => scrollToAnchor('i.-tư-tưởng-hồ-chí-minh-về-đảng-cộng-sản-việt-nam')}
          >
            [PHẦN I: ĐẢNG CỘNG SẢN VN]
          </button>
          <button
            className={`chip-btn ${activeFilter === 'ii' ? 'active' : ''}`}
            onClick={() => scrollToAnchor('ii.-tư-tưởng-hồ-chí-minh-về-nhà-nước-của-nhân-dân,-do-nhân-dân,-vì-nhân-dân')}
          >
            [PHẦN II: NHÀ NƯỚC CỦA DÂN]
          </button>
          <button
            className={`chip-btn ${activeFilter === 'iii' ? 'active' : ''}`}
            onClick={() => scrollToAnchor('iii.-vận-dụng-tư-tưởng-hồ-chí-minh-vào-công-tác-xây-dựng-đảng-và-xây-dựng-nhà-nước')}
          >
            [PHẦN III: VẬN DỤNG]
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input
            type="text"
            className="search-input-pill"
            placeholder="LỌC TỪ KHÓA TRONG BÀI..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a
            href="./HCM202_Chuong4_NoiDung.md"
            target="_blank"
            rel="noreferrer"
            className="chip-btn"
            style={{ textDecoration: 'none' }}
          >
            [XEM FILE MD GỐC]
          </a>
        </div>
      </div>

      {/* Main Reading View */}
      <div className="lesson-scroll-view">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-red-primary)', fontFamily: 'var(--font-mono)' }}>
            [ĐANG NẠP NỘI DUNG GIÁO TRÌNH CHƯƠNG 4 HCM202...]
          </div>
        ) : (
          <div
            className="academic-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </div>
    </div>
  );
}
