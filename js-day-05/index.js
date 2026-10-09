const products = [
  { id: 1, name: "Laptop", price: 15000000, category: "electronics", stock: 5 },
  { id: 2, name: "Áo thun", price: 200000, category: "fashion", stock: 0 },
  {
    id: 3,
    name: "Tai nghe",
    price: 1200000,
    category: "electronics",
    stock: 12,
  },
  { id: 4, name: "Giày", price: 900000, category: "fashion", stock: 3 },
  { id: 5, name: "Sách JS", price: 150000, category: "books" },
];

// getProductById(products, id)
function getProductById(products, id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }
    return null;
}

// getInStock(products)
function getInStock(products) {
    const inStock = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            inStock.push(products[i]);
        }
    }
    return inStock;
}

// getTotalValue(products)
function getTotalValue(products) {
    let totalValue = 0;
    for (let i = 0; i < products.length; i++) {
        totalValue += products[i].price * (products[i].stock || 0);
    }
    return totalValue;
}

// getNames(products)
function getNames(products) {
    const names = [];
    for (let i = 0; i < products.length; i++) {
        names.push(products[i].name);
    }
    return names;
}

// countByCategory(products)
function countByCategory(products) {
    const categoryCount = {};
    for (let i = 0; i < products.length; i++) {
        const category = products[i].category;
        categoryCount[category] = (categoryCount[category] || 0) + 1;
    }
    return categoryCount;
}

// updatePrice(product, newPrice)
function updatePrice(product, newPrice) {
    const newProduct = { ...product, price: newPrice };
    return newProduct;
}

// formatProduct(product)
function formatProduct(products) {
    const formattedProducts = [];
    for (const product of products) {
        const stock = product.stock ?? 0;
        if (product.stock === 0){
            formattedProducts.push(`${product.name} - ${product.price}đ (hết hàng)`);
        }
        else {
            formattedProducts.push(`${product.name} - ${product.price}đ (còn ${stock})`);
        }
    }
    return formattedProducts;
}

   const p = { name: "A", info: { color: "red" } };
   const q = p;
   const r = { ...p };

   q.name = "B";
   r.name = "C";
   r.info.color = "blue";

   console.log(p.name); // "B"
   console.log(p.info.color); // "blue"
   console.log(p === q); // true
   console.log(p === r); // false

   const key = "name";
   console.log(p.key); // undefined
   console.log(p[key]); // "B"
   console.log(p.size?.width); // undefined
   console.log(Object.keys(p).length); // 2