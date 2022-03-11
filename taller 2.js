var area =prompt ("para hallar el area de un cuadrado ingrese las medidas de un lado");
var area2 =prompt ("ingrese las medidas de un lado de el cuadrado");
var cuadrado
cuadrado=area * area2;
console.log( "el area de el cuadrado es ", cuadrado ); 

var volumen =prompt (" para hallar el volumen de un cubo ingrese la longitud del arista ")
var cubo 
cubo = volumen **3
console.log("el volumen del cubo es " , cubo);

var areaRectangulo =prompt (" para hallar el area de un rectangulo ingrese la altura ");
var areaRecatangulo2 =prompt ("ingrese la base del rectangulo");
var rectangulo1
rectangulo1 = areaRectangulo * areaRecatangulo2 
console.log ("el area de el rectangulo es ",rectangulo1);

var perimetro =prompt ("para hallar el perimetro de un rectangulo ingrese la medida de un lado ");
var perimetro1 =prompt ("ingrese el otro lado del rectangulo");
var perimetroBase=prompt ("ingrese la base");
var perimetroAltura=prompt ("ingrese la altura del rectangulo");
var rectangulo
rectangulo = perimetro + perimetro1 + perimetroBase + perimetroAltura;//califique la formula,no el resultado//
console.log ("el perimetro del rectangulo es ",rectangulo);

var diametro=prompt ("para hallar el area de un circulo ingrese el diametro de este");
var circulo
circulo = 3.1416* (diametro/2)**2;
console.log ("el area del ciculo es ", circulo);

var volumen=prompt ("para hallar el volumen de una esfera ingrese su diametro");
var esfera
esfera = (4/3)* 3.1416*(volumen/2)**3;
console.log (" el volumen de la esfera es ",esfera);

var base1 = prompt ("ingrese el valor de la base 1 del trapezoide");
var base2 =prompt ("ingrese el valor de la base 2 del trapezoide");
var h  =prompt ("ingrese el valor h del trapezoide");
var trapezoide 
trapezoide = 1/2 * (base1+base2)*(h);
console.log ("el area del trapezoide es ", trapezoide);

var ancho=prompt ("ingrse la medida de ancho de la piscina");
var largo=prompt ("ingrese la medida de largo de la piscina")
var profundidad=prompt ("ingrese las medidas de profundidad de la piscina");
var piscina
piscina = ancho*largo*profundidad
total= piscina*10000
console.log ("para llenar la piscina se necesitan",total,"litros de agua") 

var anchocasa=prompt ("ingrese el ancho del muro de la casa");
var alturacasa=prompt ("ingrse la medida de la altura del muro de la casa ");
var casa
casa = anchocasa*alturacasa;
total = casa * 22000*2;
console.log ("el total a pagar para pintar la casa es",total);


