//fun��o que retorna n�meros aleat�rios (ser� usada em random-vehicle-algorithm)
export function randomNumbers(length: number): number {
   return Math.floor(Math.random() * length);
}