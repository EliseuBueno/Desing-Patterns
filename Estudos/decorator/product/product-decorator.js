"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDecorator = void 0;
//Classe decoradora que implementa o ProductProtocol
class ProductDecorator {
    constructor(product) {
        this.product = product;
    } //construtor do produto criado no protocolo de interface
    getName() {
        return this.product.getName(); //repassa o getName para o Product 
    }
    getPrice() {
        return this.product.getPrice();
    }
}
exports.ProductDecorator = ProductDecorator;
//# sourceMappingURL=product-decorator.js.map