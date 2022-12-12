let first = document.querySelector(".first-item");
let clone = first.cloneNode(true);
document.querySelector(".slider-track").appendChild(clone);

let position = 0;
let dotPosition = 0;
const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".slide-dot");
const itemsCount = document.querySelectorAll(".slider-item").length;
const itemWidth = document.querySelector(".slider-item").offsetWidth;
const prev = document.querySelector(".button-prev");
const next = document.querySelector(".button-next");
let isAnimation = false;

next.addEventListener("click", itemNext);
prev.addEventListener("click", itemPrev);

function itemNext() {
  if (isAnimation) return false;

  if (position == (1 - itemsCount) * itemWidth) {
    position = -itemWidth;
  } else {
    position -= itemWidth;
  }

  dots[dotPosition].classList.remove("active");
  if (dotPosition == dots.length - 1) {
    dotPosition = 0;
  } else {
    dotPosition++;
  }
  dots[dotPosition].classList.add("active");

  setPosition(position + itemWidth, position);
}

function itemPrev() {
  if (isAnimation) return false;

  if (position == 0) {
    position = (2 - itemsCount) * itemWidth;
  } else {
    position += itemWidth;
  }

  dots[dotPosition].classList.remove("active");
  if (dotPosition == 0) {
    dotPosition = dots.length - 1;
  } else {
    dotPosition--;
  }
  dots[dotPosition].classList.add("active");

  setPosition(position - itemWidth, position);
}

function slideDotCurr(x) {
  if (isAnimation) return false;

  if (x == 0 && position == -1 * (itemsCount - 1) * itemWidth) {
    x += 1;
  }

  dots[dotPosition].classList.remove("active");
  dotPosition = x;
  dots[dotPosition].classList.add("active");

  setPosition(position, -500 * x);
  position = -500 * x;
}

const setPosition = (startPosition, endPosition) => {
  isAnimation = true;
  let fps = 50;
  let time = 1000;
  let steps = time / (1000 / fps);
  let posintime = (endPosition - startPosition) / steps;

  const timer = setInterval(function () {
    startPosition += posintime;
    track.style.left = startPosition + "px";
    steps--;

    if (steps <= 0) {
      clearInterval(timer);
      isAnimation = false;
    }
  }, 1000 / fps);
};