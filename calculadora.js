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
    var resultado = num1 * num2;
    var mensaje = "El resultado de multiplicar " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}
function multiplicacion(num1, num2){
    var resultado = num1 / num2;
    var mensaje = "El resultado de dividir " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}
function potencia(num1, num2){
    var resultado = num1**num2;
    var mensaje = "El resultado de la potencia " + num1 +" y " + num2 + " es " + resultado;
    return resultado;
}






function main_calculadora(){
    var eleccion =prompt( "Por favor ingrese el número de la operacion que desea realizar : \n 1.suma \n 2. resta \n 3. division \n 4. multiplicacion \n 5.potencia \n 6. dobles de una suma  \n 7. la mitad de la multiplicacion de dos numeros \n 8. tres veces la resta de dos numeros  \n 9.la quinta parte de una potencia \n 10. el cociente aumnetado 5  \n 11. la potencia aumnetada la base ");
}
    
    var numero1 =parseFloat (prompt("por favor ingrese el primer valor:"));
    var numero2 =parseFloat (prompt("por favor ingrese el segundo valor:"));
    
    if (eleccion == 1) {
    console.log(suma(numero1, numero2));
    }else if (eleccion == 2){
    console.log (resta(numero1, numero2));
    } else if (eleccion == 3){
    console.log (division(numero1, numero2));
    }else if (eleccion == 4){   
    console.log (multiplicacion(numero1, numero2));
    }else if (eleccion == 5){
    console.log (potencia (numero1, numero2));
    }else if (eleccion == 6){
    var resultadodobleSuma = suma (numero1, numero2);
    console.log (" dobles de la suma de" + numero1+ "y" + numero2+ " es "+ multiplicacion (resultado, 2))
    }else if(eleccion == 7){
    var resultadoProducto = multiplicacion (numero1, numero2);
    console.log ("la mitad de este producto entre " + numero1 + " y " + numero2 + " es " + division (resultadoProducto));
    var resultadotresvecessuma = resta (numero1, numero2);
    console.log ("")


}


