// <i class="fa-solid fa-chevron-up"></i>
function toggleDiscount() {
  const discountBody = document.getElementById("aplly-discount-body");
  const icon = document.getElementById("toggle-icon");

  if (
    discountBody.style.display === "none" ||
    discountBody.style.display === ""
  ) {
    discountBody.style.display = "block";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    discountBody.style.display = "none";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};

function applyDiscount() {
  const discountCode = document
    .getElementById("discount-code")
    .value.trim()
    .toUpperCase();

  const discountMessageElement = document.getElementById("discount-message");
  const totalPriceElement = document.getElementById("total-price");

  // verifica se o cupom é válido
  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    totalPriceElement.innerText = `Preço total: R$${discountedPrice.toFixed(
      2,
    )}`;

    localStorage.setItem("discount", discountCode);

    discountMessageElement.style.color = "green";

    discountMessageElement.innerText = `Desconto de ${discount * 100}%`;

    document.getElementById("discount-code").value = "";
  } else {
    discountMessageElement.style.color = "red";
    discountMessageElement.innerText = "Cupom inválido";
  }
}

function checkStoreDiscounnt() {
  const storedDiscount = localStorage.getItem("discount");
  const discountMessageElement = document.getElementById("discount-message");

  if (storedDiscount) {
    localStorage.removeItem("discount");
  }

  discountMessageElement.innerText = "";
}

window.onload = checkStoreDiscounnt;
