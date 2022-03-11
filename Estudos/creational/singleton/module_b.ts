//importa MyDatabaseClassic e modulo a singleton
import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseClassic as  myDatabaseClassicFromModule } from './module_a';

//executa os valores tanto do m�dulo_b quanto do m�dulo_a
const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Delson', age: 55 });
myDatabaseClassic.add({ name: 'Sandra', age: 51 });
myDatabaseClassic.add({ name: 'Lorena', age: 7 });
myDatabaseClassic.show();