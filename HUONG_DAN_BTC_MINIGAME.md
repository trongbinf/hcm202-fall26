# QUY CHẾ & CẨM NANG TỔ CHỨC MINIGAME GHÉP TRANH TƯ LIỆU
## HỌC PHẦN HCM202 · TƯ TƯỞNG HỒ CHÍ MINH (CHƯƠNG 4)
*Dành riêng cho Ban Tổ chức (BTC), Ban Cán sự lớp & Giảng viên phụ trách*

---

## 1. MỤC TIÊU & Ý NGHĨA HOẠT ĐỘNG
- **Củng cố kiến thức**: Tạo không khí học tập sôi nổi, giúp sinh viên ghi nhớ các mốc lịch sử, tác phẩm kinh điển (*Đường cách mệnh* 1927, *Hiến pháp* 1946, xây dựng Đảng, chỉnh đốn Đảng...) thông qua các bức ảnh tư liệu quý về Chủ tịch Hồ Chí Minh.
- **Tăng tính gắn kết & tinh thần đồng đội**: Thi đấu đối kháng trực tiếp giữa các nhóm học tập trong lớp, rèn luyện tư duy quan sát nhanh, tính kiên nhẫn và tinh thần tập thể.

---

## 2. THÔNG TIN BẢO MẬT & QUYỀN ĐIỀU HÀNH CỦA BTC
> **MẬT MÃ QUẢN TRỊ DÀNH CHO BTC: `HCM202-FA26`**
> *(Lưu ý: Mật mã này hiển thị dạng ẩn `***` trên giao diện người dùng để đảm bảo tính công bằng và kỷ luật phòng thi).*

### Cơ chế kiểm soát & Tính năng "Hiện hình gốc" theo quyết định của BTC:
1. **Khách / Sinh viên tự do**:
   - Chỉ được xem bài học lý luận và nhìn thấy bàn cờ ở trạng thái khóa.
   - **Tuyệt đối không** được phép kéo thả hay hoán đổi vị trí các ô.
   - **Không hiển thị nút xem hình gốc** (ngăn ngừa sinh viên tự ý xem trước hoặc chụp lại màn hình).
2. **Kích hoạt lượt thi từ BTC**:
   - Đến lượt thi đấu của nhóm/cặp nào, đại diện BTC lên máy chủ bấm `[BẮT ĐẦU / NHẬP PASS]` và nhập mật mã `HCM202-FA26`.
   - Sau khi nhập đúng mật mã, hệ thống mới chính thức mở khóa chức năng kéo thả và tính giờ.
3. **Quy định về nút `[HIỆN HÌNH GỐC]` (Quyền quyết định thuộc về BTC)**:
   - **Mặc định**: Hình gốc **bị ẩn** để thử thách tối đa khả năng quan sát và ghi nhớ của sinh viên.
   - **Trường hợp cứu trợ / Gợi ý**: Nếu trận đấu rơi vào thế bế tắc hoặc hình ảnh quá khó mà thí sinh không giải được sau một khoảng thời gian quy định (ví dụ: quá 3 - 5 phút), **chỉ có BTC mới có thẩm quyền bấm nút `[HIỆN HÌNH GỐC]` để trợ giúp tuyển thủ**, hoặc BTC có thể ra điều kiện: *"Đội xin gợi ý hình gốc sẽ bị cộng thêm 15 giây hoặc 5 bước phạt"*.
   - Sau khi tham khảo xong, BTC có thể bấm `[ẨN GỢI Ý]` để đóng khung ảnh gốc lại.
4. **Cơ chế tính giờ tự động**:
   - Đồng hồ bấm giờ **chỉ bắt đầu chạy khi tuyển thủ thực hiện cú chạm / đổi vị trí đầu tiên** (không tính thời gian chuẩn bị hay quan sát bàn cờ trước).
   - Mỗi bàn cờ luôn được hệ thống **mở khóa sẵn 1 ô đúng làm điểm tựa ban đầu** (Anchor Tile).

---

## 3. THỂ THỨC THI ĐẤU LIÊN NHÓM (TOURNAMENT FORMAT)
- **Thể thức**: Đấu loại trực tiếp 1v1 (*Single Elimination*).
- **Quy mô chuẩn**: 8 Nhóm trong lớp chia làm 4 cặp đấu đối kháng.
- **Tiến trình 3 vòng đấu**:

| Vòng đấu | Cặp đấu | Kích thước lưới | Tổng số ô | Mục tiêu & Thời gian kỳ vọng |
| :--- | :--- | :---: | :---: | :--- |
| **Vòng 1: Tứ kết** | 8 Nhóm → 4 Nhóm | **4x4** | 16 ô | Khởi động, kiểm tra phản xạ nhanh (1 – 3 phút/trận) |
| **Vòng 2: Bán kết** | 4 Nhóm → 2 Nhóm | **6x6** | 36 ô | Tăng độ thử thách, phối hợp nhịp nhàng (3 – 6 phút/trận) |
| **Vòng 3: Chung kết** | 2 Nhóm → Ngôi Vô địch | **8x8** | 64 ô | Trận chung kết đỉnh cao, phân định thắng bại (5 – 10 phút/trận) |

---

