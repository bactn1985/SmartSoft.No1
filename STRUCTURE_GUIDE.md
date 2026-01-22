# 📁 CẤU TRÚC FOLDER ĐÚNG vs SAI

## ✅ ĐÚNG - Files ở root của repository

```
https://github.com/username/software-sales-website
│
├── 📄 .nojekyll                      ← Quan trọng!
├── 📁 assets/
│   ├── 🖼️ ocr_software_icon.png
│   ├── 🖼️ chatbot_icon.png
│   ├── 🖼️ production_management_icon.png
│   ├── 🖼️ hr_management_icon.png
│   ├── 🖼️ fleet_management_icon.png
│   └── 🖼️ maintenance_icon.png
├── 📄 DEPLOYMENT_CHECKLIST.md
├── 📄 FIX_404_ERROR.md
├── 📄 GITHUB_PAGES_GUIDE.md
├── 📄 GOOGLE_SHEETS_SETUP.md
├── 📄 GOOGLE_SHEETS_TEMPLATE.txt
├── 📄 index.html                     ← Ở ROOT!
├── 📄 README.md
├── 📄 script.js
└── 📄 styles.css
```

**URL của index.html:** 
`github.com/username/software-sales-website/blob/main/index.html` ✅

**GitHub Pages sẽ serve:**
`https://username.github.io/software-sales-website/` ✅

---

## ❌ SAI - Files trong nested folder

```
https://github.com/username/software-sales-website
│
└── 📁 software-sales-website/        ← THỪA FOLDER NÀY!
    ├── 📄 .nojekyll
    ├── 📁 assets/
    │   └── ...
    ├── 📄 index.html                 ← Bị chôn sâu trong subfolder
    ├── 📄 script.js
    └── 📄 styles.css
```

**URL của index.html:** 
`github.com/username/software-sales-website/blob/main/software-sales-website/index.html` ❌

**GitHub Pages tìm index.html ở:**
`software-sales-website/` (root) → KHÔNG TÌM THẤY → **404 ERROR!** ❌

---

## 🔍 CÁCH KIỂM TRA CẤU TRÚC CỦA BẠN

### Bước 1: Vào repository trên GitHub
Mở: `https://github.com/YOUR_USERNAME/software-sales-website`

### Bước 2: Nhìn vào danh sách files

**Nếu thấy như này → ✅ ĐÚNG:**
```
software-sales-website
├── .nojekyll
├── assets
├── index.html          ← Thấy ngay khi vào repo
├── script.js
├── styles.css
└── README.md
```

**Nếu thấy như này → ❌ SAI:**
```
software-sales-website
└── software-sales-website    ← Có 1 folder nữa!
    └── (files ở trong này)
```

### Bước 3: Click vào file index.html

**URL đúng:**
```
https://github.com/YOUR_USERNAME/software-sales-website/blob/main/index.html
                    └─────────┬─────────┘                    └──┬──┘
                         Tên repo                          Tên file
```

**URL sai (nested):**
```
https://github.com/YOUR_USERNAME/software-sales-website/blob/main/software-sales-website/index.html
                    └─────────┬─────────┘                    └────────┬───────────┘└──┬──┘
                         Tên repo                              Folder thừa      Tên file
                                                                    ↑
                                                               KHÔNG NÊN CÓ!
```

---

## 🛠️ CÁCH SỬA NẾU SAI

### Option 1: Xóa và Upload Lại (Đơn Giản)

1. Vào repo trên GitHub
2. Xóa toàn bộ files/folders
3. Upload lại, nhưng lần này:
   - **ĐÚNG:** Chọn files TRONG folder `software-sales-website`
   - **SAI:** Upload cả folder `software-sales-website`

### Option 2: Move Files (Advanced)

Nếu biết Git:
```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/software-sales-website.git
cd software-sales-website

# Nếu có nested folder, move files ra ngoài
mv software-sales-website/* .
rm -rf software-sales-website/

# Commit và push
git add .
git commit -m "Fix: Move files to root"
git push
```

---

## 📊 SO SÁNH

| Tiêu chí | ✅ ĐÚNG | ❌ SAI |
|----------|---------|--------|
| Vị trí index.html | Ở root của repo | Trong subfolder |
| GitHub Pages tìm thấy | ✅ Có | ❌ Không |
| URL khi click file | `/blob/main/index.html` | `/blob/main/folder/index.html` |
| Kết quả | Website live | 404 Error |

---

## 💡 MẸO

**Khi upload qua GitHub Web Interface:**

1. Mở folder `e:\Google_Antigravity\software-sales-website` trong File Explorer
2. **Chọn TẤT CẢ files VÀ folders BÊN TRONG** (Ctrl + A)
3. Kéo thả vào GitHub
4. **KHÔNG** kéo thả CẢ FOLDER `software-sales-website`

**Sự khác biệt:**

❌ **SAI:** Kéo folder `software-sales-website` vào GitHub
```
Bạn kéo:  📁 software-sales-website/
GitHub nhận: 
    software-sales-website/
    └── software-sales-website/  ← Nested!
        └── files...
```

✅ **ĐÚNG:** Vào TRONG folder, chọn tất cả nội dung, rồi kéo vào
```
Bạn kéo:  📄 index.html, 📄 styles.css, 📁 assets/, ...
GitHub nhận:
    software-sales-website/
    ├── index.html  ← Đúng vị trí!
    ├── styles.css
    └── assets/
```

---

**Chúc bạn deploy thành công! 🚀**
