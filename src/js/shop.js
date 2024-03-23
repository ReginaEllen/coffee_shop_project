import productImgPath from "../images/FEND_Coffee_Costa-Rica 1.png";
import { fetchProducts } from "./productHelpers";

const buildProductHtml = async () => {
  const productData = await fetchProducts();
  
  return productData.map(
    (product) => `
      <a href="product.html?id=${product.id}" class="product">
        <div class="product-box">
          <img src="${productImgPath}" alt="product image">
        </div>
        <div class="product-name">
        ${product.productName}
        </div>
        <div class="product-price">
          ${product.price / 100}€
        </div>
        <div class="product-infos">
          <img id="beans" src="../images/Icon Kaffee Bohnen.svg" alt="Icon Kaffeebohnen">
          <img id="press" src="../images/Icon French Press.svg" alt="Icon French Press">
          <img id="scoop" src="../images/Icon Kaffee Schaufel.svg" alt="Icon Kaffeeschaufel">
        </div>
      </a>
  `).join("");
}

const shop = async () => {
  const productHtml = await buildProductHtml();
  
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = productHtml;
}

shop();