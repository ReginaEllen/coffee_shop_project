import myFunction, { multiply } from "./myModule";
import { renderCart } from "./cart";

myFunction();

const result = multiply(2, 5);

console.log(result);

// mein Code //


var burgermenu = document.getElementById("open"); 

burgermenu.addEventListener("click", function() {
    var overlay = document.getElementById("overlay");     
    overlay.style.display = "block"
});

var close_button = document.getElementById("close-button");

close_button.addEventListener("click", function() {
    var overlay = document.getElementById("overlay"); 
    overlay.style.display = "none"
});


const openCartButton = document.querySelector(".open-cart-button");
const closeCartButton = document.querySelector(".close-cart-button");
const cart = document.querySelector(".cart");
openCartButton.addEventListener("click", () => {
  cart.classList.toggle("open");
});

closeCartButton.addEventListener("click", () => {
  cart.classList.toggle("open");
});

renderCart();


