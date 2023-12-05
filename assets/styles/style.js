// CONSTANTE

const topButton = document.getElementById("btn-top");

// BTN TOP SCROLL TOP
window.addEventListener("scroll", () => {
  // Test fonction------------------------------------------
  console.log(document.scrollY);
  //   -------------------------------------------------------
  if (window.scrollY > 50) {
    topButton.style.right = "30px";
  } else {
    topButton.style.right = "-50px";
  }
});
