# 🚨 SỬA LỖI 404 - HƯỚNG DẪN NHANH

## VẤN ĐỀ: Website báo lỗi 404 File not found

## NGUYÊN NHÂN: 
GitHub Pages không tìm thấy file `index.html` vì:
1. ❌ Cấu trúc folder không đúng (nested folders)
2. ❌ Settings GitHub Pages chưa đúng
3. ❌ Repository đang ở chế độ Private
4. ❌ Thiếu file `.nojekyll`

## ĐÃ SỬA:
✅ Tạo file `.nojekyll` để tắt Jekyll processing
✅ Sửa email address từ "levelupvp01" thành "bactn@level.io.vn"
✅ Tạo README.md với hướng dẫn đầy đủ
✅ Tạo DEPLOYMENT_CHECKLIST.md để kiểm tra từng bước

---

## 🔧 CÁCH SỬA CHO BẠN - 3 BƯỚC ĐƠN GIẢN

### BƯỚC 1: Kiểm Tra Files ✅
Trong folder `e:\Google_Antigravity\software-sales-website` bạn phải có:

```
✅ index.html
✅ styles.css
✅ script.js
✅ .nojekyll          ← MỚI TẠO - QUAN TRỌNG!
✅ assets/            ← Folder chứa 6 hình
✅ README.md
✅ DEPLOYMENT_CHECKLIST.md
✅ GITHUB_PAGES_GUIDE.md
✅ GOOGLE_SHEETS_SETUP.md
```

### BƯỚC 2: Upload LẠI Lên GitHub

**VAY 1: Web Interface (Đơn Giản Nhất)** ⭐

1. Vào repository hiện tại trên GitHub
2. **XÓA TẤT CẢ** files cũ (nếu có cấu trúc sai)
3. Click **Add file** > **Upload files**
4. Kéo thả **TẤT CẢ** files và folders từ `e:\Google_Antigravity\software-sales-website`
   - Bao gồm cả file `.nojekyll` (file ẩn, có thể cần show hidden files)
5. Commit message: "Fix 404 - Add .nojekyll and restructure"
6. Click **Commit changes**

**CÁCH 2: Git Command Line**

```powershell
cd e:\Google_Antigravity\software-sales-website

# Nếu chưa có Git repo
git init
git add .
git commit -m "Fix 404 - Add .nojekyll"
git branch -M main

# Nếu chưa có remote
git remote add origin https://github.com/YOUR_USERNAME/software-sales-website.git

# Push
git push -u origin main --force
```

### BƯỚC 3: Kiểm Tra GitHub Pages Settings ⚙️

1. Vào **Settings** > **Pages**
2. Đảm bảo:
   - ✅ Source: **Deploy from a branch**
   - ✅ Branch: **main**
   - ✅ Folder: **/ (root)** ← KHÔNG PHẢI /docs
3. Click **Save**
4. Đợi 2-3 phút
5. Refresh page để thấy link: `https://USERNAME.github.io/software-sales-website/`

---

## ❓ CÂU HỎI THƯỜNG GẶP

### Q: Tại sao cần file `.nojekyll`?
**A:** GitHub Pages mặc định dùng Jekyll để build website. Jekyll bỏ qua các files bắt đầu bằng `_` hoặc `.` và có thể gây lỗi với static websites. File `.nojekyll` tắt Jekyll processing.

### Q: Làm sao upload file `.nojekyll` (file ẩn)?
**A:** 
- **Windows:** File Explorer > View > Show hidden files
- **Hoặc:** Kéo thả toàn bộ folder vào GitHub web interface, nó sẽ tự động upload file ẩn

### Q: Vẫn lỗi 404 sau khi làm theo?
**A:** Kiểm tra chính xác cấu trúc trên GitHub:
1. Vào repo trên GitHub
2. Click vào file `index.html` để xem
3. URL phải là: `github.com/username/software-sales-website/blob/main/index.html`
4. KHÔNG PHẢI: `github.com/username/software-sales-website/blob/main/software-sales-website/index.html`
   
Nếu có nested folder, BẠN ĐÃ UPLOAD SAI! Upload lại chỉ NỘI DUNG bên trong folder.

### Q: Repository phải Public hay Private?
**A:** Phải **Public** nếu dùng GitHub Pages miễn phí.
- Settings > General > Danger Zone > Change repository visibility > Make public

### Q: Bao lâu thì website live?
**A:** 2-3 phút sau khi push. Nếu lâu hơn 5 phút, có vấn đề.

---

## 📝 CHECKLIST NHANH

Làm theo thứ tự:

- [ ] File `.nojekyll` đã có trong folder local
- [ ] Upload TẤT CẢ files lên GitHub (including .nojekyll)
- [ ] Kiểm tra cấu trúc trên GitHub: `index.html` ở root (không trong subfolder)
- [ ] Settings > Pages > Branch = main, Folder = / (root)
- [ ] Repository là Public
- [ ] Đợi 3 phút
- [ ] Hard refresh browser (Ctrl + Shift + R)
- [ ] Thử incognito mode

---

## 🎯 KIỂM TRA NHANH TRÊN GITHUB

Sau khi upload, vào repo và phải thấy:

```
software-sales-website/        ← Repository name
├── .nojekyll                  ← Có thể không thấy nếu hidden
├── assets/
│   ├── chatbot_icon.png
│   ├── fleet_management_icon.png
│   ├── hr_management_icon.png
│   ├── maintenance_icon.png
│   ├── ocr_software_icon.png
│   └── production_management_icon.png
├── DEPLOYMENT_CHECKLIST.md
├── GITHUB_PAGES_GUIDE.md
├── GOOGLE_SHEETS_SETUP.md
├── GOOGLE_SHEETS_TEMPLATE.txt
├── index.html                 ← PHẢI Ở ROOT!
├── README.md
├── script.js
└── styles.css
```

**KHÔNG được có thêm folder `software-sales-website` bên trong!**

---

## 🚀 SAU KHI WEBSITE LIVE

1️⃣ **Test website:**
   - Mở: https://USERNAME.github.io/software-sales-website/
   - Kiểm tra tất cả sections
   - Test trên mobile

2️⃣ **Setup Google Sheets:**
   - Đọc GOOGLE_SHEETS_SETUP.md
   - Tạo Google Apps Script
   - Update URL trong script.js

3️⃣ **Share với khách hàng:**
   - Copy link website
   - Share trên social media
   - Thêm vào email signature

---

**Chúc bạn fix lỗi thành công! 🎉**

*Nếu cần hỗ trợ thêm, kiểm tra file DEPLOYMENT_CHECKLIST.md để debug chi tiết.*
