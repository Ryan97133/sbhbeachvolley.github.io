// CONSTANTE

const topButton = document.getElementById("btn-top");

const nav = document.querySelector("nav");

// BTN TOP SCROLL TOP
window.addEventListener("scroll", () => {
  // Test fonction------------------------------------------
  // console.log(document.scrollY);
  //   -------------------------------------------------------
  if (window.scrollY > 80) {
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
