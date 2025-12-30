
 <script src="js/auth.js"></script>








const productGrid = document.getElementById("productGrid");

function renderProducts() {
  productGrid.innerHTML = renderProducts.map(productCard).join("");   

}
renderProducts();