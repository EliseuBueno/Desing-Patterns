import { User } from "../interfaces/user";


export class MyDatabaseClassic {
   private static _instance: MyDatabaseClassic | null = null; //atributo de sustenta��o da instancia
   private users: User[] = []; //array de usu�rios inicialmente vazio

   private constructor() {}

   //retorna a classe mydatabaseclassic
   static get instance(): MyDatabaseClassic { 
      //verifica se � nulo, se for nulo instancia, sen�o retorna o valor da inst�ncia
      if(MyDatabaseClassic._instance === null) {
         MyDatabaseClassic._instance = new MyDatabaseClassic();
      }

      return MyDatabaseClassic._instance;
   }
   add(user: User): void {
      this.users.push(user);
   }

   remove(index: number): void {
      this.users.splice(index, 1);
   }

   show(): void {
      for (const user of this.users) {
         console.log(user);
      }
   }
}