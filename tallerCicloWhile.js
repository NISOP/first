
//Cree un ciclo while que se repita 5 veces y en cada iteración imprima el número 2//
console.log ("punto 1")
var ciclo1 =0;
while (ciclo1<5){
console.log (2)
ciclo1+=1;
}

//Desarrolle un ciclo while que itere 8 veces e imprima 
//el número del ciclo en el que se encuentra//
console.log ("punto 2")
var ciclo2 =0;
while(ciclo2< 8){
console.log ("el ciclo va en la literacion " +ciclo2);
ciclo2+=1;
}

//Diseñe un ciclo while que itere 10 veces, pero su incremento debe ser de 2 en 2//
console.log ("punto 3")
var ciclo3 =0; 
while (ciclo3< 20){
console.log ("el contador va en "+ ciclo3)    
ciclo3+=2;
}

//Diseñe un ciclo while que se itere hasta que el usuario escriba la palabra ok
console.log ("punto 4")
var ciclo4 = prompt ("ingrese OK para parar");
while (ciclo4 != "ok"){
    console.log ("dijo", ciclo4)
    ciclo4=prompt("ingrese ok para parar") ;
}
//Desarrolle un ciclo while que pida un valor numérico 
//y se detenga hasta que ese valor sea negativo
console.log("punto 5")
var ciclo5 = prompt ("ingrese un ngeativo para detenerse");
while (ciclo5 >=0){
    console.log ("dijo",ciclo5);
    ciclo5 = prompt ("ingrese un ngeativo para detenerse");
} 
//Elabore un ciclo while que reciba dos números, los sume y si el resultado 
//es mayor a 20 debe detenerse. De lo contrario, debe pedir nuevamente dos valores.
console.log("punto 6")
var suma=0;
var num1
var num2
while (suma <=20){
num1 =parseInt(prompt ("ingrese  un valor"))
num2 =parseInt (prompt (" ingrese otro valor"))
suma=num1+num2; 
}
console.log ("punto 5");
var ciclo5 = prompt ("ingrese un numero impar para detenerse");
while (ciclo5 %2==0){
    console.log ("dijo",ciclo5);
    
}
