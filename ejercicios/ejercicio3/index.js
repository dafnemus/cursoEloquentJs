/* Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez. */
let size = 8; // casilla

let board = ""; // tablero

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) { // si la suma de los dos contadores (x,y) se divide por 2 y da resto cero concatena un espacio sino suma #.
      board += " ";
    } else {
      board += "#"; 
    }
  }
  board += "\n"; // salto de pagina 
}

console.log(board); 

/* Resultado:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
