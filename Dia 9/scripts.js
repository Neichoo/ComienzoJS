let autos = [];


function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}
Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}
Automovil.prototype.verAuto = function(){
    let output = (this.marca + this.modelo + " - " + this.anio + " - " + this.titular);
    return(output);
}
Automovil.prototype.encender = function(){
    alert("El auto está en marcha");
}

function verRegistros(){
    let elemento_OR = document.getElementById("OutputRegistro");
    elemento_OR.innerHTML = "";
    for(let auto of autos){
        let li = document.createElement("li");
        li.textContent = auto.verAuto();
        elemento_OR.appendChild(li);
    }
}

const automovil1 = new Automovil("Ford", "Fiesta", "Rojo", 2019, "Juan Perez");
const automovil2 = new Automovil("Chevrolet", "Corsa", "Azul", 2018, "Maria Lopez");
const automovil3 = new Automovil("Fiat", "Uno", "Blanco", 2017, "Pedro Gomez");
autos.push(automovil1);
autos.push(automovil2);
autos.push(automovil3);