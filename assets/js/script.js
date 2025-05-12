// Sample Product Data with Affiliate Links
const products = [
  {
    id: 1,
    category: "Equipment",
    name: "16 Kg Home Gym Set",
    price: 99.99,
    image: "assets/images/product1.jpg",
    description: "16 Kg Home Gym Set With One 3 Ft Curl And One Pair Dumbbell Rods With Gym Accessories, Black",
    affiliateLink: "https://amzn.to/3GFVPaK",
    rating: 4.5,
    features: ["16 kg total weight", "Includes 3 ft curl bar", "Dumbbell rods included", "Black finish"],
    specs: { weight: "16 kg", material: "Steel", color: "Black" },
    reviews: [
      { name: "John M.", date: "2025-04-10", rating: 5, comment: "Perfect for my home gym! Sturdy and versatile." },
      { name: "Sarah L.", date: "2025-03-15", rating: 4, comment: "Good quality, but the curl bar could be longer." },
      { name: "Mike P.", date: "2025-02-20", rating: 4.5, comment: "Great value for the price. Highly recommend!" }
    ]
  },
  {
    id: 2,
    category: "Equipment",
    name: "Burn Lab 6 in 1 Weight Training Kit",
    price: 149.99,
    image: "assets/images/product2.jpg",
    description: "Burn lab 6 in 1 multifunctional weight training kit - Dumbbells, Kettlebells, Barbells & Push up brackets in 1 | Adjustable Weights | Perfect for Full Body Workout",
    affiliateLink: "https://amzn.to/44rc3yf",
    rating: 4.8,
    features: ["6-in-1 functionality", "Adjustable weights", "Includes push-up brackets", "Full-body workout"],
    specs: { weight: "Varies", material: "Steel & Plastic", color: "Black" },
    reviews: [
      { name: "Emily R.", date: "2025-04-05", rating: 5, comment: "This kit is a game-changer! So versatile." },
      { name: "David K.", date: "2025-03-10", rating: 4.5, comment: "Love the adjustability, but takes time to switch weights." },
      { name: "Lisa T.", date: "2025-02-15", rating: 4, comment: "Great for small spaces!" }
    ]
  },
  {
    id: 3,
    category: "Accessories",
    name: "Adjustable Hand Grip Strengthener",
    price: 19.99,
    image: "assets/images/product3.jpg",
    description: "Adjustable Hand Grip Strengthener with Forearm Exerciser, Hand Gripper, Power Grip-Gym-60kg-Finger exercise for Veins for Men, Women & Children Multicolor",
    affiliateLink: "https://amzn.to/44w2UVj",
    rating: 4.2,
    features: ["Adjustable resistance up to 60kg", "Forearm exerciser", "Multicolor design", "Suitable for all ages"],
    specs: { resistance: "Up to 60kg", material: "Plastic & Steel", color: "Multicolor" },
    reviews: [
      { name: "Tom H.", date: "2025-04-12", rating: 4, comment: "Really helps with grip strength!" },
      { name: "Anna B.", date: "2025-03-20", rating: 4.5, comment: "Perfect for daily use, adjustable resistance is great." },
      { name: "James W.", date: "2025-02-25", rating: 3.5, comment: "Good but feels a bit plasticky." }
    ]
  },
  {
    id: 4,
    category: "Accessories",
    name: "Jump Rope Tangle-Free",
    price: 14.99,
    image: "assets/images/product4.jpg",
    description: "Jump Rope Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Skipping Rope with Foam Handles, Black & Red",
    affiliateLink: "https://amzn.to/3GJDxp1",
    rating: 4.6,
    features: ["Tangle-free cable", "Ball bearings for speed", "Adjustable length", "Foam handles"],
    specs: { length: "Adjustable", material: "Steel & Foam", color: "Black & Red" },
    reviews: [
      { name: "Rachel S.", date: "2025-04-08", rating: 5, comment: "Best jump rope I’ve used! Super smooth." },
      { name: "Mark D.", date: "2025-03-18", rating: 4, comment: "Great for cardio, but handles could be softer." },
      { name: "Kelly G.", date: "2025-02-22", rating: 4.5, comment: "Perfect for my HIIT workouts!" }
    ]
  },
  {
    id: 5,
    category: "Combos",
    name: "Gym Accessories Combo",
    price: 59.99,
    image: "assets/images/product5.jpg",
    description: "Gym Accessories Combo for Man and Woman Gym Kit for Home Workout with Gym Bag, Shaker, Rope, Wrist Band, Towel, Gloves, Deadlift Straps & Belt. Different Combos. (Pack of 6, Black)",
    affiliateLink: "https://amzn.to/3YZLaxF",
    rating: 4.4,
    features: ["6-piece combo", "Includes gym bag, shaker, rope", "Wrist band, towel, gloves", "Deadlift straps & belt"],
    specs: { pieces: "6", material: "Mixed", color: "Black" },
    reviews: [
      { name: "Chris E.", date: "2025-04-10", rating: 4.5, comment: "Everything I need in one kit!" },
      { name: "Megan F.", date: "2025-03-12", rating: 4, comment: "Good quality, but the shaker leaks a bit." },
      { name: "Alex C.", date: "2025-02-18", rating: 4.5, comment: "Awesome value for the price." }
    ]
  },
  {
    id: 6,
    category: "Equipment",
    name: "Gym Pulley System 7in1",
    price: 129.99,
    image: "assets/images/product6.jpg",
    description: "Gym pulley systems 7in1 wall mount pull up bar for home tricep rope with 360 degree gym pulley Upgraded LAT Pull Down Cable Machine Attachment",
    affiliateLink: "https://amzn.to/42Kvdhh",
    rating: 4.7,
    features: ["7-in-1 pulley system", "Wall-mounted pull-up bar", "Tricep rope included", "360-degree pulley"],
    specs: { weight: "Varies", material: "Steel", color: "Black" },
    reviews: [
      { name: "Jake R.", date: "2025-04-06", rating: 5, comment: "Incredible for home workouts!" },
      { name: "Laura M.", date: "2025-03-15", rating: 4.5, comment: "Solid build, takes some space." },
      { name: "Sam T.", date: "2025-02-20", rating: 4, comment: "Great for strength training!" }
    ]
  },
  {
    id: 7,
    category: "Equipment",
    name: "Mini Cycle Pedal Exerciser",
    price: 49.99,
    image: "assets/images/product7.jpg",
    description: "100 Mini Cycle Pedal Exerciser with Fixing Strap, Adjustable Resistance and Digital Display - Suitable for Light Exercise of Legs, Arms, and Physiotherapy at Home, Black",
    affiliateLink: "https://amzn.to/3YwqxZU",
    rating: 4.3,
    features: ["Adjustable resistance", "Digital display", "Fixing strap", "For legs, arms, physiotherapy"],
    specs: { weight: "5 kg", material: "Plastic & Steel", color: "Black" },
    reviews: [
      { name: "Emma W.", date: "2025-04-09", rating: 4.5, comment: "Perfect for my desk workouts!" },
      { name: "Paul B.", date: "2025-03-17", rating: 4, comment: "Good for light exercise, display is handy." },
      { name: "Nina S.", date: "2025-02-23", rating: 4, comment: "Works well for physiotherapy." }
    ]
  },
  {
    id: 8,
    category: "Equipment",
    name: "Push Up Board",
    price: 29.99,
    image: "assets/images/product8.jpg",
    description: "Push Up Board, 15 Positions, Pushup Stand for Men & Women with 2 Handles, Anti Slip Accessories, Pushup Bars, Home gym equipment, Pushup Board",
    affiliateLink: "https://amzn.to/4mlxt6D",
    rating: 4.5,
    features: ["15 positions", "Anti-slip handles", "Compact design", "For men & women"],
    specs: { positions: "15", material: "Plastic", color: "Black" },
    reviews: [
      { name: "Ryan L.", date: "2025-04-07", rating: 4.5, comment: "Makes push-ups so much better!" },
      { name: "Sophie K.", date: "2025-03-14", rating: 4, comment: "Good variety of positions." },
      { name: "Ethan J.", date: "2025-02-19", rating: 4.5, comment: "Sturdy and easy to use." }
    ]
  },
  {
    id: 9,
    category: "Equipment",
    name: "Sit-Up Bar",
    price: 24.99,
    image: "assets/images/product9.jpg",
    description: "Roughhouse Sit-Up Bar for Home Workouts | Portable Abdominal Exercise Equipment with Strong Single Suctions Cup | Sit-Up Assistant Device for Abs, Core Strength, and Fitness at Home",
    affiliateLink: "https://amzn.to/4m8RSM0",
    rating: 4.4,
    features: ["Strong suction cup", "Portable design", "For abs and core", "Easy to install"],
    specs: { weight: "1 kg", material: "Steel & Rubber", color: "Black" },
    reviews: [
      { name: "Olivia P.", date: "2025-04-11", rating: 4.5, comment: "Great for ab workouts at home!" },
      { name: "Liam N.", date: "2025-03-16", rating: 4, comment: "Suction is strong, but setup took a bit." },
      { name: "Mia D.", date: "2025-02-21", rating: 4.5, comment: "Perfect for my small apartment." }
    ]
  },
  {
    id: 10,
    category: "Equipment",
    name: "Abs Roller",
    price: 34.99,
    image: "assets/images/product10.jpg",
    description: "Abs Roller, Ab Wheel Anti Rust Stainless Steel Rod, Ab Wheel, Home Gym Equipment Abs Workouts 100 Kgs, Core Workouts for Men and Women (6MM Safe Knee Mat, Yellow)",
    affiliateLink: "https://amzn.to/3RMKZ54",
    rating: 4.6,
    features: ["Anti-rust stainless steel", "100 kg capacity", "Includes 6mm knee mat", "For core workouts"],
    specs: { capacity: "100 kg", material: "Steel & Rubber", color: "Yellow" },
    reviews: [
      { name: "Noah G.", date: "2025-04-08", rating: 5, comment: "Awesome for core strength!" },
      { name: "Ava T.", date: "2025-03-13", rating: 4.5, comment: "Smooth rolling, knee mat is a plus." },
      { name: "Lucas M.", date: "2025-02-24", rating: 4, comment: "Great but a bit challenging for beginners." }
    ]
  }
];

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hide Loading Spinner
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none";
});

// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Close Popups
function closePopup() {
  document.getElementById("sale-popup").style.display = "none";
}

function closeCheckoutPopup() {
  document.getElementById("checkout-popup").style.display = "none";
}

// Checkout Popup Trigger
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("checkout-popup").classList.remove("hidden");
  });
}

// Image Zoom
function openZoom(src) {
  const zoomDiv = document.getElementById("image-zoom");
  zoomDiv.querySelector("img").src = src;
  zoomDiv.classList.remove("hidden");
}

function closeZoom() {
  document.getElementById("image-zoom").classList.add("hidden");
}

// Ads Slideshow
function initSlideshow() {
  const slideshow = document.getElementById("ad-slideshow");
  if (slideshow) {
    let currentSlide = 0;
    const slides = slideshow.children.length;

    function showSlide(index) {
      slideshow.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById("next-slide").addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides;
      showSlide(currentSlide);
    });

    document.getElementById("prev-slide").addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides) % slides;
      showSlide(currentSlide);
    });

    // Auto-rotate every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides;
      showSlide(currentSlide);
    }, 5000);
  }
}

// Render Best Sellers (Homepage)
function renderBestSellers() {
  const bestSellers = document.getElementById("best-sellers");
  if (bestSellers) {
    bestSellers.innerHTML = products
      .slice(0, 4)
      .map(
        (product) => `
          <div class="product-card glass rounded-2xl shadow-md overflow-hidden animate-slide-up">
            <a href="product.html?id=${product.id}">
              <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold text-white">${product.name}</h3>
                <p class="text-blue-400 text-lg mt-2">$${product.price.toFixed(2)}</p>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}</span>
                </div>
              </div>
            </a>
            <div class="p-6 pt-0 flex space-x-4">
              <button onclick="addToCart(${product.id})" class="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 pulse">Add to Cart</button>
              <a href="${product.affiliateLink}" target="_blank" class="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 pulse">Buy Now</a>
            </div>
          </div>
        `
      )
      .join("");
  }
}

