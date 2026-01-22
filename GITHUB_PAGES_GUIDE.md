# Hướng Dẫn Publish Website Lên GitHub Pages

## Lỗi Bạn Đang Gặp
Lỗi 404 "File not found" xuất hiện khi GitHub Pages không tìm thấy file `index.html` ở thư mục root.

## Nguyên Nhân Thường Gặp
1. ❌ File `index.html` chưa được push lên repo
2. ❌ File `index.html` nằm trong subfolder thay vì root
3. ❌ GitHub Pages chưa được cấu hình đúng source folder
4. ❌ Branch sai hoặc chưa có commits

## Giải Pháp Chi Tiết

### CÁCH 1: Upload Trực Tiếp (Không Cần Git) ⭐ KHUYẾN NGHỊ

#### Bước 1: Tạo Repository
1. Vào https://github.com/new
2. Repository name: `software-sales-website`
3. Chọn **Public** (bắt buộc cho GitHub Pages miễn phí)
4. **KHÔNG** tích "Add a README file"
5. Click **Create repository**

#### Bước 2: Upload Files
1. Trong trang repo vừa tạo, click link **"uploading an existing file"**
2. Kéo thả TẤT CẢ files và folders từ thư mục `e:\Google_Antigravity\software-sales-website`:
   - ✅ index.html (QUAN TRỌNG - phải ở root)
   - ✅ styles.css
   - ✅ script.js  
   - ✅ assets/ (folder chứa 6 icons)
   - ✅ GOOGLE_SHEETS_SETUP.md
   - ✅ GOOGLE_SHEETS_TEMPLATE.txt

3. Commit message: "Initial commit - SmartSoft Website"
4. Click **Commit changes**

#### Bước 3: Cấu Hình GitHub Pages
1. Vào tab **Settings** của repository
2. Sidebar trái → click **Pages**
3. Dưới "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: Chọn **main** (hoặc **master** nếu repo cũ)
   - Folder: **/ (root)** ⚠️ QUAN TRỌNG
4. Click **Save**

#### Bước 4: Đợi Deploy
- GitHub sẽ mất 1-3 phút để build
- Refresh trang Settings > Pages
- Khi ready, bạn sẽ thấy link:
  ```
  Your site is live at https://<username>.github.io/software-sales-website/
  ```

---

### CÁCH 2: Dùng Git Command Line

#### Điều Kiện Tiên Quyết
- Git đã được cài đặt (https://git-scm.com/downloads)

#### Các Lệnh

```powershell
# Di chuyển vào thư mục website
cd e:\Google_Antigravity\software-sales-website

# Khởi tạo Git repository
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - SmartSoft Website"

# Tạo branch main (nếu cần)
git branch -M main

# Thêm remote (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git push -u origin main
```

Sau đó làm theo **Bước 3** và **Bước 4** của Cách 1 để bật GitHub Pages.

---

## Kiểm Tra Sau Khi Deploy

### ✅ Checklist
- [ ] Repository đã có file `index.html` ở root (không trong subfolder)
- [ ] Folder `assets` có đầy đủ 6 icons
- [ ] GitHub Pages đã được bật (Settings > Pages)
- [ ] Branch được chọn là `main` hoặc `master`
- [ ] Folder được chọn là `/ (root)` không phải `/docs`
- [ ] Đã đợi 1-3 phút cho GitHub build

### 🔍 Cách Kiểm Tra Files Trên GitHub
1. Vào trang repository trên GitHub
2. Kiểm tra files hiển thị:
   ```
   software-sales-website/
   ├── assets/
   │   ├── ocr_software_icon.png
   │   ├── chatbot_icon.png
   │   ├── production_management_icon.png
   │   ├── hr_management_icon.png
   │   ├── fleet_management_icon.png
   │   └── maintenance_icon.png
   ├── index.html          ← PHẢI CÓ Ở ĐÂY
   ├── styles.css
   ├── script.js
   ├── GOOGLE_SHEETS_SETUP.md
   └── GOOGLE_SHEETS_TEMPLATE.txt
   ```

3. **QUAN TRỌNG**: File `index.html` phải nằm ngay tại root, KHÔNG được nằm trong subfolder

---

## Troubleshooting

### ❌ Vẫn Lỗi 404 Sau Khi Deploy

**Kiểm tra 1: File đúng vị trí chưa?**
- Vào repo trên GitHub
- Click vào file `index.html` để xem
- URL phải là: `github.com/username/repo/blob/main/index.html`
- KHÔNG phải: `github.com/username/repo/blob/main/software-sales-website/index.html`

**Kiểm tra 2: GitHub Pages settings**
- Settings > Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root) ← KHÔNG PHẢI /docs

**Kiểm tra 3: Đợi đủ thời gian**
- Build mất 1-3 phút
- Check tại Settings > Pages > Deployments

### ❌ Không Thấy Tab "Pages" Trong Settings

**Nguyên nhân**: Repository đang ở chế độ Private

**Giải pháp**:
1. Settings > General (scroll xuống cuối)
2. Danger Zone > Change repository visibility
3. Chọn **Make public**

---

## Sau Khi Website Live

### 🔗 URL Của Bạn
```
https://<github-username>.github.io/software-sales-website/
```

### 📝 Cập Nhật Sau Này
1. Chỉnh sửa files trên máy local
2. Upload lại files đã sửa qua GitHub web interface
3. Hoặc dùng Git để push changes
4. GitHub Pages tự động rebuild (1-2 phút)

### 🎯 Google Sheets Integration
Nhớ cập nhật URL trong `script.js` sau khi đã setup Google Apps Script!

---

## Domain Tùy Chỉnh (Tùy Chọn)

Nếu bạn có domain riêng (ví dụ: smartsoft.vn):
1. Settings > Pages > Custom domain
2. Nhập domain của bạn
3. Cấu hình DNS theo hướng dẫn GitHub

---

**Chúc bạn deploy thành công! 🚀**
