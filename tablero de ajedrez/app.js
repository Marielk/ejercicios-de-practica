const size = parseInt(prompt('Ingresa el tamaño de la cuadricula'));

let result = ''; 

for( let row = 1; row <= size; row++){
  for (let col = 1; col <= size; col++){
    if ((col + row) % 2 === 0) {
      result += ' ';
    } else {
      result += '#';
    } 
  }
  result += '\n'; 
}
console.log(result);