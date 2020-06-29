const uuid = "21acf264-850e-4f92-95d0-23bf823dd286";
const apiPath = "https://course-ec-api.hexschool.io/";

let obj = {
  data: {
    products: [],
  },
  getData: function () {
    const vm = this;
    const api = `${apiPath}api/${uuid}/ec/products`;

    axios
      .get(api)
      .then(function (res) {
        console.log(res);
        vm.data.products = res.data.data;
        vm.renderProducts();
      })
      .catch(function (err) {
        console.log("接受失敗");
      });
  },
  renderProducts: function () {
    const vm = this;
    const productsList = document.querySelector(".products_list");
    const products = vm.data.products;

    let list = "";

    products.forEach(function (product) {
      list =
        list +
        `<li class="product card">
          <div class="card-img-top product_top">
            <img src="${ product.imageUrl[0] }" alt="Card image cap">
            <a href="#" class="more_info font-weight-bold">看更多內容</a>
          </div>
          <div class="product_body card-body">
            <h4 class="card-title text-dark font-weight-bold">${ product.title }</h4>
            <p class="card-text">${ product.content }</p>
            <div class="d-flex align-items-center justify-content-between">
              <span class="price fn_en text-secondary">${ product.price }</span>
              <a href="#" class="add_cart">
                <span class="material-icons">add_shopping_cart</span>
              </a>
            </div>
          </div>
        </li>`;
    });

    productsList.innerHTML = list;
  },
};

obj.getData();


