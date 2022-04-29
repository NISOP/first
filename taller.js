var saludar="si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}

var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}


var edad="19";
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}

var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0){
  console.log("numero2 es positivo");
}
if(numero1<0 || numero1!=0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1 <numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


var numerito = 100;
 
if(numerito<50) {

  console.log("numerito sí es estrictamente menor que 50");
}else if( numerito>=50 && numerito<=80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito< 100)
 {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else if(numerito>100) {
    console.log("numerito es estrictamente mayor a 100");
}

numerito=20
numerito=70
numerito=200

var diaActual = "jueves";
if (diaActual== "jueves" )  {
  console.log ("vaya al poli");
} else { 
  console.log ("no puede ir al poli");
} 


var dividendo = "2"
var divisor = "4"
if (divisor == 0 ) {
  console.log (" no se puede dividir");
} else { 
  console.log (dividendo/divisor); 
}

var dia = "martes" ;
var plato
 
if(dia == "lunes" ){
    plato="Arroz con plato";
}else if(dia == "martes"){
    plato="chuleta de cerdo/pollo";
}else if(dia == "jmiercoles"){
    plato="frijoles"
 
}else if(dia == "jueves"){
    plato="sancocho de pescado";
}else if(dia == "viernes"){
    plato="bandeja paisa";
}else if(dia == "sabado"){
    plato="ajiaco"
}else if (dia == "domingo"){
      plato="sancocho de gallina"
}
console.log ("el plato del dia es " ,plato);
 


var caracter = "c"
var tipo;
 
if (caracter == "a" || caracter == "e"|| caracter == "i" || caracter == "o"|| caracter == "u") {
    tipo=" una vocal";
}
else if (caracter == 0 || caracter == 1|| caracter == 2 || caracter == 3 || caracter == 4 || caracter == 5 || caracter == 6 || caracter == 7 || caracter == 8 || caracter == 9 ) {
 tipo = "un numero "
}
else {
  tipo= "una consonante"
}
console.log("el caracter ingresado es un",tipo);