// Render Shop Products
function renderShopProducts() {
  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    let filteredProducts = products;

    // Category Filter
    const categoryFilter = document.getElementById("category-filter");
    categoryFilter.addEventListener("change", () => {
      const category = categoryFilter.value;
      filteredProducts = category === "all" ? products : products.filter((p) => p.category === category);
      applyFilters();
    });

    // Search
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchTerm));
      applyFilters();
    });

    // Sort
    const sortSelect = document.getElementById("sort");
    sortSelect.addEventListener("change", () => {
      applyFilters();
    });

    function applyFilters() {
      let sortedProducts = [...filteredProducts];
      const sortValue = sortSelect.value;
      if (sortValue === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortValue === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortValue === "rating") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
      }

      productGrid.innerHTML = sortedProducts
        .map(
          (product) => `
            <div class="product-card glass rounded-2xl shadow-md overflow-hidden animate-slide-up">
              <a href="product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-bold text-white">${product.name}</h3>
                  <p class="text-blue-400 text-lg mt-2">$${product.price.toFixed(2)}</p>
                  <div class="flex items-center mt-2">
                    <span class="text-yellow-400">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}</span>
                  </div>
                </div>
              </a>
              <div class="p-6 pt-0 flex space-x-4">
                <button onclick="addToCart(${product.id})" class="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 pulse">Add to Cart</button>
                <a href="${product.affiliateLink}" target="_blank" class="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 pulse">Buy Now</a>
              </div>
            </div>
          `
        )
        .join("");
    }

    applyFilters();
  }
}

