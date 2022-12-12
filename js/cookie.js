let cookie;
let btn;

const findElements = () => {
  cookie = document.querySelector(".cookie");
  btn = cookie.querySelector(".cookie__apply");
};
const subscribe = () => {
  btn.addEventListener("click", onClick);
};
const hideContainer = () => {
  cookie.classList.remove("cookie--active");
};
const onClick = (event) => {
  event.preventDefault();
  hideContainer();
};

findElements();
subscribe();

let start = Date.now();

let timer = setInterval(function () {
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer);
    return;
  }
  draw(timePassed);
}, 20);

function draw(timePassed) {
  cookie.style.bottom = timePassed / 10 - 199 + "px";
}