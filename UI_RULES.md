# UI DESIGN SPECIFICATION: ZERO-ICON & HUMAN-CRAFTED WEB

> **MỤC TIÊU CỐT LÕI:** Loại bỏ hoàn toàn sự phụ thuộc vào icon đại trà (Lucide, FontAwesome, Heroicons, SVG arrows vô tội vạ) — những yếu tố khiến giao diện web bị rập khuôn, vô hồn và mang nặng cảm giác "AI-generated slop". Thiết kế tập trung vào **Typography phân tầng, Bố cục cấu trúc (Grid/Hairlines), Text Badges, Micro-interactions chuẩn mực và Độ tương phản thông tin**.

---

## 1. NGUYÊN TẮC CẤM (STRICT PROHIBITIONS)

1. **CẤM Icon trang trí vô nghĩa (No Decorative Icons):**
   - Không đặt icon trước mọi tiêu đề (ví dụ: cấm icon bánh răng trước chữ "Cài đặt", cấm icon ngọn lửa trước chữ "Xu hướng", cấm icon người dùng trước chữ "Tài khoản").
   - Hãy để con chữ tự truyền tải ý nghĩa.
2. **CẤM Icon Buttons dạng hình tròn lơ lửng:**
   - Không dùng nút tròn chỉ có 1 icon mũi tên hay icon dấu cộng mà không có nhãn chữ rõ ràng.
3. **CẤM Thư viện Icon ngoài (No Icon Fonts / Lucide / FontAwesome):**
   - Không chèn CDN font-awesome hay import bộ icon SVG đồ sộ.
4. **CẤM Gradient bóng bẩy màu AI (No Generic Purple/Pink AI Gradients):**
   - Không lạm dụng hiệu ứng viền phát sáng (glow), gradient tím-xanh pastel thường thấy ở các giao diện AI sao chép.

---

## 2. NGUYÊN TẮC THAY THẾ (SUBSTITUTION PRINCIPLES)

| Thay vì dùng... | Hãy sử dụng... | Ví dụ |
| :--- | :--- | :--- |
| Icon mũi tên (`→`, SVG arrow) | Text hành động rõ nghĩa, gạch nối hoặc ký tự typographic chuẩn | `TIẾP TỤC [NEXT]`, `XEM CHI TIẾT`, `--->` |
| Icon trạng thái (Checkmark, Cross, Warning) | Text Badge dạng Monospace, đóng mở ngoặc | `[OK]`, `[DONE]`, `[ERR]`, `[WARN]`, `[IDLE]` |
| Icon nút Close (`X`) | Chữ `ĐÓNG` hoặc nhãn `ESC / CLOSE` | `<button>ĐÓNG</button>` |
| Icon Search (Kính lúp) | Text placeholder chi tiết hoặc tiền tố `LỌC / TÌM KIẾM:` | `TÌM KIẾM [Ctrl+K]` |
| Icon Settings (Bánh răng) | Text nhãn danh mục `CẤU HÌNH`, `TÙY CHỌN` | `CẤU HÌNH LƯỚI` |
| Icon Thống kê / Đồng hồ | Cụm định danh tham số kỹ thuật + Font số Monospaced | `THỜI GIAN: 02:45.12`, `SỐ BƯỚC: 48` |

---

## 3. HỆ THỐNG TYPOGRAPHY & PHÂN TẦNG THỊ GIÁC

Giao diện không có icon đòi hỏi typography phải đóng vai trò chủ đạo trong việc định hướng mắt người dùng:

1. **Font Pairing (Ghép phông):**
   - **Display / Heading:** Phông sans-serif hình học hiện đại (như *Space Grotesk*, *Inter*, *Cabinet Grotesk*, *Syne*) hoặc serif biên tập thanh lịch (*Cinzel*, *Playfair Display*).
   - **Body & Controls:** Phông sans-serif cân đối, x-height cao, dễ đọc ở size nhỏ (như *Inter*, *Public Sans*, *Roboto Flex*).
   - **Data / Metrics / Status:** Bắt buộc dùng phông **Monospaced** (*JetBrains Mono*, *Space Mono*, *Fira Code*) để hiển thị số liệu, tọa độ, thời gian, trạng thái hệ thống.
