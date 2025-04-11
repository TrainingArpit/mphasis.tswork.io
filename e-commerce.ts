
interface Category {
    id: number;
    name: string;
    }
    interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    }
    class ProductManager {
    private products: Product[] = [];
    addProduct(product: Product): void {
    this.products.push(product);
    }
    getProducts(): Product[] {
    return this.products;
    }
    }
    const electronics: Category = { id: 1, name:
    "Electronics" };
    const phone1: Product = { id: 1, name: "iPhone", price:
    999, category: electronics };
    const phone2: Product = { id: 2, name: "iPhone", price:
        999, category: electronics };
    const phone3: Product = { id: 3, name: "iPhone", price:
            999, category: electronics };
    const productManager = new ProductManager();
    productManager.addProduct(phone1);
    productManager.addProduct(phone2);
    productManager.addProduct(phone3);
    console.log(productManager.getProducts());
    