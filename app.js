const PRODUCTS = JSON.parse(localStorage.getItem("products")) || [
    { en: "Toy Car", ar: "سيارة لعب", price: "10 KD", img: "images/product1.jpg" },
    { en: "Doll", ar: "دمية", price: "15 KD", img: "images/product2.jpg" }
];

const WA_NUMBER = localStorage.getItem("wa_number") || "+96598833166";

// هنا أكواد عرض المنتجات على الصفحة الرئيسية
const productsContainer = document.getElementById("products");
if(productsContainer){
    PRODUCTS.forEach(p=>{
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <img src="${p.img}" alt="${p.en}" style="width:150px;height:150px;"><br>
            <strong>${p.ar} / ${p.en}</strong><br>
            <span>${p.price}</span><br>
            <a href="https://wa.me/${WA_NUMBER}" target="_blank">اطلب عبر واتساب</a>
        `;
        productsContainer.appendChild(div);
    });
}
