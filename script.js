const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const lightboxBtn = document.querySelector(".lightbox-btn");

const mobileNavBtn = document.querySelector(".menu-logo");
const mobileNavEl = document.querySelector(".nav-links");
const minusBtn = document.querySelector(".minus-button");
const addBtn = document.querySelector(".add-button");
const cartBtn = document.querySelector(".cart-button");
const cartSection = document.querySelector(".cart-functionality");
const cartDisplay = document.querySelector(".cart-display");
const cartAmount = cartSection.querySelector("input");
const cartContainer = document.querySelector(".cart-display-content");
const cartIcon = document.querySelector(".cart-icon");
const deleteIcon = document.querySelector(".icon-delete");

// slider
// const slides = document.querySelectorAll(".slide");
// const bntLeft = document.querySelector(".prev");
// const bntRight = document.querySelector(".next");
// const thumbnailContainer = document.querySelector(".image-thumbnails");
// const thumbnails = document.querySelectorAll(".thumbnail");

console.log(mobileNavBtn);
console.log(mobileNavEl);
console.log(minusBtn);
console.log(addBtn);
console.log(cartSection);
console.log(cartAmount);
console.log(cartIcon);

// let index = 0;

// console.log(thumbnails);
// console.log(slides);
// console.log(bntRight);
// console.log(bntLeft);

class App {
  amount;

  //variable to track(sync) current slide of both lightbox and normal carousel
  index = 0;

  constructor() {
    console.log(window.innerWidth);
    mobileNavBtn.addEventListener("click", this.mobileNavHandler);
    cartSection.addEventListener("click", this.cartSubmitHandler.bind(this));
  }

  //toggle mobile navigation
  mobileNavHandler() {
    const visibility = mobileNavEl.getAttribute("data-visible");
    console.log(visibility);

    if (visibility == "false") {
      console.log("hi");
      mobileNavEl.setAttribute("data-visible", true);
    } else {
      mobileNavEl.setAttribute("data-visible", false);
    }
  }

  //handle submission of purchases to card
  cartSubmitHandler(e) {
    e.preventDefault();
    // console.log(e.target);

    //increase quantity
    if (e.target.classList.contains("add-button")) {
      cartAmount.value >= 0 ? cartAmount.value++ : (cartAmount.value = 0);
    }

    //decrease quantity
    if (e.target.classList.contains("minus-button")) {
      cartAmount.value > 0 ? cartAmount.value-- : (cartAmount.value = 0);
    }

    //add to cart
    if (e.target.closest(".cart-button")) {
      if (cartAmount.value > 0) {
        this.amount = Number(cartAmount.value);
        this.addToCart();
        cartAmount.value = 0;
      } else {
        window.alert("invalid quantity");
      }
    }
  }

  addToCart() {
    let item = `
    <div class="cart-items ">
      <div class="cart-item">
        <img src="./images/image-product-1-thumbnail.jpg" alt="" />
        <div class="cart-item-desc">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 * ${this.amount} <b>$${125.0 * this.amount}</b></p>
        </div>
        <img src="./images/icon-delete.svg" alt="" class="icon-delete"/>
      </div>
      <div class="cart-items-button">
        <button class='checkout-button'>checkout</button>
      </div>
    </div>
        `;

    let countEl = `
    <div class="cart-count">${this.amount}</div>
    `;
    console.log("cart");
    cartContainer.innerHTML = "";
    cartContainer.insertAdjacentHTML("afterbegin", item);

    if (cartIcon.nextElementSibling) {
      cartIcon.nextElementSibling.remove();
      cartIcon.parentElement.insertAdjacentHTML("beforeend", countEl);
    } else {
      console.log("doesnt exist");
      cartIcon.parentElement.insertAdjacentHTML("beforeend", countEl);
    }
  }
}

const app = new App();
app.slider(document.querySelectorAll(".carousel-wrapper"));
console.log(app);
