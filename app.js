const products = [
    { id: 1, name: "فستان نسائي", price: 30, img: "https://via.placeholder.com/200" },
    { id: 2, name: "حذاء رياضي", price: 50, img: "https://via.placeholder.com/200" },
    { id: 3, name: "شنطة يد", price: 40, img: "https://via.placeholder.com/200" },
    { id: 4, name: "نظارة شمسية", price: 25, img: "https://via.placeholder.com/200" }
];

const productsContainer = document.getElementById("products");

function displayProducts(items) {
    if (!productsContainer) return;
    productsContainer.innerHTML = "";
    items.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} د.ك</p>
            <a href="product-details.html">عرض المنتج</a>
        `;
        productsContainer.appendChild(div);
    });
}

displayProducts(products);
