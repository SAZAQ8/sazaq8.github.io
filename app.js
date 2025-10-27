const products = [
    { id: 1, name: "منتج 1", price: "10 د.ك" },
    { id: 2, name: "منتج 2", price: "15 د.ك" },
    { id: 3, name: "منتج 3", price: "20 د.ك" }
];

const productsGrid = document.querySelectorAll("#products-grid");

productsGrid.forEach(grid => {
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><button>أضف إلى السلة</button>`;
        grid.appendChild(div);
    });
});

// أزرار السلة والبحث
document.getElementById("search-btn")?.addEventListener("click", () => {
    const query = document.getElementById("search").value;
    alert("تم البحث عن: " + query);
});

document.getElementById("cart-btn")?.addEventListener("click", () => {
    alert("سلة التسوق فارغة الآن");
});
