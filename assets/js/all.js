"use strict";

var uuid = "21acf264-850e-4f92-95d0-23bf823dd286";
var apiPath = "https://course-ec-api.hexschool.io/";
var obj = {
  data: {
    products: []
  },
  getData: function getData() {
    var vm = this;
    var api = "".concat(apiPath, "api/").concat(uuid, "/ec/products");
    axios.get(api).then(function (res) {
      console.log(res);
      vm.data.products = res.data.data;
      vm.renderProducts();
    })["catch"](function (err) {
      console.log("接受失敗");
    });
  },
  renderProducts: function renderProducts() {
    var vm = this;
    var productsList = document.querySelector(".products_list");
    var products = vm.data.products;
    var list = "";
    products.forEach(function (product) {
      list = list + "<li class=\"product card\">\n          <div class=\"card-img-top product_top\">\n            <img src=\"".concat(product.imageUrl[0], "\" alt=\"Card image cap\">\n            <a href=\"#\" class=\"more_info font-weight-bold\">\u770B\u66F4\u591A\u5167\u5BB9</a>\n          </div>\n          <div class=\"product_body card-body\">\n            <h4 class=\"card-title text-dark font-weight-bold\">").concat(product.title, "</h4>\n            <p class=\"card-text\">").concat(product.content, "</p>\n            <div class=\"d-flex align-items-center justify-content-between\">\n              <span class=\"price fn_en text-secondary\">").concat(product.price, "</span>\n              <a href=\"#\" class=\"add_cart\">\n                <span class=\"material-icons\">add_shopping_cart</span>\n              </a>\n            </div>\n          </div>\n        </li>");
    });
    productsList.innerHTML = list;
  }
};
obj.getData();
//# sourceMappingURL=all.js.map