2. **Kỹ thuật Typographic Styling:**
   - Sử dụng **All-Caps + Letter-Spacing (Tracking)** cho nhãn nút bấm, thẻ meta, thẻ chuyên mục:  
     `letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.75rem; font-weight: 700;`
   - Sử dụng độ tương phản font-weight mạnh mẽ (`font-weight: 300` cạnh `font-weight: 800`).
   - Sử dụng ngoặc vuông, ngoặc đơn, ký hiệu phân cách dạng text: `//`, `::`, `[ ]`, `---`.

---

## 4. BỐ CỤC & ĐƯỜNG NÉT (GRID & HAIRLINE BORDERS)

- **Hairline Borders (Viền siêu mảnh):** Thay vì đổ bóng mờ ảo (blurry box-shadow), hãy dùng đường viền sắc nét `1px solid rgba(var(--fg), 0.15)` hoặc `1px solid var(--border-color)`.
- **Brutalist / Swiss Layout:** Phân chia các khối chức năng bằng các đường kẻ ô (Grid lines) rõ ràng, mang lại cảm giác cấu trúc kiến trúc vững chãi, chỉn chu và thủ công.
- **Micro-interactions không dùng Icon:**
  - Nút hover: Đảo ngược màu nền và chữ (Invert: Black -> White), dịch chuyển viền (border offset `translate(-2px, -2px)` với shadow cứng `2px 2px 0px black`), hoặc gạch chân chạy chữ.
  - Active: Nhấp nháy nhẹ độ mờ (opacity) hoặc text badge chuyển trạng thái `[SELECT]` -> `[ACTIVE]`.

---

## 5. THIẾT KẾ CÁC THÀNH PHẦN UI CỤ THỂ

### 5.1. Nút bấm (Buttons)
```css
/* Nút bấm chuẩn: Chữ viết hoa, viền nét đơn, không icon */
.btn {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 10px 18px;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}
```

### 5.2. Text Badge & Trạng thái
```html
<!-- Huy hiệu trạng thái thay vì chấm màu và icon tick -->
<span class="badge badge-success">[ĐẠT CHUẨN]</span>
<span class="badge badge-pending">[ĐANG XỬ LÝ]</span>
<span class="badge badge-record">[KỶ LỤC MỚI]</span>
```

### 5.3. Chỉ số & Thống kê (Metrics Display)
```html
<div class="metric-card">
  <div class="metric-label">THỜI GIAN HOÀN THÀNH</div>
  <div class="metric-value font-mono">00:42.85</div>
  <div class="metric-meta">ƯU TIÊN HẠNG 1 // ĐƠN VỊ: GIÂY</div>
</div>
```

---

## 6. NGUYÊN TẮC ÁP DỤNG CHO GAME XẾP Ô HÌNH

1. **Thanh điều khiển:**
   - Chọn kích thước: Các nút chọn rõ ràng `[8 x 8 // 64 Ô]`, `[12 x 12 // 144 Ô]`.
   - Nút hành động: `BẮT ĐẦU [F2]`, `XÁO TRỘN [SHUFFLE]`, `XEM ẢNH GỐC [PREVIEW]`.
2. **Khu vực hiển thị điểm:**
   - Bộ đếm thời gian: `THỜI GIAN: 00:00.00` (Mono).
   - Bộ đếm nước đi: `SỐ BƯỚC: 000 STEPS` (Mono).
3. **Bảng xếp hạng (Leaderboard):**
   - Cột hiển thị rõ ràng: `HẠNG #` | `NGƯỜI CHƠI` | `THỜI GIAN (ƯU TIÊN 1)` | `SỐ BƯỚC (ƯU TIÊN 2)` | `NGÀY`.
   - So sánh xếp hạng: Sắp xếp giảm dần theo thời gian (nhỏ hơn là tốt hơn); nếu thời gian trùng khớp tính đến mili-giây thì so sánh số bước.
