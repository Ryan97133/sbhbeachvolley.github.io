// CONSTANTE

const topButton = document.getElementById("btn-top");
const body = document.querySelector("body");
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

// SOMMAIRE

const Som_1a = document.getElementById("Som_1a");

const Som_2a = document.getElementById("Som_2a");

const Som_3a = document.getElementById("Som_3a");

const Som_4a = document.getElementById("Som_4a");

const Som_5a = document.getElementById("Som_5a");

const Som_6a = document.getElementById("Som_6a");

// BTN TOP SCROLL TOP
window.addEventListener("scroll", () => {
  if (window.scrollY > 65) {
    topButton.style.right = "30px";
  } else {
    topButton.style.right = "-50px";
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
    btnNav1.style.color = "black";
  }
});
btnNav1.addEventListener("mouseout", (e) => {
  if ((e.target = btnNav1)) {
    btnNav1.style.color = "white";
  }
});
menuItem1.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem1)) {
    menuItem1.style.display = "block";
    menuItem1.style.zIndex = "1";
    btnNav1.style.background = "white";
    btnNav1.style.color = "black";
  }
});
menuItem1.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem1)) {
    menuItem1.style.display = "none";
    btnNav1.style.background = "none";
    btnNav1.style.color = "white";
  }
});
// NAV MENU 2
btnNav2.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav2)) {
    menuItem2.style.display = "block";
    menuItem2.style.zIndex = "1";
    btnNav2.style.color = "black";
  }
});
btnNav2.addEventListener("mouseout", (e) => {
  if ((e.target = btnNav2)) {
    btnNav2.style.color = "white";
  }
});
menuItem2.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem2)) {
    menuItem2.style.display = "block";
    menuItem2.style.zIndex = "1";
    btnNav2.style.background = "white";
    btnNav2.style.color = "black";
  }
});
menuItem2.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem2)) {
    menuItem2.style.display = "none";
    btnNav2.style.background = "none";
    btnNav2.style.color = "white";
  }
});
// NAV MENU 3
btnNav3.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav3)) {
    menuItem3.style.display = "block";
    menuItem3.style.zIndex = "1";
    btnNav3.style.color = "black";
  }
});
btnNav3.addEventListener("mouseout", (e) => {
  if ((e.target = btnNav3)) {
    btnNav3.style.color = "white";
  }
});
menuItem3.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem3)) {
    menuItem3.style.display = "block";
    menuItem3.style.zIndex = "1";
    btnNav3.style.background = "white";
    btnNav3.style.color = "black";
  }
});
menuItem3.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem3)) {
    menuItem3.style.display = "none";
    btnNav3.style.background = "none";
    btnNav3.style.color = "white";
  }
});
// NAV MENU 4
btnNav4.addEventListener("mouseenter", (e) => {
  if ((e.target = btnNav4)) {
    menuItem4.style.display = "block";
    menuItem4.style.zIndex = "1";
    btnNav4.style.color = "black";
  }
});
btnNav4.addEventListener("mouseout", (e) => {
  if ((e.target = btnNav4)) {
    btnNav4.style.color = "white";
  }
});
menuItem4.addEventListener("mouseover", (e) => {
  if ((e.target = menuItem4)) {
    menuItem4.style.display = "block";
    menuItem4.style.zIndex = "1";
    btnNav4.style.background = "white";
    btnNav4.style.color = "black";
  }
});
menuItem4.addEventListener("mouseout", (e) => {
  if ((e.target = menuItem4)) {
    menuItem4.style.display = "none";
    btnNav4.style.background = "none";
    btnNav4.style.color = "white";
  }
});

// SOMMAIRE EVENT

// Sommaire 1
window.addEventListener("mouseover", (e) => {
  if (e.pageY < 800) {
    Som_1a.style.color = "white)";
  } else if (e.pageY > 800) {
    Som_1a.style.color = "black";
  }
});
