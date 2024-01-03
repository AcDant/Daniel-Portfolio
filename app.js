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

let primario = "#ffd319";
let secundario = "#ff901f";
let terciario = "#f222ff";
let cuaternario = "#ff2975";
let quintinario = "#8c1eff";
let extra1 = "#5268c1";
let extra2 = "#7592e5";

let raisinBlack = "#1b1e25ff";
let verdeOscuro = "#003b00";
let verde = "#008f11";
let verdeClaro = "#00ff41";

const process = document.querySelector("#process");
const punto1 = document.querySelector("#punto1");
const punto2 = document.querySelector("#punto2");
const punto3 = document.querySelector("#punto3");

const tresPuntos = () => {
  punto1.style.color = raisinBlack;
  punto2.style.color = raisinBlack;
  punto3.style.color = raisinBlack;
  setTimeout(() => {
    // punto1.style.color = "#ffbd00ff";
    process.style.color = cuaternario;
    punto1.style.color = cuaternario;
  }, 1000);
  setTimeout(() => {
    // punto2.style.color = "#ffbd00ff";
    punto2.style.color = cuaternario;
  }, 2000);
  setTimeout(() => {
    // punto3.style.color = "#ffbd00ff";
    punto3.style.color = cuaternario;
  }, 3000);
  setTimeout(() => {
    punto1.style.color = raisinBlack;
    punto2.style.color = raisinBlack;
    punto3.style.color = raisinBlack;
  }, 4000);
  setTimeout(() => {
    tresPuntos();
  }, 4500);
};

tresPuntos();
