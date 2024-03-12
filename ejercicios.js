// Métodos de String. Ejercicios

// 1. Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

/*function longitud(cadena) {
  return cadena.length;
}

var texto = 45445;
console.log("1. La longitud de la cadena es " + longitud(texto));*/

// 2. Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

/*function devuelvePrimeraLetra (cadena){
    return cadena.charAt(0);
}

var texto = "Wola, Mundo"
console.log("2. La primera letra es la " + devuelvePrimeraLetra(texto));*/

// 3. Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

/*function devuelveUltimaLetra(cadena) {
  return cadena.charAt(cadena.length - 1);
}

var texto = "Hola, mundo";
console.log("3. La última lestra es la " + devuelveUltimaLetra(texto));*/

// 4. Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

/*function devuelveEnesimaLetra(cadena, posicion) {
  if (posicion >= 0 && posicion < cadena.length) {
    return cadena.charAt(posicion -1);
  } else {
    return "Posición no hubicada";
  }
}

var texto = "Kevin";
var posicion = 1;
console.log("4. La letra en la posición " + posicion + " es: " + devuelveEnesimaLetra(texto, posicion));*/

// 5. Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

/*var cadena = "wonderful day"
var subCadena = cadena.substring(3, 7)
console.log("5. " + subCadena);*/

// 6. Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.

/*function devuelveMasLarga(cadena1, cadena2) {
  if (cadena1.length >= cadena2.length) {
    
    return cadena1;
    
  } else {
    return cadena2;
  }

}

var texto1 = "Hola"
var texto2 = "Hola, mundo"
console.log("6. La cadena más larga es: " + devuelveMasLarga(texto1, texto2));

if(true){
    var name = "Camilo"
}*/

// 7. Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. En caso la longitud de la cadena más larga coincida con la longitud de alguna otra cadena, devolveremos el texto Hay al menos dos cadenas iguales.

/*function devuelveMasLarga2(cadena1, cadena2, cadena3) {
  var longitudCadena1 = cadena1.length;
  var longitudCadena2 = cadena2.length;
  var longitudCadena3 = cadena3.length;

  if (longitudCadena1 > longitudCadena2 && longitudCadena1 > longitudCadena3) {
    return cadena1;
  } else if (longitudCadena2 > longitudCadena1 && longitudCadena2 > longitudCadena3) {
    return cadena2;
  } else if (longitudCadena3 > longitudCadena1 && longitudCadena3 > longitudCadena2) {
    return cadena3;
  } else if (longitudCadena1 === longitudCadena2 && longitudCadena1 > longitudCadena3) {
    return "Hay al menos dos cadenas iguales";
  } else if (longitudCadena1 === longitudCadena3 && longitudCadena1 > longitudCadena2) {
    return "Hay al menos dos cadenas iguales"
  } else if (longitudCadena2 === longitudCadena3 && longitudCadena2 > longitudCadena1) {
    return "Hay al menos dos cadenas iguales"
  } else {
    return "Hay al menos dos cadenas iguales"
  }
}

var texto1 = "Hola";
var texto2 = "Hola, Mundo";
var texto3 = "Hola, mundo programador";
console.log("7. La cadena más larga es: " + devuelveMasLarga2(texto1, texto2, texto3));*/

// Métodos de arrays. Ejercicios

// 1. Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo

function ultimoElemento (arreglo1){
    return arreglo1[arreglo1.length -1]
}

let arreglo1 = [1, 2, 3, 4, 5];
console.log("1:    " + ultimoElemento(arreglo1));

// 2. Crear una función que tome como parámetro un arreglo, retornar el primer elemento del arreglo

function primerElemento (arreglo2){
    return arreglo2[0]
}

let arreglo2 = [1, 2, 3, 4, 5];
console.log("2:    " + primerElemento(arreglo2));

// 3. Crear una función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo.

function agregarAlFinal(arreglo3, numero) {
  let nuevoArreglo = arreglo3.slice();
  nuevoArreglo.push(numero);
  return nuevoArreglo;
}

let arreglo3 = [1, 2, 3, 4, 5];
let numero = 6;
console.log("3:    " + agregarAlFinal(arreglo3, numero));

// 4. Crear una función que tome como parámetro un arreglo de números, retornar la suma de todos los elementos del arreglo

function suma(arreglo4) {
  return arreglo4.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

let arreglo4 = [1, 2, 3, 4, 5];
console.log("4:    " + suma(arreglo4));

// 5. Crear una función que tome como parámetro un arreglo de números, retornar el promedio de todos los elementos del arreglo.

function promedio(arreglo5) {
  if (arreglo5.length === 0) {
    return 0;
  }
  let suma = arreglo5.reduce((acumulador, elemento) => acumulador + elemento, 0)
  return suma / arreglo5.length
}

let arreglo5 = [10, 20, 35, 40, 50];
console.log("5:    " + promedio(arreglo5))

// 6. Crear una función que tome como parámetro un arreglo de números, retornar el número mas mayor

function numeroMayor(array){
    return Math.max(...array)
}

let array = [52, 87, 10, 97, 41];
console.log("6:    " + numeroMayor(array));

// 7. Crear una función que tome como parámetro un arreglo de números, retornar el número mas menor, si es un número negativo mostrar su valor absoluto

function numeroMenor(arreglo7){
    let menorNumero = Math.min(...arreglo7);
    return menorNumero < 0 ? Math.abs(menorNumero) : menorNumero;
}

let arreglo7 = [15, -8, 12, -10, 5];
console.log("7:    " + numeroMenor(arreglo7));

// 8. Crear una función que tome como parámetro un arreglo de Strings, retornar un valor de tipo String con todos los elementos del arreglo separados por un espacio

function unirElementos(arreglo8){
    return arreglo8.join(" ")
}

let arreglo8 = ["Hola,", "mundo", "de", "la", "programación"]
console.log("8:    " + unirElementos(arreglo8));

// 9. Crear una función que tome como parámetro un arreglo de números, retornar nuevo arreglo invertido los elementos ej. [1,2,3] => [3,2,1]

function invertirNumeros(arreglo9) {
  return arreglo9.slice().reverse();
}

let arregloNumeros = [1, 2, 3, 4, 5];
console.log("9:    " + invertirNumeros(arregloNumeros));

// 10. Crear una función que tome como parámetro un arreglo de números, retornar un dato de tipo número con la suma de todos los números pares

function sumaPares(arreglo10) {
  return arreglo10.reduce(
    (suma, numero) => (numero % 2 === 0 ? suma + numero : suma),
    0
  );
}

let arregloNumero = [1, 2, 3, 4, 5, 6];
console.log("10:   " + sumaPares(arregloNumero));
