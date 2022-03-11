//Padr�o utilizado quando � preciso adicionar funcionalidades em objetos sem quebrar ou alterar o c�digo existente
//Quando desejar usar composi��o ao inv�s de heran�a
//Quando perceber que poder� ocorrer uma explos�o de subclasses em determinada extrutura
//� poss�vel decorar um objeto j� decorado

//import { ProductDecorator } from "./product/product-decorator";
import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt(); //retorna o produto
const TShirtWithStamp = new ProductStampDecorator(tShirt); //retorna o produto decorator com estampa
//const TShirtStampFrontAndBack = new ProductStampDecorator(TShirtWithStamp);
const TShirtCustomization = new ProductCustomizationDecorator(tShirt); //retorna o produto decorator customizado

console.log(tShirt.getName(), tShirt.getPrice()); //visualiza o nome e o pre�o do produto
console.log(TShirtWithStamp.getName(), TShirtWithStamp.getPrice()); //visualiza o nome e pre�o do produto decorado com estampa
//console.log(TShirtStampFrontAndBack.getName(), TShirtStampFrontAndBack.getPrice());
console.log(TShirtCustomization.getName(), TShirtCustomization.getPrice()); //visualiza o nome e o pre�o do produto decorado com uma customiza��o
