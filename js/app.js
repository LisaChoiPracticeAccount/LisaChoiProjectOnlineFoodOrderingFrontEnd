const PRODUCTS = [
  {
    id: "Cocktail-Menu-001",
    name: "Cocktails",
    description: "Beverages",
    price: 4.99,
    rating: 4.9,
    reviews: 200,
    stock: 50,
    badge: "Customer Favorite",
    imageUrl: "images/sampleCocktail.jpg"
  },
  {
    id: "Appetizer-Menu-002",
    name: "Appetizers",
    description: "Appetizers",
    price: 9.99,
    rating: 4.8,
    reviews: 150,
    stock: 25,
    badge: "Best Seller",
    imageUrl: "images/sampleapp.jpg"
  },
  {
    id: "Salad-Menu-003",
    name: "Salads",
    description: "Salads",
    price: 11.99,
    rating: 4.6,
    reviews: 180,
    stock: 15,
    badge: "Healthy Choice",
    imageUrl: "images/samplesalad.jpg"
  },  
  {
    id: "Entree-Menu-004",
    name: "Entrees ",
    description: "Entrees",
    price: 14.99,
    rating: 4.5,
    reviews: 200,
    stock: 30,
    badge: "New Arrival",
    imageUrl: "images/sampleEntree.jpg"
  },
  {
    id: "Dessert-Menu-005",
    name: "Dessserts",
    description: "Desserts",
    price: 7.99,
    rating: 4.7,
    reviews: 120,
    stock: 20,
    badge: "Popular",
    imageUrl: "images/sampleDessert.jpg"
  },
  {
    id: "Beverage-Menu-006",
    name: "Beverages",
    description: "Beverages",
    price: 4.99,
    rating: 4.9,
    reviews: 200,
    stock: 50,
    badge: "Customer Favorite",
    imageUrl: "images/samplebeverage.jpg"  
  }
];  

function productCard(product) {
  return `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 border">
      <div class="p-6 flex flex-col h-full">
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
          <span class="text-xs text-slate-500">${product.stock > 10 ? "In stock" : "Limited stock"}</span>
        </div>

        <!-- CTA -->
        <button
          data-add="${product.id}"
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
