const drawAnything =  (numb, what) => {
	for(let i =1; i <= numb; i++) {
		console.log(i + ' ' + what);
	}
}

drawAnything(5, ':P');

//Calcula la potencia de 2 elevado a un número específico

const calcula = (x,y) => {
	let result = '';
	result += y*(x*x); 
	return result;
	console.log(result);
}; 
calcula(2, 2);

//devolver un arreglo al revez

const reversa = (arr) => {
	let result = [];
	let newArray = Array.from(arr);
	console.log(newArray);
	result.push(newArray.reverse());	
	console.log(result);
};
reversa('holas')

//Crea una función que cuente el número de vocales de un string

const count = (str) => {
	let counter = 0; 
  for(let i=1; i <= str.length; i++) {
		if(str[i] === 'a' || str[i]=== 'e' || str[i]=== 'i' || str[i] ==='o' || str[i]=== 'u'){
			 counter += +1; 
		} else { counter += 0;}
	}
	console.log(counter);
};

count('hola');

//Crea una función que compruebe si un número es par o impar.

const compare = (x) => {
	let result = 0; 	
	if(x % 2 === 0){
		result += 0; 
		} else {
		result += 1;
		}
		console.log(result);
	};
compare(5)