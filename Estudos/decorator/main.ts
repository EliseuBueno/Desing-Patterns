//Padrão utilizado quando é preciso adicionar funcionalidades em objetos sem quebrar ou alterar o código existente
//Quando desejar usar composição ao invés de herança
//Quando perceber que poderá ocorrer uma explosão de subclasses em determinada extrutura
//É possível decorar um objeto já decorado

//import { ProductDecorator } from "./product/product-decorator";
import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt(); //retorna o produto
const TShirtWithStamp = new ProductStampDecorator(tShirt); //retorna o produto decorator com estampa
//const TShirtStampFrontAndBack = new ProductStampDecorator(TShirtWithStamp);
const TShirtCustomization = new ProductCustomizationDecorator(tShirt); //retorna o produto decorator customizado

console.log(tShirt.getName(), tShirt.getPrice()); //visualiza o nome e o preço do produto
console.log(TShirtWithStamp.getName(), TShirtWithStamp.getPrice()); //visualiza o nome e preço do produto decorado com estampa
//console.log(TShirtStampFrontAndBack.getName(), TShirtStampFrontAndBack.getPrice());
console.log(TShirtCustomization.getName(), TShirtCustomization.getPrice()); //visualiza o nome e o preço do produto decorado com uma customização
