# HƯỚNG DẪN DEPLOY ỨNG DỤNG REACT (SLIDING TILE ENGINE)

Dự án đã được đóng gói chuẩn **Vite + React** với thư mục xuất bản độc lập `dist/`.

---

## 1. Deploy lên Vercel (Khuyên dùng - Nhanh nhất)

### Cách A: Dùng Vercel CLI
```bash
npm install -g vercel
vercel
```
- Khi được hỏi `Build Command`: bấm Enter (mặc định: `npm run build` hoặc `vite build`).
- Khi được hỏi `Output Directory`: bấm Enter (mặc định: `dist`).

### Cách B: Qua GitHub
1. Đẩy mã nguồn lên repository GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sliding tile puzzle React"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) > **Add New Project** > Chọn repo của bạn > bấm **Deploy**.

---

## 2. Deploy lên Netlify

### Cách A: Kéo thả (Không cần lệnh)
1. Chạy lệnh build trên máy:
   ```bash
   npm run build
   ```
2. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop).
3. Kéo thả toàn bộ thư mục `dist/` vào khung của Netlify. Trang web sẽ trực tuyến ngay lập tức!

### Cách B: Qua Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 3. Deploy lên Cloudflare Pages

1. Vào Cloudflare Dashboard > **Workers & Pages** > **Create application** > **Pages**.
2. Kết nối với repo GitHub.
3. Cấu hình Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Bấm **Save and Deploy**.

---

## 4. Chạy thử nghiệm cục bộ (Local Preview / Dev)

- Khởi chạy môi trường Dev:
  ```bash
  npm run dev
  ```
- Xem thử bản build production trên máy:
  ```bash
  npm run preview
  ```
