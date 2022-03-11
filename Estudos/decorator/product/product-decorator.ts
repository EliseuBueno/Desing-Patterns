import { ProductProtocol } from './product-protocol';

//Classe decoradora que implementa o ProductProtocol
export class ProductDecorator implements ProductProtocol{
   constructor(protected product: ProductProtocol) {} //construtor do produto criado no protocolo de interface
   
   getName(): string{
      return this.product.getName(); //repassa o getName para o Product 
   }

   getPrice(): number{
      return this.product.getPrice();
   }

}