# Portfolio Năng lực số — React + TypeScript

Website Portfolio cá nhân (Vite + React + TypeScript + Tailwind + Framer Motion)
tổng hợp 6 dự án môn Năng lực số, giao diện hiện đại & chuyên nghiệp.

## 🚀 Chạy thử trên máy
```bash
npm install      # cài 1 lần
npm run dev      # mở http://localhost:5173
```

## 🏗️ Build & deploy
```bash
npm run build    # xuất ra thư mục dist/
npm run preview  # xem thử bản build
```

### Lấy URL để nộp bài (miễn phí)
- **Netlify Drop** (dễ nhất): chạy `npm run build`, rồi kéo–thả thư mục **`dist/`**
  vào https://app.netlify.com/drop → có ngay URL công khai.
- **GitHub Pages / Vercel**: đẩy code lên repo, build lệnh `npm run build`,
  thư mục xuất bản là `dist/`.

## ✍️ Cần điền trước khi nộp
1. **Thông tin cá nhân**: sửa trong [`src/data/projects.ts`](src/data/projects.ts) — object `SITE`
   (họ tên, ngành, trường, email, sở thích).
2. **Nội dung 6 dự án**: cũng trong `src/data/projects.ts` — mảng `projects`
   (objective, steps, product, aiNote, lesson, tools). Thay các chỗ `[...]`.
3. **Ảnh & file**: bỏ ảnh vào `public/img/`, file PDF vào `public/files/`,
   rồi gửi tôi tên file để gắn link / hiển thị ảnh.
4. **Trang Tổng kết**: text mẫu trong [`src/pages/Summary.tsx`](src/pages/Summary.tsx).

## 📁 Cấu trúc
```
src/
├── main.tsx            entry
├── App.tsx             routing (Giới thiệu / Dự án / Tổng kết)
├── index.css           Tailwind + theme
├── data/projects.ts    ★ NỘI DUNG 6 dự án + thông tin cá nhân (sửa ở đây)
├── lib/icons.ts        map icon
├── components/         Navbar, Footer, Aurora, Reveal, ScrollProgress...
└── pages/              Home, Projects, ProjectDetail, Summary, NotFound
public/
├── img/                ảnh của bạn
└── files/              file PDF sản phẩm
```

## 📤 Nộp bài (Mục VI của đề)
- Nộp **URL website** (sau khi deploy `dist/`).
- Xuất **đề bài ra PDF** đặt `public/files/de-bai.pdf` để nộp đối chiếu.

> Bản HTML thuần cũ được lưu trong `_old_html/` (không còn dùng).
