console.log = mylog;
window.logs = [];

function mylog(s) {
   if (typeof s === "object") {
      s = JSON.stringify(s, null, 3);
   }
   window.logs.push(s.toString());
   let html = window.logs.map(
      (item) => {
         return `<li>${item}</li>`;
      }
   );
   document.querySelector("#log").innerHTML = html.join("");
};

console.log(document.documentElement.clientWidth + ' px');

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 16,
   slidesPerView: 1,

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false
   },
   breakpoints:{
      600: {
         slidesPerView: 2,
         spaceBetween: 24
      },
      911:{
         slidesPerView: 3
      }
   }
});

document.getElementById("menu-toggle").onclick = () => {
   document.querySelector("nav").classList.toggle("open");
}

const header = document.querySelector("header");
window.onscroll = () => {
   //console.log(document.documentElement.scrollTop);
   if (document.documentElement.scrollTop > 50
   ){
      header.classList.add("raised");
   }else{
      header.classList.remove("raised");
   }
}

document.querySelector("#search-input").onblur= document.querySelector(".search-btn").onclick = () => {
   document.querySelector(".searchbar").classList.toggle("open");
}
