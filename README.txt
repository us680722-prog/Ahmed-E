AHMEDE LUXURY WEBSITE — GOOGLE SHEET SETUP

1. Google Sheet create karein.
2. Extensions > Apps Script open karein.
3. Code.gs ka code delete karke google-apps-script.js ka code paste karein.
4. Save.
5. Deploy > New deployment > Web app.
6. Execute as: Me
7. Who has access: Anyone
8. Deploy aur Web App URL copy karein.
9. index.html mein GOOGLE_SCRIPT_URL ke andar URL paste karein.
10. index.html ko hosting par upload karein.

Orders sheet automatically create ho jayegi:
Timestamp | Name | City | Quantity | Address | Product

Website mein customer ko sirf Name, City, Quantity aur Address fill karna hai.


UPDATED FIELDS:
Name | Phone Number | City | Quantity (unlimited) | Address | Product
Quantity is now a number field, so customer can order any quantity >= 1.
