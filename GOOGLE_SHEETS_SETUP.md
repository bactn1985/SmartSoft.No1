# Hướng Dẫn Tích Hợp Google Sheets

## Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo một spreadsheet mới
3. Đặt tên: "SmartSoft - Liên Hệ Khách Hàng"
4. Tạo các cột header ở dòng đầu tiên:

| Timestamp | Họ và Tên | Email | Số Điện Thoại | Sản Phẩm | Nhu Cầu |
|-----------|-----------|-------|---------------|----------|---------|

## Bước 2: Tạo Google Apps Script

1. Trong Google Sheet, vào **Extensions > Apps Script**
2. Xóa code mặc định và paste code sau:

```javascript
function doPost(e) {
  try {
    // Lấy spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse dữ liệu từ form
    var data = JSON.parse(e.postData.contents);
    
    // Tạo timestamp
    var timestamp = new Date();
    
    // Thêm dòng mới vào sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.product,
      data.message
    ]);
    
    // Trả về success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Dữ liệu đã được lưu thành công'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Trả về error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (💾)
4. Đặt tên project: "SmartSoft Contact Form Handler"

## Bước 3: Deploy Script

1. Click **Deploy > New deployment**
2. Click ⚙️ (Settings) bên cạnh "Select type"
3. Chọn **Web app**
4. Cấu hình:
   - **Description**: Contact Form Submission
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. Authorize the app (cho phép quyền truy cập)
7. **LƯU LẠI WEB APP URL** - Bạn sẽ cần URL này!

URL sẽ có dạng: `https://script.google.com/macros/s/AKfycby.../exec`

## Bước 4: Cập Nhật Website

Mở file `script.js` và thay thế phần form handling bằng code đã được cập nhật.

**LƯU Ý QUAN TRỌNG**: 
- Thay `YOUR_GOOGLE_SCRIPT_URL_HERE` bằng URL bạn vừa copy ở bước 3
- URL phải là URL deployment đầy đủ kết thúc bằng `/exec`

## Bước 5: Test

1. Mở website
2. Điền form contact
3. Submit
4. Kiểm tra Google Sheet - dữ liệu sẽ xuất hiện tự động!

## Troubleshooting

**Lỗi CORS**: Đảm bảo script được deploy với "Who has access: Anyone"

**Không nhận được dữ liệu**: Kiểm tra lại URL trong `script.js`

**Lỗi Authorization**: Chạy lại script trong Apps Script Editor và authorize

## Bảo Mật (Tùy Chọn)

Để tăng bảo mật, bạn có thể:
1. Thêm API key validation
2. Giới hạn rate limiting
3. Thêm spam protection (reCAPTCHA)

---

**Chúc bạn thành công! 🎉**
