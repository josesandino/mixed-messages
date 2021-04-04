// Esta array guaradara todas las frases
const listaFrases = ['hola mundo','como estas','un gusto tenerte aqui','soy un mini-bot'];

// Esta variable genera un numero aleatorio entre el 0 y el 1.0 luego la multiplica por el numero de frases
// que hay en el array con la propiedad lenght y la redondea con floor
const randomNum = Math.floor(Math.random() * listaFrases.length);

//imprime una frase del array aleatoria
console.log(listaFrases[randomNum]);
