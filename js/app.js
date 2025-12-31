
 <script src="js/auth.js"></script>

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
    description: "A refreshing drink to accompany your meal.",
    imageUrl: "images/sampleCocktail.jpg"
  
  }

  {
    id: "Appetizer-Menu-002",
    name: "Appetizers",
    description: "Appetizers",
    price: 9.99,
    rating: 4.8,
    reviews: 150,
    stock: 25,
    badge: "Best Seller",
    description: "A delightful starter to kick off your meal.",
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
    description: "A fresh and crisp salad to refresh your palate.",
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
    description: "A hearty main course to satisfy your hunger.",
    imageUrl: "images/sampleEntree.jpg"
  }
  {
    id: "Dessert-Menu-005",
    name: "Dessserts",
    description: "Desserts",
    price: 7.99,
    rating: 4.7,
    reviews: 120,
    stock: 20,
    badge: "Popular",
    description: "A sweet ending to your meal.",
    imageUrl: "images/sampleDessert.jpg"
  }
  {
  id: "Beverage-Menu-006",
    name: "Beverages",
    description: "Beverages",
    price: 4.99,
    rating: 4.9,
    reviews: 200,
    stock: 50,
    badge: "Customer Favorite",
    description: "A refreshing drink to accompany your meal.",
    imageUrl: "images/samplebeverage.jpg"  
  }
];  


const productGrid = document.getElementById("productGrid");

function renderProducts() {
  productGrid.innerHTML = renderProducts.map(productCard).join("");   

}
renderProducts();