// Render Product Detail
function renderProductDetail() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const product = products.find((p) => p.id == productId);
  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").onclick = () => openZoom(product.image);
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-rating").innerHTML = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating));
    document.getElementById("buy-now").href = product.affiliateLink;

    document.getElementById("product-features").innerHTML = product.features.map((f) => `<li>${f}</li>`).join("");
    document.getElementById("product-specs").innerHTML = Object.entries(product.specs)
      .map(([key, value]) => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`)
      .join("");
    document.getElementById("product-reviews").innerHTML = product.reviews
      .map(
        (r) => `
          <div class="glass p-4 rounded-xl">
            <p class="font-bold text-white">${r.name}</p>
            <p class="text-gray-400 text-sm">${r.date}</p>
            <p class="text-yellow-400">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
            <p class="text-gray-300">${r.comment}</p>
          </div>
        `
      )
      .join("");

    // Related Products
    const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
    document.getElementById("related-products").innerHTML = relatedProducts
      .map(
        (p) => `
          <div class="product-card glass rounded-2xl shadow-md overflow-hidden animate-slide-up">
            <a href="product.html?id=${p.id}">
              <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold text-white">${p.name}</h3>
                <p class="text-blue-400 text-lg mt-2">$${p.price.toFixed(2)}</p>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400">${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5 - Math.floor(p.rating))}</span>
                </div>
              </div>
            </a>
            <div class="p-6 pt-0 flex space-x-4">
              <button onclick="addToCart(${p.id})" class="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 pulse">Add to Cart</button>
              <a href="${ Ascendant">Buy Now</a> href="${p.affiliateLink}" target="_blank" class="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 pulse">Buy Now</a>
            </div>
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
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Update Cart Quantity
function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  } else {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Render Cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (cartItems && cartTotal) {
    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="text-gray-400 text-center">Your cart is empty.</p>';
      cartTotal.textContent = "$0.00";
    } else {
      cartItems.innerHTML = cart
        .map(
          (item) => `
            <div class="flex items-center glass p-4 rounded-xl">
              <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg mr-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white">${item.name}</h3>
                <p class="text-blue-400">$${item.price.toFixed(2)}</p>
                <div class="flex items-center mt-2">
                  <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="bg-gray-800 text-white px-3 py-1 rounded-l-full hover:bg-gray-700">-</button>
                  <span class="px-4">${item.quantity}</span>
                  <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="bg-gray-800 text-white px-3 py-1 rounded-r-full hover:bg-gray-700">+</button>
                </div>
              </div>
              <p class="text-blue-400 text-lg">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          `
        )
        .join("");
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      cartTotal.textContent = `$${total.toFixed(2)}`;
    }
  }
}

// Initialize Functions
initSlideshow();
renderBestSellers();
renderShopProducts();
renderProductDetail();
renderCart();
