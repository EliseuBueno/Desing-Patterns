//decora um produto com estampa

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStampDecorator = void 0;
const product_decorator_1 = require("./product-decorator");
class ProductStampDecorator extends product_decorator_1.ProductDecorator {
    getName() {
        return this.product.getName() + ' (Estampada)'; //retorna o nome do produto + o texto (Estampa)
    }
    getPrice() {
        return this.product.getPrice() + 10; //retorna o preço do produto + 10
    }
}
exports.ProductStampDecorator = ProductStampDecorator;
//# sourceMappingURL=product-stamp-decorator.js.map