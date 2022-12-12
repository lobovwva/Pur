const phoneImage = document.querySelector(".phone-turn__image");
const target = document.querySelector(".vision");

const callback = function ([entry]) {
  const text = entry.target;

  if (entry.isIntersecting) {
    text.style.opacity = 0;
    setTimeout(() => {
      phoneImage.style.left = 36 + "%";
    }, 2000);

    setTimeout(() => {
      phoneImage.style.marginTop = -20 + "%";
      phoneImage.style.transform = "rotate(0deg)";
    }, 3000);
  } 
};
const textObserver = new IntersectionObserver(callback, { threshold: 0.5 });
textObserver.observe(target);