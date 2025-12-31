const PRODUCTS = [
  {
    id: "Cocktail-Menu-001",
    name: "Cocktails",
    description: "Beverages",
    price: 12.99,
    rating: 4.9,
    reviews: 200,
    badge: "Customer Favorite",
    imageUrl: "media/images/sampleCocktail.jpg"
  },
  {
    id: "Appetizer-Menu-002",
    name: "Appetizers",
    description: "Appetizers",
    price: 9.99,
    rating: 4.8,
    reviews: 150,
    badge: "Best Seller",
    imageUrl: "media/images/sampleapp.jpg"
  },
  {
    id: "Salad-Menu-003",
    name: "Salads",
    description: "Salads",
    price: 16.99,
    rating: 4.6,
    reviews: 180,
    badge: "Healthy Choice",
    imageUrl: "media/images/sampleSalad.jpg"
  },  
  {
    id: "Entree-Menu-004",
    name: "Entrees ",
    description: "Entrees",
    price: 24.99,
    rating: 4.5,
    reviews: 200,
    badge: "New Arrival",
    imageUrl: "media/images/sampleEntree.jpg"
  },
  {
    id: "Dessert-Menu-005",
    name: "Dessserts",
    description: "Desserts",
    price: 7.99,
    rating: 4.7,
    reviews: 120,
    badge: "Popular",
    imageUrl: "media/images/sampleDessert.jpg"
  },
  {
    id: "Beverage-Menu-006",
    name: "Beverages",
    description: "Beverages",
    price: 4.99,
    rating: 4.9,
    reviews: 200,
    badge: "Customer Favorite",
    imageUrl: "media/images/sampleBeverage.jpg"  
  }
];  

function productCard(product) {
  return `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 border">
      <div class="p-6 flex flex-col h-full">
             <!-- Top section: text left, image right -->
        <div class="flex justify-between items-center mb-4">

          <!-- Left side text -->
          <div>
            <div class="flex justify-between items-start mb-2">
              <span class="text-xs text-slate-500">${product.description}</span>
              <span class="text-xs font-medium bg-slate-100 px-3 py-1 rounded-full">${product.badge}</span>
            </div>

            <h3 class="font-semibold text-lg leading-snug mb-1">${product.name}</h3>
            <p class="text-sm text-slate-600 line-clamp-2">${product.description}</p>
          </div>

          <!-- Right side image -->
          <img 
            src="${product.imageUrl}" 
            alt="${product.name}" 
            class="w-20 h-20 object-cover rounded-lg ml-4"
          />
        </div>
        <!-- Badge -->
        <div class="flex justify-between items-start mb-4">
          <span class="text-xs text-slate-500">${product.description}</span>
          <span class="text-xs font-medium bg-slate-100 px-3 py-1 rounded-full">${product.badge}</span>
        </div>

        <!-- Product Name -->
        <h3 class="font-semibold text-lg leading-snug mb-2">${product.name}</h3>

        <!-- Description -->
        <p class="text-sm text-slate-600 mb-4 line-clamp-2">${product.description}</p>

        <!-- Rating -->
        <div class="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <span> Star Rating: ${product.rating} </span>
          <span>(${product.reviews.toLocaleString()} reviews)</span>
        </div>

        <!-- Spacer -->
        <div class="flex-grow"></div>

        <!-- Price + Stock -->
        <div class="flex items-center justify-between mb-4">
          <span class="text-xl font-bold">$${product.price}</span>

        </div>

        <!-- CTA -->
        <button
          data-add="${product.id}" id="cartBtn"
          class="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>`;
}

const productGrid = document.getElementById("productGrid");

function renderProducts() { 
  if (productGrid) {    
    productGrid.innerHTML = PRODUCTS.map(productCard).join("");   
  }
}

renderProducts();

productGrid?.addEventListener("click", e => {
  const btn = e.target.closest("[data-add]");
  if (btn) addItemToCart(btn.dataset.add);
});

const badge = document.getElementById('cartBadge');

const cartOverlay = document.getElementById('cartOverlay');

document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    const productId= addBtn.dataset.add;
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      addItemToCart(product);
      updateCartBadge();
      showCartToast(`${product.name} added to cart!`);
    }
  }
});

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = getCartItemCount();
  if (count > 0) { 
    badge.textContent = count; 
    badge.classList.remove('hidden');   
  } else {
     badge.classList.add('hidden');
  }
}

