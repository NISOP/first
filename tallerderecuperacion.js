var litrosDeagua
var horas
litrosDeagua=prompt ("ingrese la cantidad de litros de agua que necesita la piscina para llenarse");
horas= litrosDeagua*1/145
console.log ("las horas necesarias para llenar la piscina con la manguera son",horas,"horas");

var metros
var milimetros 
metros=prompt("ingrese un valor en metros");
milimetros = metros*1000
console.log ("el valor de",metros,"m","en milimetros es" ,milimetros,"mm");

var decimetros
decimetros = milimetros/1000*10
console.log ("el resultado anterior en decimetros es ", decimetros,"dm");

var kilometros
kilometros = decimetros / 100 /1000
console.log ("el resultado anterior en kilometros es ",kilometros,"Km");

var duracion 
var costo
duracion=prompt ("ingrese la duracion de la llamada en horas");
costo= duracion*60/120
console.log ("el costo que tiene la llamada es",costo);

var duracionclase
var cobrar
duracionclase=prompt ("ingrese cuantas horas duro la clase en horas");
cobrar = 40000+ (25000+(duracionclase-1));
console,log ("el costo de la clase es",cobrar,"pesos")






