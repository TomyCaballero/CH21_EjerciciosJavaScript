//Tarea 1
// EJERCICIO 1
//definir evento
btnResultado1.addEventListener("click", function (event){
    event.preventDefault();



    //definimos la varibale "mayor" asigamos Math. max que hara que de la serie de números agarrara el mas alto
    let mayor = Math.max(3, 5, 7, 1, 6);

    let resultado = document.getElementById("alertResultado1");
    resultado.innerHTML = "El número mayor del arreglo es: " + "<strong>" + mayor + "</strong>";


console.log(Math.max(3, 5, 7, 1, 6));})
