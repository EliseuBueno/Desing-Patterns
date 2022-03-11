"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(name) {
        this.name = name;
    }
    pickUp(customerName) {
        console.log(`${this.name} est� buscando ${customerName}`);
    }
    stop() {
        console.log(`${this.name} parou`);
    }
}
exports.Car = Car;
//# sourceMappingURL=car.js.map