// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

// const skills = document.querySelector(".skills");
// skills.style.flex;
// skills.style.justifyContent = 'space-around'

let verdeOscuro = "#003b00";
let verde = "#008f11";
let verdeClaro = "#00ff41";

const process = document.querySelector("#process");
const punto1 = document.querySelector("#punto1");
const punto2 = document.querySelector("#punto2");
const punto3 = document.querySelector("#punto3");

const tresPuntos = () => {
  setTimeout(() => {
    // punto1.style.color = "#ffbd00ff";
    process.style.color = verdeClaro;
    punto1.style.color = verdeClaro;
  }, 1000);
  setTimeout(() => {
    // punto2.style.color = "#ffbd00ff";
    punto2.style.color = verdeClaro;
  }, 2000);
  setTimeout(() => {
    // punto3.style.color = "#ffbd00ff";
    punto3.style.color = verdeClaro;
  }, 3000);
  setTimeout(() => {
    punto1.style.color = "#1b1e25ff";
    punto2.style.color = "#1b1e25ff";
    punto3.style.color = "#1b1e25ff";
  }, 4000);
  setTimeout(() => {
    tresPuntos();
  }, 4500);
};

tresPuntos();
