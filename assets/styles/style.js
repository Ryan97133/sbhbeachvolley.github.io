// CONSTANTE

const topButton = document.getElementById("btn-top");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const btnNav1 = document.getElementById("btn-nav1");
const menuItem1 = document.querySelector(".menu-item1");

// BTN TOP SCROLL TOP
window.addEventListener("scroll", () => {
  // Test fonction--------------------------------------------
  console.log(document.scrollY);
  //   -------------------------------------------------------
  if (window.scrollY > 65) {
    topButton.style.right = "30px";
  } else {
    topButton.style.right = "-50px";
  }
});

// NAV SCROLL DOWN

window.addEventListener("scroll", () => {
  if (window.scrollY > 65) {
    nav.style.top = "0";
    nav.style.position = "sticky";
    nav.style.zIndex = "1";
  } else if (window.scrollY < 65) {
    nav.style.top = "-500px";
  }
});

//NAV MENU-----------------------------------------------------

// btnNav1.addEventListener("mousemove", (e) => {
//   if (e.target === btnNav1 || (e.target = menuItem1)) {
//     menuItem1.style.display = "block";
//     menuItem1.style.zIndex = "1";
//   } else {
//     menuItem1.style.display = "none";
//   }
// });

btnNav1.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav1)) {
    menuItem1.style.display = "block";
    menuItem1.style.zIndex = "1";
    console.log(btnNav1);
  }
});
menuItem1.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem1)) {
    menuItem1.style.display = "block";
    menuItem1.style.zIndex = "1";
    console.log(menuItem1);
  }
});
menuItem1.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem1)) {
    menuItem1.style.display = "none";
    console.log(menuItem1);
  }
});

// header.addEventListener("mousemove", (e) => {
//   if (
//     e.pageY > 230 ||
//     (e.pageX < 130 && e.pageY < 230) ||
//     (e.pageY < 230 && e.pageX > 365)
//   ) {
//     menuItem1.style.display = "none";
//     console.log(btnNav1);
//   } else {
//     menuItem1.style.display = "block";
//     menuItem1.style.zIndex = "1";
//   }
// });
