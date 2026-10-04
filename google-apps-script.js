function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Orders");

  if (!sheet) {
    sheet = ss.insertSheet("Orders");
    sheet.appendRow(["Timestamp","Name","Phone Number","City","Quantity","Address","Product"]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.city || "",
    data.quantity || "",
    data.address || "",
    data.product || "AHMEDÉ 50 ML"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({success:true}))
    .setMimeType(ContentService.MimeType.JSON);
}