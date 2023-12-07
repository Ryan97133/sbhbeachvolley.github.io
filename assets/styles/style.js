// CONSTANTE

const topButton = document.getElementById("btn-top");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const btnNav1 = document.getElementById("btn-nav1");
const menuItem1 = document.querySelector(".menu-item1");
const btnNav2 = document.getElementById("btn-nav2");
const menuItem2 = document.querySelector(".menu-item2");
const btnNav3 = document.getElementById("btn-nav3");
const menuItem3 = document.querySelector(".menu-item3");
const btnNav4 = document.getElementById("btn-nav4");
const menuItem4 = document.querySelector(".menu-item4");

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
window.addEventListener("mouseout", (e) => {
  if ((e.target = header)) {
    menuItem1.style.display = "none";
    menuItem2.style.display = "none";
    menuItem3.style.display = "none";
    menuItem4.style.display = "none";
  }
});

// NAV MENU 1
btnNav1.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav1)) {
    menuItem1.style.display = "block";
    menuItem1.style.zIndex = "1";
  }
});
menuItem1.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem1)) {
    menuItem1.style.display = "block";
    menuItem1.style.zIndex = "1";
  }
});
menuItem1.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem1)) {
    menuItem1.style.display = "none";
  }
});
// NAV MENU 2
btnNav2.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav2)) {
    menuItem2.style.display = "block";
    menuItem2.style.zIndex = "1";
  }
});
menuItem2.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem2)) {
    menuItem2.style.display = "block";
    menuItem2.style.zIndex = "1";
  }
});
menuItem2.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem2)) {
    menuItem2.style.display = "none";
  }
});
// NAV MENU 3
btnNav3.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav3)) {
    menuItem3.style.display = "block";
    menuItem3.style.zIndex = "1";
  }
});
menuItem3.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem3)) {
    menuItem3.style.display = "block";
    menuItem3.style.zIndex = "1";
  }
});
menuItem3.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem3)) {
    menuItem3.style.display = "none";
  }
});
// NAV MENU 4
btnNav4.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav4)) {
    menuItem4.style.display = "block";
    menuItem4.style.zIndex = "1";
  }
});
menuItem4.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem4)) {
    menuItem4.style.display = "block";
    menuItem4.style.zIndex = "1";
  }
});
menuItem4.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem4)) {
    menuItem4.style.display = "none";
  }
});
