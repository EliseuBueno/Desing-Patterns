//Método utilizado quando uma classe precisa ter somente uma instância disponível em todo o programa
//Utilizado quando percebemos que estamos usando variáveis globais para manter partes importantes do programa como variáveis de configuração que são usadas por toda a aplicação
//Tem acesso controlado à instância única
//É fácil permitir um número maior de instâncias caso mude de idéia
// Usa lazy instantiation, só é criado no momento do uso
//Substitui variáveis globais

//importa e cria (adiciona) os valores na myDatabaseClassic
import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Eliseu', age: 32 });
myDatabaseClassic.add({ name: 'Maíra', age: 31 });
myDatabaseClassic.add({ name: 'Hillary', age: 10 });
myDatabaseClassic.show();

//exporta MyDatabaseClassic já instanciado
export { MyDatabaseClassic };