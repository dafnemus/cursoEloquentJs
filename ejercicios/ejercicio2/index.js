// imprimir los numeros del 1 al 100
for (let numero = 1; numero <= 100; numero = numero + 1) {
 console.log(numero);} 

 // Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

 for (let numero = 1; numero <= 100; numero = numero + 1) {
	 if(numero % 3 === 0) {console.log('Fizz')};
	 if(numero % 5 === 0) {console.log('Buzz')};
	console.log(numero);} 

// imprimir "FizzBuzz" , para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).
 
for (let n = 1; n <= 100; n++) {
  let output = ""; // reemplaza con un string si se cumple la condicion del if en este caso.
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n); // imprime numero o cada condicion cumplida y si ambas son validas las concatena.
}
