// Sample Product Data
const products = [
  {
    id: 1,
    category: "Powders",
    name: "Premium Whey Protein",
    price: 29.99,
    image: "assets/images/whey-protein.jpg",
    description: "High-quality whey protein for muscle recovery.",
    rating: 4.5,
  },
  {
    id: 2,
    category: "Equipment",
    name: "Adjustable Dumbbell Set",
    price: 89.99,
    image: "assets/images/dumbbell.jpg",
    description: "Versatile dumbbells for home workouts.",
    rating: 4.8,
  },
  {
    id: 3,
    category: "Accessories",
    name: "Shaker Bottle",
    price: 9.99,
    image: "assets/images/shaker.jpg",
    description: "BPA-free shaker for your protein shakes.",
    rating: 4.2,
  },
  // Add more products as needed
];

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Render Best Sellers (Homepage)
function renderBestSellers() {
  const bestSellers = document.getElementById("best-sellers");
  if (bestSellers) {
    bestSellers.innerHTML = products
      .slice(0, 4)
      .map(
        (product) => `
          <div class="product-card bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in">
            <a href="product.html?id=${product.id}">
              <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="text-lg font-bold">${product.name}</h3>
                <p class="text-blue-400">$${product.price.toFixed(2)}</p>
                <p class="text-yellow-400">${"★".repeat(Math.floor(product.rating))}</p>
                <button onclick="addToCart(${product.id})" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
              </div>
            </a>
          </div>
        `
      )
      .join("");
  }
}

// Render Products (Shop Page)
function renderProducts() {
  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    let filteredProducts = [...products];

    // Category Filter
    const categoryFilter = document.getElementById("category-filter");
    categoryFilter.addEventListener("change", () => {
      const category = categoryFilter.value;
      filteredProducts = category === "all" ? products : products.filter((p) => p.category === category);
      renderFilteredProducts(filteredProducts);
    });

    // Sort
    const sort = document.getElementById("sort");
    sort.addEventListener("change", () => {
      if (sort.value === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort.value === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (sort.value === "rating") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
      }
      renderFilteredProducts(filteredProducts);
    });

    // Search
    const search = document.getElementById("search");
    search.addEventListener("input", () => {
      const query = search.value.toLowerCase();
      filteredProducts = products.filter((p) => p.name.toLowerCase().includes(query));
      renderFilteredProducts(filteredProducts);
    });

    renderFilteredProducts(filteredProducts);
  }
}

function renderFilteredProducts(products) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in">
          <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-bold">${product.name}</h3>
              <p class="text-blue-400">$${product.price.toFixed(2)}</p>
              <p class="text-yellow-400">${"★".repeat(Math.floor(product.rating))}</p>
              <button onclick="addToCart(${product.id})" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
            </div>
          </a>
        </div>
      `
    )
    .join("");
}

// Render Product Detail
function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const product = products.find((p) => p.id === productId);

  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-rating").textContent = "★".repeat(Math.floor(product.rating));

    // Related Products
    const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
    document.getElementById("related-products").innerHTML = relatedProducts
      .map(
        (p) => `
          <div class="product-card bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in">
            <a href="product.html?id=${p.id}">
              <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="text-lg font-bold">${p.name}</h3>
                <p class="text-blue-400">$${p.price.toFixed(2)}</p>
                <p class="text-yellow-400">${"★".repeat(Math.floor(p.rating))}</p>
              </div>
            </a>
          </div>
        `
      )
      .join("");
  }
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Render Cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cartItems && cartTotal) {
    cartItems.innerHTML = cart
      .map(
        (item) => `
          <div class="flex items-center bg-gray-800 p-4 rounded-lg">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg mr-4">
            <div class="flex-1">
              <h3 class="text-lg font-bold">${item.name}</h3>
              <p class="text-blue-400">$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600">Remove</button>
          </div>
        `
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderBestSellers();
  renderProducts();
  renderProductDetail();
  renderCart();
});
