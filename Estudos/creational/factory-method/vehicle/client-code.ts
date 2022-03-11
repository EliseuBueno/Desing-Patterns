import { CarFactory } from "../factories/car-factory";
import { randomCarAlgorithm } from "../main/random-vehicle-algorithm";
import { randomNumbers } from "../utils/random-numbers";

const carFactory = new CarFactory();
const customerNames = ['Eliseu', 'Maíra', 'Hillary', 'Lorena'];

for (let i = 0; i < 10; i++) {
   const vehicle = randomCarAlgorithm();
   const name = customerNames[randomNumbers(customerNames.length)];
   console.log(car);
   vehicle.pickUp(name);
   vehicle.stop();
   const newCar = carFactory.pickUp(name, `CARRO NOVO - ${randomNumbers(100)}`);
   newCar.stop();
   console.log('---');
}