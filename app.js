const products = [
    { id: 1, name: "منتج 1", price: "10 د.ك", img: "https://via.placeholder.com/200" },
    { id: 2, name: "منتج 2", price: "20 د.ك", img: "https://via.placeholder.com/200" },
    { id: 3, name: "منتج 3", price: "15 د.ك", img: "https://via.placeholder.com/200" },
    { id: 4, name: "منتج 4", price: "25 د.ك", img: "https://via.placeholder.com/200" }
];

const productsContainer = document.getElementById("products");

function displayProducts(items) {
    productsContainer.innerHTML = "";
    items.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>أضف للسلة</button>
        `;
        productsContainer.appendChild(div);
    });
}

displayProducts(products);

// بحث
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
    const filtered = products.filter(product =>
        product.name.includes(e.target.value)
    );
    displayProducts(filtered);
});
