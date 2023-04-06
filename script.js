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
}

const app = new App();
app.slider(document.querySelectorAll(".carousel-wrapper"));
console.log(app);
