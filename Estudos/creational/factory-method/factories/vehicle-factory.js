"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = void 0;
class VehicleFactory {
    //implementa��o de l�gica da Classe VehicleFactory
    pickUp(customerName, vehicleName) {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }
}
exports.VehicleFactory = VehicleFactory;
//# sourceMappingURL=vehicle-factory.js.map