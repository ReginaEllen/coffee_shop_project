import { fetchProducts } from "./productHelpers";
import productImgPath from "../images/FEND_Coffee_Costa-Rica 1.png";

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const addToCart = async (event) => {
  const productId = parseInt(event.target.dataset.id, 10);
  const existingCart = loadCart();
  const existingProductIndex = existingCart.findIndex(cartProduct => cartProduct.productId === productId);
  
  if (existingProductIndex !== -1) {
    // Existing cart, existing product
    existingCart[existingProductIndex].amount++;
  } else {
    // Existing cart, new product
    existingCart.push({ productId, amount: 1 });
  }
  
  saveCart(existingCart);
  renderCart();
};

const removeFromCart = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const productId = parseInt(event.target.dataset.id, 10);
  const existingCart = loadCart();
  const updatedCart = existingCart.filter(cartItem => cartItem.productId !== productId);
  saveCart(updatedCart);
  renderCart();
};

const renderCart = async () => {
  const existingCart = loadCart();
  const productData = await fetchProducts();
  let subTotal = 0;
  
  const cartHtml = existingCart.map(cartItem => {
    const currentProduct = productData.find(product => product.id === cartItem.productId);
    subTotal += currentProduct.price * cartItem.amount;
    return `
      <a href="/product/index.html?id=${currentProduct.id}" class="product">
        <img src="${productImgPath}" alt="product image">
        <div class="product-name">${currentProduct.productName}</div>
        <div>Amount: ${cartItem.amount}</div>
        <div class="product-price">
          ${cartItem.amount} x ${currentProduct.price / 100}€ = ${(currentProduct.price * cartItem.amount) / 100}€
        </div>
        <button class="delete-from-cart-button" data-id="${currentProduct.id}">Delete from Cart</button>
      </a>
    `;
  }).join("");
  
  const total = (subTotal + 500) / 100;
  
  const cartContainer = document.querySelector(".cart-content");
  const subTotalContainer = document.querySelector(".sub-total");
  const totalContainer = document.querySelector(".total");
  
  cartContainer.innerHTML = cartHtml;
  
  document.querySelectorAll(".delete-from-cart-button").forEach(button => {
    button.addEventListener("click", removeFromCart);
  });

  subTotalContainer.innerHTML = `${subTotal / 100}€`;
  totalContainer.innerHTML = `${total}€`;
};

export { addToCart, removeFromCart, renderCart };




 


  

