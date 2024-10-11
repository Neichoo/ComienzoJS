let botones = document.querySelectorAll(".botones");
let arrayCalificaciones = [55, 75, 48, 90, 62];
botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        botones.forEach(function(b) {
            b.style.backgroundColor = "slategrey";
        });
        boton.style.backgroundColor = "red";
    });
});

function mostrarLista(){
    let listaCalificaciones = document.getElementById("calificaciones");
    listaCalificaciones.innerHTML = '';
    for(let c of arrayCalificaciones){
        let nuevoPunto = document.createElement("li");
        nuevoPunto.textContent = c;
        listaCalificaciones.appendChild(nuevoPunto);
    }
}

function calcularPromedio(){
    let suma=0;
    for(let x = 0; x < 5; x++){
        suma += arrayCalificaciones[x];
    }
    suma = suma/5;
    alert("El promedio es de "+suma);
}

function notaMasAlta(){
    let x = 0;
    let mas_alta = 0;
    while(x < 5){
        if(arrayCalificaciones[x] > mas_alta){
            mas_alta = arrayCalificaciones[x];
        }
        x++;
    }
    alert("La nota más alta es " + mas_alta);
}

function hayAplazos(){
    let x = 0;
    let aplazo = 0;
    do{
        if(arrayCalificaciones[x] < 55){
            aplazo = arrayCalificaciones[x];
            break;
        }
        x++;
    } while(x < 5)
    if(aplazo != 0){
        alert("Hay un aplazo, nota: "+aplazo);
    } else{
        alert("No hay aplazo");
    }
}