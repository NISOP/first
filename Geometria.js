function suma(num1, num2){
    var resultado = num1 + num2;
    var mensaje = "El resultado de sumar " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}

function resta(num1, num2){
    var resultado = num1 - num2;
    var mensaje = "El resultado de restar " + num1 +" y " + num2 + " es " + resultado;
    return mensaje;
}
function division (num1, num2){
    var resultado = num1 / num2;
    var mensaje = "El resultado de multiplicar " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}
function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    var mensaje = "El resultado de dividir " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}
function potencia(num1, num2){
    var resultado = num1**num2;
    var mensaje = "El resultado de la potencia " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}


function main_geometria(){
    var eleccion1 =prompt( "Por favor ingrese el número de la operacion que desea realizar :\n 1.hallar el area de una figrura \n 2. hallar el perimetro de una figrura ");
    var eleccion2 =prompt( "Por favor ingrese el número de la operacion que desea realizar :\n 1. paralelogramo \n 2. rectangulo");


var base =parseFloat (prompt("por favor ingrese la base "));
var altura =parseFloat (prompt("por favor ingrese  la altura "));
var numero1= base;
var numero2= altura;
if (eleccion1 == 1 && eleccion2 ==1 ) {
    console.log("el area del paralelogramo es " + multiplicacion(base, altura));
    }else if (eleccion1 == 1 && eleccion2 == 2){
    console.log ("el area del rectangulo es "+ multiplicacion(base, altura));
    } else if (eleccion1== 2 && eleccion2 == 1){
    var dobleBase= multiplicacion (num1,2)
    var dobleAltura= multiplicacion(num2, 2)
        console.log("el perimetro del paralelogramo es "+ suma(dobleBase, dobleAltura));
    }else if (eleccion1 == 2 && eleccion2 == 2){   
    var dobleBase = multiplicacion (num1, 2);
    var dobleAltura= multiplicacion (num2, 2);
    console.log ("el perimetro del rectangulo es "+ suma(dobleBase, dobleAltura))
    }
}


