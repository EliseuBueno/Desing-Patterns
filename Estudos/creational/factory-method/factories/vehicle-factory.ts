import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory{
   //Factory Method - As subclasses vão determinar qual veículo instanciará
   abstract getVehicle(vehicleName: string): Vehicle;

   //implementação de lógica da Classe VehicleFactory
   pickUp(customerName: string, vehicleName: string): Vehicle { 
      const car = this.getVehicle(vehicleName);
      car.pickUp(customerName);
      return car;
   }
}