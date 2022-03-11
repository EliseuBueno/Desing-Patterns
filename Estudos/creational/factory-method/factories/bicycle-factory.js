"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleFactory = void 0;
const vehicle_factory_1 = require("./vehicle-factory");
const bicycle_1 = require("../vehicle/bicycle");
class BicycleFactory extends vehicle_factory_1.VehicleFactory {
    getVehicle(vehicleName) {
        return new bicycle_1.Bicycle(vehicleName);
    }
}
exports.BicycleFactory = BicycleFactory;
//# sourceMappingURL=bicycle-factory.js.map