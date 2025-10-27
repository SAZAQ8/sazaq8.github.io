README - SAZAQ8 static site
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>لوحة التحكم - SAZAQ8</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        body { font-family: Arial; margin: 20px; background: #f5f5f5; color: #000; }
        h1 { text-align: center; }
        .product { border: 1px solid #ccc; padding: 10px; margin: 10px 0; background: #fff; }
        input, button { padding: 5px; margin: 5px 0; }
        .save-btn { background: #000; color: #fff; border: none; cursor: pointer; padding: 8px 15px; border-radius:5px; }
    </style>
</head>
<body>
    <h1>لوحة التحكم - SAZAQ8</h1>

    <div>
        <h2>رقم واتساب</h2>
        <input type="text" id="wa_number" placeholder="+96598833166">
        <button class="save-btn" onclick="saveWhatsApp()">حفظ</button>
    </div>

    <div>
        <h2>المنتجات</h2>
        <div id="products_container"></div>
        <button class="save-btn" onclick="saveProducts()">حفظ المنتجات</button>
    </div>

    <script src="js/admin.js"></script>
</body>
</html>
