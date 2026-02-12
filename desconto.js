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
