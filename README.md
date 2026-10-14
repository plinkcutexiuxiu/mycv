# CV cá nhân - Template HTML/CSS

Một template CV hiện đại, responsive, chuyên nghiệp được xây dựng bằng HTML5, CSS3 và JavaScript vanilla.

## 🎨 Tính năng

- **Responsive Design**: Tự động điều chỉnh cho desktop, tablet, mobile
- **Print Ready**: Tối ưu cho in ấn và lưu thành PDF (Ctrl+P / nút "In CV")
- **Dark Mode**: Tự động hỗ trợ chế độ tối của hệ thống
- **Accessibility**: Semantic HTML, focus states, reduced motion support
- **Animations**: Hiệu ứng mượt mà khi scroll
- **Modern Stack**: CSS Variables, Grid, Flexbox, IntersectionObserver

## 📁 Cấu trúc thư mục

```
mycv/
├── index.html      # File HTML chính
├── styles.css      # Stylesheet
├── script.js       # JavaScript (print, scroll animations)
├── assets/
│   └── profile.svg # Ảnh đại diện (SVG placeholder)
└── README.md       # File này
```

## 🚀 Cách sử dụng

### 1. Mở trực tiếp
Double-click vào `index.html` để mở trong trình duyệt.

### 2. Chỉnh sửa thông tin cá nhân
Mở `index.html` và thay thế các phần trong ngoặc vuông `[...]`:
- **Thông tin cơ bản**: Tên, chức danh, email, phone, địa chỉ, link social
- **Mục tiêu nghề nghiệp**: Đoạn tóm tắt 2-3 câu
- **Kinh nghiệm**: Các vị trí, công ty, thành tựu (dùng số liệu cụ thể)
- **Dự án**: Tên, mô tả, tech stack, link demo/code
- **Giáo dục**: Bằng cấp, trường, năm, GPA, hoạt động
- **Kỹ năng**: Điều chỉnh theo tech stack thực tế
- **Ngôn ngữ, sở thích, chứng chỉ**

### 3. Thay ảnh đại diện
Thay file `assets/profile.svg` bằng ảnh thật (khuyên dùng 400x400px, format JPG/PNG/WebP).

### 4. Tùy chỉnh màu sắc
Chỉnh sửa CSS Variables trong `:root` của `styles.css`:
```css
:root {
    --color-primary: #2563eb;    /* Màu chính */
    --color-accent: #0ea5e9;     /* Màu nhấn */
    --color-bg-sidebar: #1e293b; /* Màu sidebar */
}
```

## 🖨️ Xuất PDF

1. Mở `index.html` trong trình duyệt
2. Nhấn `Ctrl+P` (Windows/Linux) hoặc `Cmd+P` (Mac)
3. Chọn "Save as PDF" làm printer
4. **Cài đặt khuyến nghị**:
   - Margins: None / Minimum
   - Background graphics: ✅ Bật
   - Scale: 90-100%

Hoặc click nút **"🖨️ In CV / Save as PDF"** góc dưới bên phải.

## 🌐 Deploy lên GitHub Pages / Netlify / Vercel

### GitHub Pages
1. Push repo lên GitHub
2. Settings → Pages → Source: "Deploy from a branch"
3. Branch: `main`, Folder: `/ (root)`
4. Truy cập `https://username.github.io/mycv`

### Netlify
1. Kéo thả folder `mycv` vào netlify.com/drop
2. Hoặc connect Git repo

### Vercel
```bash
npx vercel deploy
```

## 🎯 Mẹo viết CV hiệu quả

### Kinh nghiệm: STAR Method
Mỗi bullet point nên tuân theo: **Situation → Task → Action → Result**

| ❌ Yếu | ✅ Mạnh |
|--------|---------|
| "Phát triển website" | "Xây dựng e-commerce platform React/Node.js xử lý 10k đơn/ngày, tăng 40% conversion" |
| "Làm việc với database" | "Thiết kế schema PostgreSQL, tối ưu query giảm 60% latency, tiết kiệm $10k/tháng" |
| "Dẫn dắt team" | "Quản lý team 5 dev, áp dụng code review + CI/CD, giảm 50% bug production" |

### Kỹ năng: Nhóm theo cấp độ
- **Expert**: Dẫn dắt, kiến trúc, mentor
- **Proficient**: Tự lập triển khai production
- **Familiar**: Hiểu cơ bản, có thể học nhanh

### Dự án: Chọn 3-5 dự án tốt nhất
Mỗi dự án nêu rõ: **Vấn đề → Giải pháp → Tech stack → Kết quả/Link**

## 📝 Checklist trước khi gửi

- [ ] Không lỗi chính tả (dùng Grammarly/LanguageTool)
- [ ] Thông tin liên hệ đúng, link social hoạt động
- [ ] File PDF đẹp, không bị cắt nội dung
- [ ] Độ dài: 1 trang (junior), 2 trang (senior)
- [ ] Tailor cho từng vị trí ứng tuyển (keyword từ JD)
- [ ] Định dạng file: `Ten_CV.pdf` (không dùng tiếng Việt có dấu)

## 🔧 Tùy chỉnh nâng cao

### Thêm section mới
```html
<section class="section">
    <h2 class="section-heading">Tên Section</h2>
    <!-- Nội dung -->
</section>
```

### Thêm icon SVG inline
```html
<svg class="icon" viewBox="0 0 24 24" width="20" height="20">
    <path d="..." fill="currentColor"/>
</svg>
```

### Animation delay cho section
Thêm `style="animation-delay: 300ms"` vào `.section`

## 📄 License

MIT License - Tự do sử dụng, chỉnh sửa, phân phối cho mục đích cá nhân/thương mại.

## 🤝 Đóng góp

Mọi issue/PR cải tiến template đều được hoan nghênh!

---

**Tạo bởi**: [Tên của bạn] | **Cập nhật**: 2024