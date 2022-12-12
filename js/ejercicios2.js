// Tarea 2
// EJERCICIO 1 
//definir evento
btnResultado1.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada_num = document.getElementById("inputNum1").value.toString().split(' ');
    

    function array_min(arr) {
        let min_num = arr[0]
        arr.forEach(element => {
            if (parseFloat(element) < min_num) {
                min_num = parseFloat(element)
            }
        });
        return min_num
    }

    function array_max(arr) {
        let max_num = arr[0]
        arr.forEach(element => {
            if (parseFloat(element) > max_num) {
                max_num = parseFloat(element)
            }
        });
        return max_num
    }

    function enrango(arr, min1, max1){
        if ((array_min(arr) >= min1 && array_max(arr) <= max1)) {
            return true
        }
        return false
    }

   if ((enrango(entrada_num, 1, 100) && entrada_num.length == 3)) {
    min_num = "El número menor es: " + array_min(entrada_num);
    max_num = "El número mayor es: " + array_max(entrada_num);
   } else {
    min_num = "el arreglo no está en rango o no tiene 3 elementos"
    max_num = "el arreglo no está en rango o no tiene 3 elementos"
   }


    let resultado = document.getElementById("alertResultado1");
    resultado.innerHTML = "";
    resultado.innerHTML = min_num;

    document.getElementById("inputNum1").focus();
    document.getElementById("inputNum1").select();

    let resultado2 = document.getElementById("alertResultado2");
    resultado2.innerHTML = "";
    resultado2.innerHTML = max_num;

    document.getElementById("inputNum2").focus();
    document.getElementById("inputNum2").select();

 

});// btnResultado



    // random value generated
    let y = Math.floor(Math.random() * 100 + 1);
      
    // counting the number of guesses
    // made for correct Guess
    let guess = 1;
      
    document.getElementById("submitguess").onclick = function(){
      
   // number guessed by user     
   let x = document.getElementById("guessField").value;
  
   if(x == y)
   {    
       alert("Adivinaste el número "
               + x +  " en " + guess + " intentos");
   }
   else if(x > y) /* if guessed number is greater
                   than actual number*/ 
   {    
       guess++;
       alert("Intenta un número más pequeño");
   }
   else
   {
       guess++;
       alert("Intenta un número más grande")
   }
}


// EJERCICIO 4 
//definir evento
btnResultado2.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada_num = parseFloat(document.getElementById("inputNum2").value);
    

   if ((entrada_num >= 100 && entrada_num <= 200 && entrada_num % 3 == 0)) {
    salida_ejercicio4 = "El número es divisible entre 3";
    
   } else {
    salida_ejercicio4 = "el número no está en rango o no es divisible entre 3"
    
   }


    let resultado = document.getElementById("alertResultado3");
    resultado.innerHTML = "";
    resultado.innerHTML = salida_ejercicio4;

    document.getElementById("inputNum3").focus();
    document.getElementById("inputNum3").select();
});// btnResultado



// EJERCICIO 5
//definir evento
btnResultado3.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada_num = document.getElementById("inputNum3").value.toString().split(' ');

    function sum_3(arr1) {
        if ((parseInt(arr1[0]) + parseInt(arr1[1]) == parseInt(arr1[2]) || parseInt(arr1[1]) + parseInt(arr1[2]) == parseInt(arr1[0]) || parseInt(arr1[2]) + parseInt(arr1[1]) == parseInt(arr1[0]))) {
            return "Sí"
        } 
        else {
            return "No"
        }
    }

    respuesta = sum_3(entrada_num)
  

    let resultado = document.getElementById("alertResultado4");
    resultado.innerHTML = "";
    resultado.innerHTML = respuesta;

    document.getElementById("inputNum3").focus();
    document.getElementById("inputNum3").select();

});// btnResultado


// EJERCICIO 6
//definir evento
btnResultado4.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada_num = parseFloat(document.getElementById("inputNum4").value);
    

   if ((entrada_num%2 == 0)) {
    salida_ejercicio4 = "El número es par";
    
   } else {
    salida_ejercicio4 = "El número es impar"
    
   }


    let resultado = document.getElementById("alertResultado5");
    resultado.innerHTML = "";
    resultado.innerHTML = salida_ejercicio4;

    document.getElementById("inputNum4").focus();
    document.getElementById("inputNum4").select();
});// btnResultado