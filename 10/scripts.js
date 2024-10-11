class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion() {
        return `${super.informacion()} - ${this.raza}`;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion() {
        return `${super.informacion()} - ${this.sexo}`;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion() {
        return `${super.informacion()} - Color: ${this.color}`;
    }
}

function verAnimales(){
    let elemento_OA = document.getElementById("OutputAnimales");
    elemento_OA.innerHTML = "";
    for(let animal of animales){
        let li = document.createElement("li");
        li.textContent = animal.informacion();
        elemento_OA.appendChild(li);
    }
}

let animales = [];
const perro = new Perro('Firulais', 10, 5, 'Pastor Aleman');
const gato = new Gato('Garfield', 5, 3, 'Macho');
const conejo = new Conejo('Bugs Bunny', 3, 2, 'Blanco');
animales.push(perro);
animales.push(gato);
animales.push(conejo);
