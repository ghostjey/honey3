# ร้านน้ำผึ้งป่า – Landing page + Google Sheet + Vercel

โครงสร้าง: index.html (หน้าขาย) · admin.html (ใบหยิบ/ใบปะหน้า) · images/ (รูปสินค้า) · apps-script/Code.gs

## 1) Google Sheet
1. สร้าง Google Sheet ใหม่ > Extensions > Apps Script > วางโค้ด `apps-script/Code.gs` แล้วเปลี่ยนค่า KEY
2. Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone > คัดลอก URL
3. วาง URL ลงตัวแปร `SHEET_URL` ใน index.html และ admin.html

## 2) รูปสินค้า
ใส่ไฟล์ในโฟลเดอร์ `images/` ชื่อ hny-250.jpg, hny-500.jpg (แก้ชื่อ/สินค้า/ราคาได้ในอาร์เรย์ PRODUCTS)

## 3) GitHub + Vercel
1. สร้าง repo ใหม่บน GitHub แล้วอัปโหลดไฟล์ทั้งหมด
2. vercel.com > Add New Project > Import repo > Deploy (ไม่ต้องตั้งค่า build)
3. ได้โดเมน `ชื่อโปรเจกต์.vercel.app` ; หน้าหลังร้านอยู่ที่ `/admin.html`

## 4) การใช้งานหลังร้าน
เปิด /admin.html > ใส่รหัส KEY > โหลดออเดอร์ > ใช้ "ใบหยิบ" รวมจำนวนตาม SKU > พิมพ์ใบปะหน้า > กด "แพ็คแล้ว"
