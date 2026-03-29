console.log("SWEVEN website loaded");
<script src="../js/script.js"></script>
const menu = document.querySelector("nav");

menu.addEventListener("click", () => {
  console.log("Navbar clicked");
});
<button id="buyBtn">Buy Now</button>
const button = document.getElementById("buyBtn");

button.addEventListener("click", () => {
  alert("Product added to cart");
});
window.addEventListener("scroll", () => {
    console.log("User is scrolling");
  });