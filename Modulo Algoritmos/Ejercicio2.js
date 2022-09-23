let contra = prompt("Por favor ingrese una contraseña");
var intento;
var i=0;
while(i<3 && intento!=contra){
    intento = prompt("Vuelve a ingresar su contraseña - Intento " + (i+1) + "/3")
    i++;
}
if(intento==contra){
    alert("Felicitaciones, recordas tu contraseña");
}else{
    alert("Tenes que ejercitar la memoria");
}