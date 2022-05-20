//nicole sophia pianeta 
//isabella agudelo 

//
console.log ("punto 1")
var contador = prompt ("ingrese el limite del contador de multiplos de 5");/*se le pide
 al usuario que dijite hasta donde quiere que el ciclo cuente*/
var ciclo1 =0;// se indica en que numero iniciara el ciclo con una variable
while (ciclo1<=contador){// se ejecutara el ciclo hasta el limite que el usuario indico

if (ciclo1 %5==0){// se coloca la condicion que debe ser verdadera 
    //para que se muestre el mensaje 
    console.log ("el numero ",ciclo1,"si es un multiplo de 5");// el mensaje que aparecera si se cumple 
    // la condicion del "if"

}else{// condicional que indica lo que pasara si no se sumple el condicional "if"
    console.log ("el" , ciclo1, "no es un multido de 5");// mensaje que aparece para la condicion de la linea 15
}

ciclo1++;// se incrementa el valor de la variable en 1 
}

//2
console.log ("punto 2")
var acumulador =0;
var cantidad = prompt ("ingrese la cantidad de poductos que va a llevar");
var ciclo2=0;

while(ciclo2<=cantidad){
    var costo=parseInt(prompt("ingrese el costo de los productos"));
    acumulador+=costo
    ciclo2+=1
}
console.log("el costo total a pagar es de ",acumulador);

//3
console.log ("punto 3")

var acumulador3 =acumulador;
var cantidad3 = prompt ("¿desea registrar un articulo?");
var ciclo3=0

while(cantidad3=="si"){
    var costo3=parseInt(prompt("ingrese el precio"));
    acumulador3+=costo3
    cantidad3 = prompt ("¿desea registrar un articulo?");
    ciclo3+=1

}
console.log("el costo total a pagar es de ",acumulador3);

// 4

console.log ("punto 4")
var acumulador4 =acumulador;
var cantidad4 = prompt ("¿desea registrar un articulo?");
var ciclo4=0

while(cantidad4=="si"){
    var costo4=parseInt(prompt("ingrese el precio"));
    acumulador+=costo4
    cantidad4 = prompt ("¿desea registrar un articulo?");
    ciclo4+=1

}
var dto;
if (ciclo4>=8<15){
    costo4 = acumulador-(acumulador*0.10);
    dto=10;
} else if (ciclo4>=15<25) {
    costo4 = acumulador-(acumulador*0.15);
    dto=15;
} else if (ciclo4>=25) {
    costo4 = acumulador-(acumulador*0.20);
    dto=20;
    
}
console.log("el costo total a pagar es de "+costo4+ " con un descuento del "+ dto+"%")


//5
console.log("punto 5")
var acumulador5 =0;
var cant = prompt ("ingrese la cantidad de notas que necesita digitar");
var ciclo5=1;
var perdio=0
var gano=0
while(ciclo5<=cant){
    var nota=parseInt(prompt("ingrese el valor de la nota"));
    acumulador5+=nota
    ciclo5+=1

    if (nota<3.5){
        console.log ("el estudiantes no paso la materia")
        perdio+=1

    }else {
        console.log ("el estudiante paso la materia")
        gano+=1 

    }
}

     if (perdio > gano ){
         console.log ("Debe abrirse el curso de verano")
    } else {
      console.log ("La cantidad de estudiantes no es suficiente para el curso de verano")     

    }

