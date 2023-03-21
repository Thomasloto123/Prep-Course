// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

NuevoArray=[];
for (key in objeto){
  const MiniArray=[key, objeto[key]];
  NuevoArray.push(MiniArray)
  
}
return NuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  const obj = {};
  for (let letter of string){
    if (obj.hasOwnProperty(letter))obj[letter] +=1
    else{
      obj[letter]=1
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minus="";
  let mayus="";

  const MINUSCULAS ="abcdefghijklmnñopqrstuvwxyz"

 for(let letter of s){
  if (MINUSCULAS.includes(letter))minus += letter
 else minus += letter
 }
 return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras = str.split(' ');

  let reverse = palabras.map((elem) => {
    let Resultado = '';

    for (let i = elem.lenght -1; i >= 0; i--) {
      Resultado = Resultado + elem[i];
    }
     return Resultado;
  })
  return reverse.join('');
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var pasarString = numero.toString();
  var numArray = pasarString.split('');
  var reverse = numArray.reverse();
  var unir = reverse.join('');

  if(numero.toString()=== unir){
    return "Es capicua";
  }else {
    return "No es capicua";
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arrayNew = cadena.split('');
  var arraFiltrado = arrayNew.filter((elemento)=> elemento !== "a" && elemento !== "b" && elemento !== "c");
  var arraFiltrado = arraFiltrado.join("");
  return arraFiltrado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  return arr.sort ((a,b) => (a.lenght - b.lenght));
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  


      return arreglo1.filter(e => (
         arreglo2.includes(e)
      ))
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

