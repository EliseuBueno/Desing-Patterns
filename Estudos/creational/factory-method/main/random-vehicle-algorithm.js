"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomCarAlgorithm = void 0;
const bicycle_factory_1 = require("../factories/bicycle-factory");
const car_factory_1 = require("../factories/car-factory");
const random_numbers_1 = require("../utils/random-numbers");
//implementa uma l�gica para retornar cars aleat�riamente
function randomCarAlgorithm() {
    const carFactory = new car_factory_1.CarFactory();
    const bicycleFactory = new bicycle_factory_1.BicycleFactory();
    const car1 = carFactory.getVehicle('Versa');
    const car2 = carFactory.getVehicle('Cobalt');
    const bicycle = bicycleFactory.getVehicle('Bicycle');
    const cars = [car1, car2, bicycle];
    return cars[(0, random_numbers_1.randomNumbers)(cars.length)];
}
exports.randomCarAlgorithm = randomCarAlgorithm;
//# sourceMappingURL=random-vehicle-algorithm.js.map