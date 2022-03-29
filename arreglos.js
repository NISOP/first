/*Los arreglos son estructuras que almacenan informacion de 
culaquier tipo de dato,es decir,
string,iny,dooble,array obejos,entre otros
los arreglos tienen operaciones tales como,consultar,modificar,insertar,
eliminar
Los arreglos se decalran con corchetes []*/

//creacion de arreglo//
var arreglo =["juan",14];
console.log (arreglo);
/*en un arreglo puede haber varios tipos de datos y el orden no importa */ 
/*Arreglo de arreglos*/
var notasEstudiantes=[["sofia",4.8],["isa",4.6]];
console.log (notasEstudiantes);
/*consultar contenido de arreglos*/
console.log(notasEstudiantes[0]);
console.log(notasEstudiantes[0][0]);//sofia
console.log(notasEstudiantes[1][1]);//4.6
//modificar arreglos 
console.log (arreglo[0]+" tiene "+arreglo[1])
arreglo[1]=15;
console.log(arreglo[0]+" tiene "+arreglo[1]+" años");
// hacer que aparezca "isa obtuvo 5.0 en su nota final"//
notasEstudiantes[1]=5.0
console.log ("isa obtuvo","en su nota final",notasEstudiantes[1]);
//agregar elementos al arreglo 
console.log("Sin arreglos",arreglo);
arreglo.push("10a");
console.log("agregado",arreglo);
//agregar elementos al arreglo desde el inicio 
console.log("Sin arreglos",arreglo);
arreglo.unshift("perez");
console.log("Agregado",arreglo);
//eliminar elementos al arreglo
console.log("Sin eliminar",arreglo);
arreglo.pop();
console.log("Eliminado",arreglo);
arreglo.shift();//elimina el primer elemento
console.log("Elimina.shift",arreglo);

//ejercicio 
/*crear el arreglo con los valores 
-analisis
-tenologia
-desarrollo 
cambiar desarrollo por BBDD
convertir el vector en:
-introduccion 
-analisis
-tecnologia */
 
var arreglos = ["analisis","tecnologia","desarrollo"];
console.log("Sin arreglo",arreglos);
arreglos[2]= "BBDD"
console.log("Arreglado",arreglos);
arreglos.unshift("introduccion");
arreglos.pop();
console.log("vector convertido",arreglos);

