// วางโค้ดนี้ใน Google Sheet > Extensions > Apps Script
const KEY = "เปลี่ยนรหัสนี้"; // รหัสสำหรับหน้า admin
const HEAD = ["เวลา","orderId","ชื่อผู้รับ","เบอร์โทร","ที่อยู่","SKU","สินค้า","จำนวน","ราคา/ชิ้น","รวม","สถานะ"];

function sh_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName("orders") || ss.insertSheet("orders");
  if (s.getLastRow() === 0) s.appendRow(HEAD);
  return s;
}
function doPost(e) {
  const o = JSON.parse(e.postData.contents), s = sh_(), now = new Date();
  o.items.forEach(i => s.appendRow([now, o.orderId, o.name, "'" + o.phone, o.address,
    i.sku, i.name, i.qty, i.price, i.qty * i.price, "new"]));
  return out_({ ok: true });
}
function doGet(e) {
  if (e.parameter.key !== KEY) return out_({ error: "unauthorized" });
  const s = sh_();
  if (e.parameter.pack) { // ทำเครื่องหมายว่าแพ็คแล้ว
    const v = s.getDataRange().getValues();
    for (let r = 1; r < v.length; r++) if (v[r][1] === e.parameter.pack) s.getRange(r + 1, 11).setValue("packed");
    return out_({ ok: true });
  }
  const v = s.getDataRange().getValues().slice(1);
  return out_(v.map(r => ({ orderId: r[1], name: r[2], phone: String(r[3]).replace("'", ""),
    address: r[4], sku: r[5], product: r[6], qty: r[7], total: r[9], status: r[10] })));
}
function out_(d) {
  return ContentService.createTextOutput(JSON.stringify(d)).setMimeType(ContentService.MimeType.JSON);
}
