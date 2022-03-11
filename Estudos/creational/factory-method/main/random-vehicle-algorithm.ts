import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

//implementa uma lógica para retornar cars aleatóriamente
export function randomCarAlgorithm(): Vehicle {
   const carFactory = new CarFactory();
   const bicycleFactory = new BicycleFactory();
   const car1 = carFactory.getVehicle('Versa');
   const car2 = carFactory.getVehicle('Cobalt');
   const bicycle = bicycleFactory.getVehicle('Bicycle');
   const cars = [car1, car2, bicycle];
   return cars[randomNumbers(cars.length)];
}