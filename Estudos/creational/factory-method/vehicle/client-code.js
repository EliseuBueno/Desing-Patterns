//Padr�o utilizado quando n�o se sabe com certeza quais os tipos de objeto o seu c�digo vai usar
//Usado para permitir a extens�o de suas factories para a cria��o de novos objetos
//Usado para desacoplar o c�digo que cria do c�digo que usa as classes
//Usado para dar um gancho �s subclasses para permitir que elas decidam a l�gica da cria��o de objetos
//Auxilia para a elimina��o de c�digos duplicados na cria��o de objetos 

// import { Car } from "./car";

// const fusca = new Car('Fusca');
// fusca.pickUp('Eliseu'); //Resultado: Fusca esta buscando Eliseu
// fusca.stop(); // Resultado: Fusca Parou

//Implementa mesma l�gica anterior por�m sem ficar preso � classe concreta
// import { CarFactory } from "../factories/car-factory";

// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Eliseu'); //Resultado: Fusca esta buscando Eliseu
// fusca.stop(); // Resultado: Fusca Parou

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_factory_1 = require("../factories/car-factory");
const random_vehicle_algorithm_1 = require("../main/random-vehicle-algorithm");
const random_numbers_1 = require("../utils/random-numbers");
const { Car } = require("./car");
const carFactory = new car_factory_1.CarFactory();
const customerNames = ['Eliseu', 'Ma�ra', 'Hillary', 'Lorena'];

// Chama ve�culos aleat�rios de forma desacoplada das classes concretas
for (let i = 0; i < 10; i++) {
    const vehicle = (0, random_vehicle_algorithm_1.randomCarAlgorithm)();
    const name = customerNames[(0, random_numbers_1.randomNumbers)(customerNames.length)];
    console.log(car);
    vehicle.pickUp(name);
    vehicle.stop();
    //cria um novo ve�culo
    const newCar = carFactory.pickUp(name, `CARRO NOVO - ${(0, random_numbers_1.randomNumbers)(100)}`);
    newCar.stop();
    console.log('---');
}
//# sourceMappingURL=client-code.js.map