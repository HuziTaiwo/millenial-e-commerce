const init = () => {
  const productImg = document.querySelectorAll(".product img");
  productImg.forEach((img) => {
    img.addEventListener("mouseenter", (e) => {
      const overlay = e.target.previousElementSibling;
      overlay.classList.add("active");
    });

    img.addEventListener("mouseleave", (e) => {
      const overlay = e.target.previousElementSibling;
      overlay.classList.remove("active");
    });
  });
  const showCart = () => {
    const cartBtn = document.querySelector(".cart_btn");
    const cartOverlay = document.querySelector(".cart_overlay");
    const cont = document.querySelector("#cont");

    cartBtn.addEventListener("click", showPopup);
    function showPopup() {
      cartOverlay.classList.add("active");
    }

    cont.addEventListener("click", removePopup);

    cartOverlay.addEventListener("click", removePopup);
    function removePopup() {
      cartOverlay.classList.remove("active");
    }
  };
  showCart();
};

init();
