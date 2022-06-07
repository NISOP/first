
console.log ("punto 1");
var inicio=parseInt(prompt("ingrese un numero"));
var fin=prompt("ingrese otro numero");
for(var i=inicio; i<=fin; i++){
if (i%1==0){
    console.log(i)
}
}

console.log ("punto 2");
var num =parseInt(prompt ("ingrese un numero para multiplicar"));
for (var i=0; i<=10; i++){

    console.log (num + "x" + i + "="+num*i)
}

console.log ("punto 3");
var num1=parseInt(prompt("ingrese un numero que desea multiplicar"));
var num2=prompt("ingrese el numero hasta donde se multiplicara");
for (var i=0; i<=num2; i++){

    console.log (num1 + "x" + i + "="+num1*i  
    
    )
}


 console.log ("punto 4")

 var arregloNumeros=[]
 var numeros;
 var mayor = 0;
 for(var i=0; i<=10; i+=1){
    numeros=prompt("ingrese 10 numeros"+i)
    arregloNumeros.push(numeros);
 }
    
    for(var  i=0;i<arregloNumeros.length;i++){
        if(mayor < arregloNumeros  [i])
            mayor = arregloNumeros [i];
        }
             console.log(mayor," es el mayor")
            



console.log ("punto 5")
var arregloNombre=[];
var arregloprecio=[];
var productos;
for(var i=1; i<=5; i+=1){
    productos=prompt("ingrese 5 productos"+i)
    arregloNombre.push(productos);
}
console.log (arregloNombre)


for (var i=0; i<arregloNombre.length; i++){
var precio= prompt ("ingrese el precio de el producto " + arregloNombre);  
arregloprecio.push (precio);

}

console.log ("punto 6")

var producto = prompt ("¿ de cual articulo desea saber el precio" + arregloNombre);
for (var i=0; i<arregloNombre.length; i++){
    if(arregloNombre[i]==producto){
        console.log ("el precio de "+ producto+ " es $ "+arregloprecio[i]);
    }
    
    }
