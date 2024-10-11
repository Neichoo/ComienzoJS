let empleados = [];

function Empleado(legajo, nombre, apellido, fecha_nacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre; 
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.cargo = cargo;
}

function cargarEmpleado(){
    let legajo = document.getElementById("legajo").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let cargo = document.getElementById("cargo").value;
    let nuevoEmpleado = new Empleado(legajo, nombre, apellido, fecha_nacimiento, cargo);
    empleados.push(nuevoEmpleado);
    alert("Emplado registrado con éxito");
    limpiarForm();
}

function mostrarEmpleados(){
    let output;
    for(let empleado of empleados){
        for(let atributo in empleado){
            output += atributo + ": " + empleado[atributo] + " ";
        }
        output += "\n";
    }
    alert(output);    
}

function limpiarForm(){
    document.getElementById("legajo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha_nacimiento").value = "";
    document.getElementById("cargo").value = "";
}
