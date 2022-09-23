let numero = prompt("Por favor ingrese un numero");
esPrimo=true;
parseInt(numero);

for(var i=2; i<numero; i++){
    if(numero % i == 0)
        esPrimo=false;
}

if(esPrimo){
    alert("El numero ingresado: " + numero + " SI es primo");
}else{
    alert("El numero ingresado: " + numero + " NO es primo");
}