// جلب البيانات من LocalStorage أو من الموقع
let PRODUCTS = JSON.parse(localStorage.getItem("products")) || [
    { en: "Toy Car", ar: "سيارة لعب", price: "10 KD", img: "images/product1.jpg" },
    { en: "Doll", ar: "دمية", price: "15 KD", img: "images/product2.jpg" }
    // أضف باقي المنتجات حسب الحاجة
];

let WA_NUMBER = localStorage.getItem("wa_number") || "+96598833166";

// عرض المنتجات في لوحة التحكم
function renderProducts() {
    const container = document.getElementById("products_container");
    container.innerHTML = "";
    PRODUCTS.forEach((p, index) => {
        container.innerHTML += `
            <div class="product">
                <label>اسم بالعربي:</label>
                <input type="text" value="${p.ar}" onchange="PRODUCTS[${index}].ar=this.value"><br>
                <label>اسم بالإنجليزي:</label>
                <input type="text" value="${p.en}" onchange="PRODUCTS[${index}].en=this.value"><br>
                <label>السعر:</label>
                <input type="text" value="${p.price}" onchange="PRODUCTS[${index}].price=this.value"><br>
                <label>رابط الصورة:</label>
                <input type="text" value="${p.img}" onchange="PRODUCTS[${index}].img=this.value"><br>
            </div>
        `;
    });
}

// حفظ المنتجات وWhatsApp في LocalStorage
function saveProducts() {
    localStorage.setItem("products", JSON.stringify(PRODUCTS));
    alert("تم حفظ المنتجات بنجاح");
}

function saveWhatsApp() {
    const waInput = document.getElementById("wa_number").value;
    localStorage.setItem("wa_number", waInput);
    alert("تم حفظ رقم واتساب");
}

// تهيئة الصفحة
document.getElementById("wa_number").value = WA_NUMBER;
renderProducts();
