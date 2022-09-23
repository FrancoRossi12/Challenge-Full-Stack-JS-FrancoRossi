var numero = Math.floor(Math.random()*1000);
ingresado=-1;
alert(numero);
while(true){
    let ingresado = prompt("Ingrese un numero para intentar encontrar al numero aleatorio");
    if(parseInt(ingresado)<numero){
        alert("Ingresaste un numero menor");
    }
    else{
        if(parseInt(ingresado)>numero)
            alert("Ingresaste un numero mayor");
        else{
            alert("Usted acerto");
            break;
        }
    }
}