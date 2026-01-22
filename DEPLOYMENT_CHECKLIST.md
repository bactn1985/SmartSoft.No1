# ✅ CHECKLIST DEPLOY GITHUB PAGES

## Bước 1: Chuẩn Bị Files ✔️

- [x] File `index.html` có đầy đủ nội dung
- [x] File `styles.css` có styling
- [x] File `script.js` có JavaScript logic
- [x] File `.nojekyll` đã được tạo (FIX lỗi 404)
- [x] Folder `assets/` có 6 icon images
- [x] File `README.md` có hướng dẫn

## Bước 2: Upload Lên GitHub

### Option A: Web Interface (KHUYẾN NGHỊ cho người mới) 🌐

1. [ ] Vào https://github.com/new
2. [ ] Nhập Repository name: `software-sales-website`
3. [ ] Chọn **Public** (bắt buộc!)
4. [ ] **KHÔNG** tích "Add a README file"
5. [ ] Click **Create repository**
6. [ ] Click link **"uploading an existing file"**
7. [ ] Kéo thả TẤT CẢ files từ `e:\Google_Antigravity\software-sales-website`
   - index.html
   - styles.css
   - script.js
   - .nojekyll
   - assets/ (toàn bộ folder)
   - README.md
   - Tất cả file .md khác
8. [ ] Commit message: "Initial commit - SmartSoft Website"
9. [ ] Click **Commit changes**

### Option B: Git Command Line 💻

```powershell
cd e:\Google_Antigravity\software-sales-website
git init
git add .
git commit -m "Initial commit - SmartSoft Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/software-sales-website.git
git push -u origin main
```

## Bước 3: Bật GitHub Pages ⚙️

1. [ ] Vào repo trên GitHub
2. [ ] Click tab **Settings**
3. [ ] Sidebar trái > Click **Pages**
4. [ ] Tại "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** (hoặc master)
   - Folder: **/ (root)** ← QUAN TRỌNG!
5. [ ] Click **Save**

## Bước 4: Chờ Deploy 🚀

1. [ ] Đợi 2-3 phút
2. [ ] Refresh trang Settings > Pages
3. [ ] Khi thấy message màu xanh:
   ```
   Your site is live at https://USERNAME.github.io/software-sales-website/
   ```
4. [ ] Click vào link để test website

## Bước 5: Kiểm Tra Website ✅

Mở website và test:

- [ ] Trang chủ hiển thị đúng
- [ ] Navbar hoạt động
- [ ] Scroll mượt mà
- [ ] 6 sản phẩm hiển thị với icons
- [ ] Form liên hệ hiển thị
- [ ] Footer có "Thiết kế bởi TẠ NGỌC BẮC"
- [ ] Responsive trên mobile (F12 > Toggle device toolbar)

## 🐛 NẾU VẪN LỖI 404

### Check 1: File Structure Đúng Chưa?

Vào repo trên GitHub, phải thấy cấu trúc:

```
software-sales-website/     ← Đây là tên repo
├── index.html              ← PHẢI Ở ROOT
├── styles.css
├── script.js
├── .nojekyll
├── assets/
│   ├── ocr_software_icon.png
│   ├── chatbot_icon.png
│   └── ...
└── README.md
```

**KHÔNG được có thêm 1 folder `software-sales-website` bên trong!**

Nếu sai (có nested folder), làm lại:
1. Delete repo cũ
2. Tạo repo mới
3. Khi upload, chỉ upload **NỘI DUNG TRONG FOLDER**, không upload cả folder

### Check 2: GitHub Pages Settings

- [ ] Settings > Pages
- [ ] Source: Deploy from a branch (không phải GitHub Actions)
- [ ] Branch: main
- [ ] Folder: / (root) - KHÔNG PHẢI /docs

### Check 3: Repository Visibility

- [ ] Repository phải là **Public**
- [ ] Nếu Private: Settings > General > Danger Zone > Change to Public

### Check 4: Wait Time

- [ ] Đã đợi ít nhất 3 phút
- [ ] Đã hard refresh browser (Ctrl + Shift + R)
- [ ] Thử incognito/private mode

## 🔧 Cập Nhật Sau Này

Khi cần thay đổi website:

1. [ ] Sửa files trên local
2. [ ] Upload lại files đã sửa qua GitHub web interface
3. [ ] Hoặc dùng Git:
   ```powershell
   git add .
   git commit -m "Update content"
   git push
   ```
4. [ ] Đợi 1-2 phút để GitHub rebuild

## 📋 Thông Tin Website

- **URL:** https://USERNAME.github.io/software-sales-website/
- **Hotline:** 0984 939 929
- **Email:** bactn@level.io.vn
- **Repository:** https://github.com/USERNAME/software-sales-website

---

## 🎯 Next Steps Sau Khi Deploy

1. [ ] Setup Google Sheets Integration (xem GOOGLE_SHEETS_SETUP.md)
2. [ ] Test form liên hệ
3. [ ] Share link với khách hàng
4. [ ] Thêm Custom Domain (optional)

---

**Chúc bạn deploy thành công! 🚀**

*Nếu còn vấn đề, kiểm tra lại từng bước trong checklist này.*
