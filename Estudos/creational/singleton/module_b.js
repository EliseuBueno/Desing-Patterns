"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importa MyDatabaseClassic e modulo a singleton
const my_database_classic_1 = require("./db/my-database-classic");
//executa os valores tanto do m�dulo_b quanto do m�dulo_a
const myDatabaseClassic = my_database_classic_1.MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Delson', age: 55 });
myDatabaseClassic.add({ name: 'Sandra', age: 51 });
myDatabaseClassic.add({ name: 'Lorena', age: 7 });
myDatabaseClassic.show();
//# sourceMappingURL=module_b.js.map