var header = document.querySelector(".header");
var isActive = function () {
  header.classList.toggle("is-active");
};
header.addEventListener("click", isActive);

var products = document.querySelectorAll(".product");

products.forEach(function (product) {
  var info = product.querySelector(".info");
  product.addEventListener("click", function () {
    info.classList.toggle("is-active");
  });
});

products.forEach(function (product) {
  product.addEventListener("click", function () {
    product.classList.toggle("is-active");
  });
});
