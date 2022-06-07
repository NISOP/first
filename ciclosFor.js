for(var i=0; i<=10; i+=2){
    console.log(i);    
}

for(var i=10; i>=1; i--){
    console.log(i);    
}

var limite=prompt("ingrese el limite");
var sumatoria=0
for(var i=0; i<=limite; i++){
    sumatoria+=i;     
}
console.log(sumatoria);  
 
var inicio=parseInt(prompt("ingrese el inicio"));
var fin=prompt("ingrese el fin");
for(var i=inicio; i<=fin; i++){
if (i%2==0){
    console.log(i)
}
}

var arregloNombre=[];
for (var i=0; i<arregloNombre.length;i++){
console.log ("el nombre "+i+" es "+
    arregloNombre[i]);
}

var cantNotas =parseInt(prompt("ingrese la cantidad"));
var arregloNotas =[];
for (var i=0; i<cantNotas; i++){
    var nota= parseFloat (prompt("nota "+(i+1)));
    arregloNotas.push (nota);
}

var sumatoria=0;
for (var i=0; i<cantNotas; i++){
    sumatoria +=arregloNotas[i];
}
var promedio=sumatoria /cantNotas;
console.log ("el promedio de notas es "+ promedio);

