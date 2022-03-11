//M�todo utilizado quando uma classe precisa ter somente uma inst�ncia dispon�vel em todo o programa
//Utilizado quando percebemos que estamos usando vari�veis globais para manter partes importantes do programa como vari�veis de configura��o que s�o usadas por toda a aplica��o
//Tem acesso controlado � inst�ncia �nica
//� f�cil permitir um n�mero maior de inst�ncias caso mude de id�ia
// Usa lazy instantiation, s� � criado no momento do uso
//Substitui vari�veis globais

//importa e cria (adiciona) os valores na myDatabaseClassic
import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Eliseu', age: 32 });
myDatabaseClassic.add({ name: 'Ma�ra', age: 31 });
myDatabaseClassic.add({ name: 'Hillary', age: 10 });
myDatabaseClassic.show();

//exporta MyDatabaseClassic j� instanciado
export { MyDatabaseClassic };