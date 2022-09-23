let valorHora = prompt("Por favor ingrese el valor x hora: ");
let nombre = prompt("Ingrese nombre del empelado: ");
let antiguedad = prompt("Ingrese sus años de antiguedad: ");
let cantHoras = prompt("Ingrese su cantidad de horas trabajadas: ");

var cobro = parseInt(valorHora) * parseInt(cantHoras);
console.log(cobro);

if(antiguedad>10){
    cobro+=antiguedad*30;
}

alert("Empleado: " + nombre + " - Antiguedad: " + antiguedad + " años - Cobro: " + cobro + " $");
