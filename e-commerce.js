var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductManager.prototype.getProducts = function () {
        return this.products;
    };
    return ProductManager;
}());
var electronics = { id: 1, name: "Electronics" };
var phone1 = { id: 1, name: "iPhone", price: 999, category: electronics };
var phone2 = { id: 2, name: "iPhone", price: 999, category: electronics };
var phone3 = { id: 3, name: "iPhone", price: 999, category: electronics };
var productManager = new ProductManager();
productManager.addProduct(phone1);
productManager.addProduct(phone2);
productManager.addProduct(phone3);
console.log(productManager.getProducts());
