"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFactory = void 0;
const vehicle_factory_1 = require("./vehicle-factory");
const car_1 = require("../vehicle/car");
//Classe que estende a VehicleFactory
class CarFactory extends vehicle_factory_1.VehicleFactory {
    getVehicle(vehicleName) {
        return new car_1.Car(vehicleName);
    }
}
exports.CarFactory = CarFactory;
//# sourceMappingURL=car-factory.js.map