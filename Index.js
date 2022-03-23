console.log("hola mundo");
// comentarios en linea 
/*comentario
de 
varias
lineas*/
var nombreUsuario; 
let edadUsuario;
// declarar variables
var nombreUsuario;
// crear variable sin asignar valor
/* inicializar variable:
asignar un valor al momento de crear la variable */
var gradoEstudiante="10A";
/*asignar un valor: igualar una variable existente a un nuevo valor */
edadUsuario=16; 
//asignar valor desde otra variable
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);
/*asignar valor desde el teclado:
existen dos maneras de hacerlo la primera es por ventana emergente y la segunda es por medio de un formulario en hmtl
*/
var valor=prompt ("ingrese un valor"); 
console.log ("la variable vale " + valor);
/*constantes: son valores que no pueden ser cambiados durante la ejecucion del codigo, las constantes siempre deben de ser inicializadas*/
/*imprimir por consola*/
console.log("...");
console.log(valor)
// operadores //
// suma //
var suma;
suma = 5 + 4;
console.log (suma);
var a = 12
suma = a + 8;
console.log (suma);
var b = 20;
suma =a+b
console.log (suma);
//resta//
var resultado;
resultado= a-b //-8//
console.log (resultado);
resultado= b-a //8  (en la resta el orden SI altera el resultado//
console.log (resultado);
//multiplicacion //
var producto;
producto= a*b;
console.log (producto);
//division//
var division;
division = a/b
console .log (division);
//orden de operaciones//
var result;
result = a*b//240
console.log (result);
result = a*b-10;
console.log (result);//230
result =a*(b-10);
console.log (result); //120
// exponente/potencia//
var exp
exp = 3**2
console.log (exp)
exp  = 3**3
console.log (exp)
//cadena o string//
var cadenita1= "3";
var cadenita2= "5";
var sumaCadenas=cadenita1 + cadenita2;
console.log (sumaCadenas);
var nombrecito= "Nicolest";
var apellidito="Pianeta";
var nomCompleto= nombrecito+" " +apellidito;
console.log(nomCompleto);
var longitud = nombrecito.length
console.log (longitud);
console.log (nomCompleto.length);
//Encontrar caracteres dada la posicion en el vector//
var primeraLetra;
primeraLetra= nombrecito [0];
console.log (primeraLetra);
console.log(nombrecito[1]);
// encontrar la ultima posicion de una cadena o vector/
nombrecito [nombrecito.length-1];
console.log (nombrecito.length-1);
// se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra 
// valores inmutables 
//las posiciones de una cadena se pueden consultar pero no se pueden reasignar su valor 
nombrecito[0]="P"
console.log(nombrecito);
nombrecito= "mauricio";
console.log(nombrecito);
//Parseo o casting
/* se trata de convertir las variables a otro tipo de datos, los cambios existentes son :
* a entero parseInt()
* a decimal parseFloat()
* a cadena string() 
*/
//convertir variable 
var entero1= prompt ("ingrese un entero");
var entero2= prompt ("ingrese otro entero");
var sumaE= entero1 + entero2
console.log ("sin parseInt "+ sumaE);
/* forma 1 :
convertir el dato justo en el momento en el que se recibe por teclado
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado */
entero1
entero2= parseInt (prompt ("ingrese otro entero"));
sumaE = entero1 + entero2
console.log ("covertido "+sumaE);
/* entero :parseInt()
decimal :parseFloat ()
cadena :string ()*/

 