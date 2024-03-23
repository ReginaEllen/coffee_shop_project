import { fetchProducts } from "./productHelpers";
import productImgPath from "../images/FEND_Coffee_Costa-Rica 1.png";
import { getProductId } from "./productHelpers";
import { addToCart } from "./cart";

const product = async () => {
  const productData = await fetchProducts();
  const productId = getProductId();

  const product = productData.find(
    (singleProduct) => singleProduct.id === parseInt(productId)
  );

  const productHtml = `
  
      <div class="coffee-details">
        
        <div class="product-details">
          <img src="${productImgPath}" alt="product image">
        </div>

        <div class="desktop">

            <div class="information">
              <h3>${product.productName}</h3>
              <p class="price">${product.price/100}€</p>
              <p class="product-features">${product.features}</p>
            </div>

            <div id="icons">

              <div>
                <img id="machine" src="../images/coffee_machine.svg" alt="Icon Kaffeemaschine">
                <p>zum Filtern gemahlen</p>
              </div>

              <div>
                <img id="beans" src="../images/Icon Kaffee Bohnen.svg" alt="Icon Kaffeebohnen">
                <p>ganze Bohnen</p>
              </div>

              <div>
                <img id="press" src="../images/Icon French Press.svg" alt="Icon French Press">
                <p>für French Press</p>
              </div>

            </div>

            <div class="select-container">

              <form class="product-form">
                <select class="select-box" id="dropdown">
                    <option id="select_label" value="">Wieviel Kaffee brauchst du?</option>
                    <option value="delivery">250g</option>
                    <option value="product">500g</option>
                    <option value="sale">1000g</option>
                </select>

                <img class="custom-arrow" id="custom-arrow-up" src="../images/Button hell_1.png" alt="dropdown-button">
                <img class="custom-arrow" id="custom-arrow-down" src="../images/Button hell.png" alt="dropdown-button">

                <div>
                <button data-id="${product.id}" class="button-dark" "add-to-cart-button">In den Warenkorb</button>
                  <input data-id="${product.id}" class="button-dark" type="submit" value="In den Warenkorb">
                </div>

              </form>
            </div>
          </div>
        </div>

        <div class="product-description">
          <h3>Beschreibung</h3>
          <p>${product.description}</p>
        </div>

      </div>
      
  `;

  const productContainer = document.querySelector(".product-container");
  
  productContainer.innerHTML = productHtml;
  const addToCartButton = document.querySelector(".add-to-cart-button");


  addToCartButton.addEventListener("click", addToCart);
};

product();