//função que retorna números aleatórios (será usada em random-vehicle-algorithm)
export function randomNumbers(length: number): number {
   return Math.floor(Math.random() * length);
}