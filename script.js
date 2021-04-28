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

  const removeItem = () => {
    const cartTable = document.querySelector("table");
    // const rmvBtn = document.querySelectorAll("#remove_item");

    cartTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-trash")) {
        const tr = e.target.parentElement.parentElement.parentElement;
        const table = tr.parentElement;
        table.removeChild(tr);
      }
    });
  };
  removeItem();

  const addItem = () => {
    const shop = document.querySelector("#shop");
    shop.addEventListener("click", (e) => {
      if (e.target.classList.contains("add_cart")) {
        console.log("clicked!!!");
      }
    });
  };
};

init();
