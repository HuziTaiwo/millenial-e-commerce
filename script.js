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
    const closeBtn = document.querySelector(".fa-times");
    const cont = document.querySelector("#cont");

    cartBtn.addEventListener("click", showPopup);
    function showPopup() {
      cartOverlay.classList.add("active");
    }

    cont.addEventListener("click", removePopup);

    closeBtn.addEventListener("click", removePopup);
    function removePopup(e) {
      if (e.target.classList.contains("cart_overlay"));
      cartOverlay.classList.remove("active");
    }
  };
  showCart();

  const addItem = () => {
    const shop = document.querySelector("#shop");
    shop.addEventListener("click", (e) => {
      if (e.target.classList.contains("add_cart")) {
        const items = {};
        let counter = 0;
        items.counter = counter;
        let name = e.target.previousElementSibling.textContent;
        items.name = name;
        let price =
          e.target.previousElementSibling.previousElementSibling.children[0]
            .children[1].textContent;
        fPrice = price.slice(1).trim();
        items.price = fPrice;

        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${2}</td>
        <td>${name}</td>
        <td>#<span class="item_price">${fPrice}</span></td>
        <td>
          <button class="fas fa-minus"></button
          ><span class="counter">1</span
          ><button class="fas fa-plus"></button>
        </td>
        <td>
          <button class="remove_item">
            <i class="fas fa-trash"></i>
          </button>
        </td>`;

        const table = document.querySelector("table");
        table.appendChild(tableRow);

        showTotal();
      }
    });
  };
  addItem();

  const removeItem = () => {
    const cartTable = document.querySelector("table");

    cartTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-minus")) {
        let itemDec = e.target.nextElementSibling;
        if (itemDec.textContent <= 1) {
          alert(
            "You canot have less then 1 item, if you wish to remove the item, kindly click on the delete icon"
          );
        } else {
          let price =
            itemDec.parentElement.previousElementSibling.children[0]
              .textContent;
          e.target.parentElement.previousElementSibling.children[0].textContent =
            price / parseInt(itemDec.textContent);
          itemDec.textContent -= 1;
        }
      }

      if (e.target.classList.contains("fa-plus")) {
        let itemInc = e.target.previousElementSibling;
        let price =
          itemInc.parentElement.previousElementSibling.children[0].textContent;
        console.log(price);
        itemInc.textContent++;
        e.target.parentElement.previousElementSibling.children[0].textContent =
          price * parseInt(itemInc.textContent);
      }

      if (e.target.classList.contains("fa-trash")) {
        const tr = e.target.parentElement.parentElement.parentElement;
        const table = tr.parentElement;
        table.removeChild(tr);
      }
    });
  };
  removeItem();

  function showTotal() {
    const total = [];
    const itemPrices = document.querySelectorAll(".item_price");

    itemPrices.forEach((item) => {
      total.push(parseInt(item.textContent));
      const totalPrice = total.reduce((total, item) => {
        total += item;
        return total;
      });

      document.querySelector(".total_price").textContent = totalPrice;
      document.querySelector(".item_count").textContent = total.length;
    });
  }
};

init();
