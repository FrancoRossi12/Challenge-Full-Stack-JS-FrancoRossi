var numeroMax=0, numeroMin=999;
var sumaTotal=0;

numero = parseInt(prompt("Ingrese un numero"))
while(numero != -1){
    sumaTotal+=numero;
    if(numero<numeroMin)
        numeroMin=numero;
    if(numero>numeroMax)
        numeroMax=numero;
    numero = parseInt(prompt("Ingrese un numero"));
}

alert("Mayor numero ingresado: " + numeroMax + "\nMenor numero ingresado: " + numeroMin + "\nSuma total: " + sumaTotal);