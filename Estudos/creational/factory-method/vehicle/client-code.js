//Padrão utilizado quando não se sabe com certeza quais os tipos de objeto o seu código vai usar
//Usado para permitir a extensão de suas factories para a criação de novos objetos
//Usado para desacoplar o código que cria do código que usa as classes
//Usado para dar um gancho às subclasses para permitir que elas decidam a lógica da criação de objetos
//Auxilia para a eliminação de códigos duplicados na criação de objetos 

// import { Car } from "./car";

// const fusca = new Car('Fusca');
// fusca.pickUp('Eliseu'); //Resultado: Fusca esta buscando Eliseu
// fusca.stop(); // Resultado: Fusca Parou

//Implementa mesma lógica anterior porém sem ficar preso à classe concreta
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
const customerNames = ['Eliseu', 'Maï¿½ra', 'Hillary', 'Lorena'];

// Chama veículos aleatórios de forma desacoplada das classes concretas
for (let i = 0; i < 10; i++) {
    const vehicle = (0, random_vehicle_algorithm_1.randomCarAlgorithm)();
    const name = customerNames[(0, random_numbers_1.randomNumbers)(customerNames.length)];
    console.log(car);
    vehicle.pickUp(name);
    vehicle.stop();
    //cria um novo veículo
    const newCar = carFactory.pickUp(name, `CARRO NOVO - ${(0, random_numbers_1.randomNumbers)(100)}`);
    newCar.stop();
    console.log('---');
}
//# sourceMappingURL=client-code.js.map