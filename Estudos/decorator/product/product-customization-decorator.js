"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCustomizationDecorator = void 0;
const product_decorator_1 = require("./product-decorator");
class ProductCustomizationDecorator extends product_decorator_1.ProductDecorator {
    getName() {
        return this.product.getName() + ' (Customizada)';
    }
    getPrice() {
        return this.product.getPrice() + 50;
    }
}
exports.ProductCustomizationDecorator = ProductCustomizationDecorator;
//# sourceMappingURL=product-customization-decorator.js.map