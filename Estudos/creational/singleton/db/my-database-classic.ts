import { User } from "../interfaces/user";


export class MyDatabaseClassic {
   private static _instance: MyDatabaseClassic | null = null; //atributo de sustentação da instancia
   private users: User[] = []; //array de usuários inicialmente vazio

   private constructor() {}

   //retorna a classe mydatabaseclassic
   static get instance(): MyDatabaseClassic { 
      //verifica se é nulo, se for nulo instancia, senão retorna o valor da instância
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