## 4. QUY TẮC PHÂN ĐỊNH THẮNG - THUA
1. **Tiêu chí 1 (Thời gian hoàn thành - `Time`)**:
   - Nhóm nào xếp bức tranh hoàn chỉnh với thời gian ngắn nhất (tính chính xác đến mili-giây `ms`) sẽ giành chiến thắng.
2. **Tiêu chí 2 (Số bước di chuyển - `Moves`)**:
   - Nếu xảy ra trường hợp bằng thời gian hoặc cả 2 đội hết thời lượng quy định mà chưa hoàn thành, đội nào có **số lượt di chuyển ít hơn** (hoặc số ô đúng nhiều hơn) sẽ được ưu tiên.
3. **Phạm quy**:
   - Người chơi không được can thiệp vào mã nguồn trình duyệt (Inspect / F12) hoặc tự ý tải lại trang mà chưa có hiệu lệnh của BTC. Nếu vi phạm sẽ bị xử thua trận đó.

---

## 5. HƯỚNG DẪN BTC TRIỂN KHAI TRÊN LỚP HỌC (OFFLINE / HYBRID)

### Bước 1: Chuẩn bị bảng lớp (Blackboard)
Khuyến khích Ban cán sự vẽ ngay sơ đồ nhánh thi đấu lên bảng đen lớp học để cả lớp cùng cổ vũ và tăng tính kịch tính:
```text
┌──────────────┐
│  Nhóm 1 vs 2 ├──┐ [Thắng 1-2]
└──────────────┘  │      │
┌──────────────┐  ├──────┴──────┐
│  Nhóm 3 vs 4 ├──┘             │  [Chung kết]
└──────────────┘                ├─────────────► QUÁN QUÂN
┌──────────────┐                │
│  Nhóm 5 vs 6 ├──┐             │
└──────────────┘  │      ┌──────┘
┌──────────────┐  ├──────┬──────┘
│  Nhóm 7 vs 8 ├──┘ [Thắng 5-6]
└──────────────┘
```
- Phấn ghi rõ: `Tên Nhóm` | `Đại diện thi đấu` | `Thời gian (mm:ss.ms)` | `Số bước (moves)` | `Có dùng trợ giúp hình gốc hay không`.

### Bước 2: Chuẩn bị thiết bị chiếu (Projector)
- Máy tính của BTC/Giảng viên kết nối máy chiếu ra màn hình lớn của lớp.
- Truy cập vào trang web ứng dụng: `http://localhost:5173` (hoặc domain triển khai).
- Hướng dẫn sinh viên hoàn thành đọc nội dung tóm tắt Chương 4 (Phần I, II, III & Kho trích dẫn) rồi bấm nút **"VÀO PHÒNG THI ĐẤU MINIGAME NGAY"** ở cuối trang.

### Bước 3: Điều hành lượt đấu
1. Mời 2 đại diện nhóm thi đấu của lượt trận lên bàn điều khiển (hoặc thi đấu luân phiên theo lượt bấm giờ).
2. Chọn kích thước lưới tương ứng với vòng đấu (`4x4` cho Vòng 1, `6x6` cho Bán kết, `8x8` cho Chung kết).
3. Bấm `[ĐỔI HÌNH NGẪU NHIÊN]` hoặc `[TRỘN LẠI / RESET]` để tạo đề thi mới cho từng lượt.
4. BTC nhập mật mã `HCM202-FA26`.
5. Đếm khẩu lệnh "3 - 2 - 1 Bắt đầu!": Thí sinh chạm vào ô đầu tiên để đồng hồ tự động kích hoạt tính giờ.
6. **Xử lý tình huống khó**: Nếu thí sinh gặp khó khăn kéo dài, BTC cân nhắc bấm `[HIỆN HÌNH GỐC]` để mở gợi ý hình ảnh trực tiếp.
7. Khi hoàn thành: Màn hình kích hoạt pháo hoa chúc mừng kèm thống kê chính xác thời gian và số bước. Thư ký ghi nhận kết quả lên bảng lớp.

---

## 6. NGUỒN ẢNH TƯ LIỆU SỬ DỤNG
Toàn bộ ảnh tư liệu của trò chơi được lưu trữ sẵn trong thư mục nội bộ `/public/img/`, đảm bảo chạy mượt mà ngay cả khi không có mạng Internet:
- `ttxvn_bac_ho_1_1-900x600.png`: Chân dung Chủ tịch Hồ Chí Minh (Ảnh tư liệu TTXVN).
- `14052020ttxvn1.jpg`: Sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh toàn dân kháng chiến.
- `21-01-2024-nhan-thuc-sau-sac...jpg`: Nhận thức sâu sắc tư tưởng Hồ Chí Minh về xây dựng, chỉnh đốn Đảng.
- `dsds.jpg`: Bác Hồ với đồng bào, chiến sĩ và nhân dân cả nước.
- `a2-jpg...png`: Chủ tịch Hồ Chí Minh làm việc trong thời kỳ kháng chiến kiến quốc.
- `images.jpeg`: Chủ tịch Hồ Chí Minh chủ trì hội nghị Trung ương Đảng.

---
*Chúc Ban Tổ chức và lớp học có một buổi học tập chuyên đề Chương 4 thật hào hứng, bổ ích và thành công rực rỡ!*
