import { fetchProducts } from "./productHelpers";
/*import productImgPath from "../images/FEND_Coffee_Costa-Rica 1.png";*/
import { getProductId } from "./productHelpers";

const product = async () => {
  const productData = await fetchProducts();
  const productId = getProductId();

 /* const product = productData.find(
    (singleProduct) => singleProduct.id === parseInt(productId)
  );*/

  /*const productHtml = `
      <div class=coffee>
        <div class="product">
          <img src="${productImgPath}" alt="product image">
        </div>
        <p>${product.productName}</p>
      
        <p class="price">${product.price / 100}€</p>
        <div class="product-description">
          ${product.description}
        </div>
      </div>
  `;

  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = productHtml;*/
};

product();