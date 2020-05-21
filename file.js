/* Hacer un programa que pida al usuario un numero del 1 al 9. 
Luego imprimir la tabla de multiplicar de ese numero. Utilizar while.*/

let numTabla = prompt("Elegí un número del 1 al 9");
let numero = 0

while (numero <= 10) {
    console.log(numero + " * " + numTabla + " = " + (numero*numTabla));
    numero++;
  }


/* Definir un nombre de usuario y una contraseña.　
Pedir al usuario que ingrese ambos campos por prompt, y repetir mientras el usuario NO escriba correctamente. 
Utilizar operadores lógicos && u || en la condición si es necesario. */

let user = "Meri";
let pass = "Gatos"

user = prompt("Ingresá tu username");
pass = prompt("Ingresá tu pass");

while (user !== "Meri" || pass !== "Gatos") {
    alert("Username o password incorrectos");
    user = prompt("Ingresá tu username nuevamente");
    pass = prompt("Ingresá tu pass nuevamente");
}

alert("¡APLAUSOS DE PIE!");


/* Sumar al ejercicio anterior la opción de que al tercer intento, el programa se cierra. 
Utilizar operadores lógicos && u || en la condición si es necesario. */

let user = "Meri";
let pass = "Gatos"
let numero = 1;

user = prompt("Ingresá tu username");
pass = prompt("Ingresá tu pass");

while (
    (numero <= 3) &&
    (user !== "Meri" || pass !== "Gatos")
) {
    alert("Username o password incorrectos");
    user = prompt("Ingresá tu username nuevamente");
    pass = prompt("Ingresá tu pass nuevamente");
    numero++;
}

if (user == "Meri" && pass == "Gatos") {
    alert("¡APLAUSOS DE PIE!");
}
else {
    alert("Besito, a llorar a la iglesia.");
}
