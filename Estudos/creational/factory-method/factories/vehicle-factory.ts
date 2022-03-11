import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory{
   //Factory Method - As subclasses v�o determinar qual ve�culo instanciar�
   abstract getVehicle(vehicleName: string): Vehicle;

   //implementa��o de l�gica da Classe VehicleFactory
   pickUp(customerName: string, vehicleName: string): Vehicle { 
      const car = this.getVehicle(vehicleName);
      car.pickUp(customerName);
      return car;
   }
}