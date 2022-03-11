"use strict";
//M�todo utilizado quando uma classe precisa ter somente uma inst�ncia dispon�vel em todo o programa
//Utilizado quando percebemos que estamos usando vari�veis globais para manter partes importantes do programa como vari�veis de configura��o que s�o usadas por toda a aplica��o
//Tem acesso controlado � inst�ncia �nica
//� f�cil permitir um n�mero maior de inst�ncias caso mude de id�ia
// Usa lazy instantiation, s� � criado no momento do uso
//Substitui vari�veis globais
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDatabaseClassic = void 0;
//importa e cria (adiciona) os valores na myDatabaseClassic
const my_database_classic_1 = require("./db/my-database-classic");
Object.defineProperty(exports, "MyDatabaseClassic", { enumerable: true, get: function () { return my_database_classic_1.MyDatabaseClassic; } });
const myDatabaseClassic = my_database_classic_1.MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Eliseu', age: 32 });
myDatabaseClassic.add({ name: 'Ma�ra', age: 31 });
myDatabaseClassic.add({ name: 'Hillary', age: 10 });
myDatabaseClassic.show();
//# sourceMappingURL=module_a.js.map