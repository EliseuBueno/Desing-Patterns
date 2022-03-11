"use strict";
//Padr�o utilizado quando � preciso adicionar funcionalidades em objetos sem quebrar ou alterar o c�digo existente
//Quando desejar usar composi��o ao inv�s de heran�a
//Quando perceber que poder� ocorrer uma explos�o de subclasses em determinada extrutura
//� poss�vel decorar um objeto j� decorado
Object.defineProperty(exports, "__esModule", { value: true });
//import { ProductDecorator } from "./product/product-decorator";
const product_customization_decorator_1 = require("./product/product-customization-decorator");
const product_stamp_decorator_1 = require("./product/product-stamp-decorator");
const t_shirt_1 = require("./product/t-shirt");
const tShirt = new t_shirt_1.TShirt(); //retorna o produto
const TShirtWithStamp = new product_stamp_decorator_1.ProductStampDecorator(tShirt); //retorna o produto decorator com estampa
//const TShirtStampFrontAndBack = new ProductStampDecorator(TShirtWithStamp);
const TShirtCustomization = new product_customization_decorator_1.ProductCustomizationDecorator(tShirt); //retorna o produto decorator customizado
console.log(tShirt.getName(), tShirt.getPrice()); //visualiza o nome e o pre�o do produto
console.log(TShirtWithStamp.getName(), TShirtWithStamp.getPrice()); //visualiza o nome e pre�o do produto decorado com estampa
//console.log(TShirtStampFrontAndBack.getName(), TShirtStampFrontAndBack.getPrice());
console.log(TShirtCustomization.getName(), TShirtCustomization.getPrice()); //visualiza o nome e o pre�o do produto decorado com uma customiza��o
//# sourceMappingURL=main.js.map