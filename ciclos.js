//ciclo while

var casillasLlenas = 0; //Variable que cuenta cuántas casillas se han llenado
var arreglo = []; // Variable que crea el arreglo vacío
 
while(casillasLlenas < 4){ //Ciclo While con la condición que debe evaluar cada vez
    arreglo.push("InsertarValor"); //instrucción para llenar una posición a la vez
    casillasLlenas += 1; //conteo de casillas llenas, se suma 1 con cada vuelta del ciclo
}



var CantSaludos = 0;// variable que define en cuanto empieza el ciclo  
 
while(CantSaludos < 10){// se define que aumenatara hasta 10 mientras la condicion sea verdadera 
    console.log("Hola ");// se escribe el mensaje que aparecera en consola
    CantSaludos += 1;// se aumenta la variable de 1 en 1 
}

var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}

var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}

