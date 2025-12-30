// cart storage helper function

 const CART_STORAGE_KEY = 'shoppingCart';

 function getCart() {
  const cartJSON = localStorage.getItem(CART_STORAGE_KEY);
  return cartJSON ? JSON.parse(cartJSON) : [];
}

 function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

 function addItemToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart); 
}
 function removeItemFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== itemId);
  saveCart(cart);
}

 function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
}

 function getCartItemCount() {
  const cart = getCart();
  return cart.length;
}

 function getCartTotalPrice() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price, 0);
}
 function updateItemQuantity(itemId, quantity) {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity = quantity;
    saveCart(cart);
  }
}

function isItemInCart(itemId) {
  const cart = getCart();
  return cart.some(item => item.id === itemId);
} 

function requireAuthentication() {
  const userEmail = JSON.parse(localStorage.getItem('oz_user'));
  if (!userEmail) {
    window.location.href = 'login.html';
    return false;   
  }
  return true;
}

const count = getCartItemCount();
if (count > 0) { 
  badge.textContent = count; 
  badge.classList.remove('hidden');   
} else {
   badge.classList.add('hidden');


 }

 const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeOverlayBtn = document.getElementById('closeOverlayBtn');
const cartItemsE1 = document.getElementById('cartItems');
const cartTotalE1 = document.getElementById('cartTotal');
const closeCartBtn = document.getElementById('closeCartBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

cartBtn?.addEventListener('click', openCart);
closeCartBtn?,addEventListener('click', closeCart);
closeOverlayBtn?.addEventListener('click', closeCart);
clearCartBtn?.addEventListener('click', handleClearCart);

function openCart() {
  if (!requireAuthentication()) return;
  renderCartItems();
  cartOverylay.classList.remove('hidden');
  cartDrawer.classList.remove('translate-x-full');  
  renderCartItems();  
}

function closeCart() {
  cartOverlay.classList.add('hidden');
  cartDrawer.classList.add('translate-x-full');  
}



