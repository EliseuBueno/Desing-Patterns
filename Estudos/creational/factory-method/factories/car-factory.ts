import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";
import { Car } from "../vehicle/car";

//Classe que estende a VehicleFactory
export class CarFactory extends VehicleFactory {
   getVehicle(vehicleName: string): Vehicle {
      return new Car(vehicleName);
   }
}