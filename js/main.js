//Tarea 1
// Ejercicio 1
//definir evento
btnResultado1.addEventListener("click", function (event){
    event.preventDefault();



    //definimos la varibale "mayor" asigamos Math. max que hara que de la serie de números agarrara el mas alto
    let mayor = Math.max(3, 5, 7, 1, 6);

    let resultado = document.getElementById("alertResultado1");
    resultado.innerHTML = "El número mayor del arreglo es: " + "<strong>" + mayor + "</strong>";


console.log(Math.max(3, 5, 7, 1, 6));})

//Ejercicio 2
btnResultado2.addEventListener("click", function (event){
    event.preventDefault();

    let menor = Math.min(-1, 3, 4, 2, 6)

    let resultado = document.getElementById("alertResultado2");
    resultado.innerHTML = "El número menor del arreglo es: " + "<strong>" + menor + "</strong>";
})

//Ejercicio 3

//           0   1  2   3   4  5   6  7
    let arr=[1, 22, 5, 17, 10, 5, 40, 5];

    // Se imprimen todos los numeros
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
    // En este ciclo empezamos con el numero 0 que es 1 
    for (let num = 0; num < arr.length; num++){ //si el numero 1 no es igual al 2 empieza otra vez
        for (let l = num+1; l < arr.length; l++){
            if (arr[num]==arr[l]){ // Si son iguales los numeros se imprimen el igual
               console.log("El numero repetifo es " +  arr[l]);
            } 
        }
    }

//Ejercicio 3.1 
    //   0   1  2   3   4  5   6  7
    arr=[7, 41, 5, 7, 10, 13, 2];

    // Se imprimen todos los numeros
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
    // En este ciclo empezamos con el numero 0 que es 1 
    for (let num = 0; num < arr.length; num++){ //si el numero 1 no es igual al 2 empieza otra vez
        for (let l = num+1; l < arr.length; l++){
            if (arr[num]==arr[l]){ // Si son iguales los numeros se imprimen el igual
               console.log("El numero repetifo es " + arr[l]);
            } 
        }
    }

//Ejercicio 3.2
    //           0   1  2   3   4  5   6  7
    arr=[1, 22, 5, 14, 24, 31, 27, 15, 105];

    // Se imprimen todos los numeros
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
    // En este ciclo empezamos con el numero 0 que es 1 
    for (let num = 0; num < arr.length; num++){ //si el numero 1 no es igual al 2 empieza otra vez
        for (let l = num+1; l < arr.length; l++){
            if (arr[num]==arr[l]){ // Si son iguales los numeros se imprimen el igual
               console.log("El numero repetifo es " + arr[l]);
            } else {
                console.log("No hay numero repetidos");
            }
        }
    }

    // EJERCICIO 4

btnResultado4.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let arreglo2 = document.getElementById("inputNum4").value.toString().split(' ');


        let  indices = [], arreglo_des = [], n = arreglo2.length, intentos = 0

        do {
            while (indices.length < arreglo2.length) {
            
                n  = parseInt(Math.floor(Math.random() * arreglo2.length));
            
                if (indices.includes(n) || isNaN(n)) {
                    
                } else {
                    indices.push(n);
                    
                    
                }//if else
                    
                
            }
            
            for (let i = 0; i < indices.length; i++) {
                arreglo_des[indices[i]] = arreglo2[i];
                
            }
            intentos ++
        } while ((arreglo_des == arreglo2 || intentos < 100) );

        console.log(arreglo2);
        console.log(arreglo_des);

        let resultado = document.getElementById("alertResultado4");
        resultado.innerHTML = ""
       
        for (let i = 0; i < arreglo_des.length; i++) {
            resultado.innerHTML += arreglo_des[i] + " ";
            
        }
    
        document.getElementById("inputNum4").focus();
        document.getElementById("inputNum4").select();


        });// btnResultado
    