# 🚀 SmartSoft - Website Bán Phần Mềm

Website chuyên nghiệp giới thiệu và bán các giải pháp phần mềm doanh nghiệp.

## 📋 Danh Sách Files

```
software-sales-website/
├── index.html                    # Trang chính
├── styles.css                    # CSS styling
├── script.js                     # JavaScript logic
├── .nojekyll                     # Cấu hình GitHub Pages
├── assets/                       # Hình ảnh sản phẩm
│   ├── ocr_software_icon.png
│   ├── chatbot_icon.png
│   ├── production_management_icon.png
│   ├── hr_management_icon.png
│   ├── fleet_management_icon.png
│   └── maintenance_icon.png
├── GOOGLE_SHEETS_SETUP.md        # Hướng dẫn tích hợp Google Sheets
├── GOOGLE_SHEETS_TEMPLATE.txt    # Template Google Sheets
└── GITHUB_PAGES_GUIDE.md         # Hướng dẫn deploy GitHub Pages
```

## 🌐 Deploy Lên GitHub Pages

### Cách 1: Upload Qua GitHub Web Interface (Dễ Nhất) ⭐

1. **Tạo Repository Mới:**
   - Vào https://github.com/new
   - Repository name: `software-sales-website`
   - Chọn **Public**
   - KHÔNG tích "Add a README file"
   - Click **Create repository**

2. **Upload Files:**
   - Click link "uploading an existing file"
   - Kéo thả **TẤT CẢ** files và folders từ thư mục này
   - Commit message: "Initial commit - SmartSoft Website"
   - Click **Commit changes**

3. **Bật GitHub Pages:**
   - Vào **Settings** > **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**

4. **Chờ Deploy:**
   - Đợi 2-3 phút
   - Website sẽ live tại: `https://USERNAME.github.io/software-sales-website/`

### Cách 2: Dùng Git Command Line

```powershell
# Di chuyển vào thư mục
cd e:\Google_Antigravity\software-sales-website

# Khởi tạo Git
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - SmartSoft Website"

# Tạo branch main
git branch -M main

# Thêm remote (thay YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/software-sales-website.git

# Push lên GitHub
git push -u origin main
```

Sau đó làm theo bước 3 và 4 của Cách 1.

## ✅ Checklist Trước Khi Deploy

- [x] File `.nojekyll` đã được tạo (để tắt Jekyll processing)
- [x] Tất cả files HTML, CSS, JS đều dùng relative paths
- [x] Folder `assets` chứa đầy đủ 6 hình ảnh
- [x] Thông tin liên hệ đã được cập nhật:
  - Hotline: 0984 939 929
  - Email: bactn@level.io.vn
- [x] Copyright footer có tên: "Thiết kế bởi TẠ NGỌC BẮC"
- [x] Mission statement: "Giúp các doanh nghiệp tăng hiệu suất cao nhất với chi phí thấp nhất"

## 🐛 Khắc Phục Lỗi 404

Nếu bạn thấy lỗi **404 File not found**, kiểm tra:

1. **File `index.html` ở đúng vị trí:**
   - Phải ở root của repository, KHÔNG nằm trong subfolder
   - URL đúng: `github.com/username/repo/blob/main/index.html`
   - URL SAI: `github.com/username/repo/blob/main/software-sales-website/index.html`

2. **GitHub Pages Settings:**
   - Settings > Pages
   - Branch: `main` (hoặc `master`)
   - Folder: `/ (root)` ← QUAN TRỌNG, không phải `/docs`

3. **Repository phải Public:**
   - GitHub Pages miễn phí chỉ hoạt động với Public repos
   - Settings > General > Danger Zone > Change repository visibility

4. **Đợi đủ thời gian:**
   - GitHub cần 2-3 phút để build
   - Kiểm tra tại Settings > Pages > Deployments

## 🔧 Google Sheets Integration

Website đã được tích hợp form liên hệ với Google Sheets. Để sử dụng:

1. Đọc file `GOOGLE_SHEETS_SETUP.md` để biết hướng dẫn chi tiết
2. Tạo Google Sheet từ template trong `GOOGLE_SHEETS_TEMPLATE.txt`
3. Cập nhật URL trong `script.js` với Web App URL của bạn

## 📱 Tính Năng

- ✅ Responsive design (mobile-friendly)
- ✅ Smooth animations và transitions
- ✅ Dark gradient theme
- ✅ Form liên hệ tích hợp Google Sheets
- ✅ SEO optimized
- ✅ Fast loading với Web Fonts

## 🎨 Customization

Để thay đổi màu sắc, logo, hoặc nội dung:
- **Colors:** Chỉnh sửa CSS variables trong `styles.css`
- **Content:** Sửa text trong `index.html`
- **Images:** Thay thế files trong folder `assets/`

## 📞 Liên Hệ

- **Hotline:** 0984 939 929
- **Email:** bactn@level.io.vn
- **Website:** https://USERNAME.github.io/software-sales-website/

---

**Designed by TẠ NGỌC BẮC** ⚡
