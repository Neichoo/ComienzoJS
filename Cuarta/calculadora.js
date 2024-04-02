function fsuma(){
    let num1 = +document.getElementById("primer_num").value;
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = num1 + num2;
    resultado_en_pantalla(resultado);

}
function fresta(){
    let num1 = +document.getElementById("primer_num").value;
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = num1 - num2;
    resultado_en_pantalla(resultado);
    
}
function fmultiplicacion(){
    let num1 = +document.getElementById("primer_num").value;
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = num1 * num2;
    resultado_en_pantalla(resultado);
    
}
function fdivision(){
    let num1 = +document.getElementById("primer_num").value;
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = num1 / num2;
    resultado_en_pantalla(resultado);
    
}
function fpotencia(){
    let num1 = +document.getElementById("primer_num").value;
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = Math.pow(num1, num2);
    resultado_en_pantalla(resultado);
    
}
function fraiz(){
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = Math.sqrt(num2);
    resultado_en_pantalla(resultado);
    
}
function fabsoluto(){
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = Math.abs(num2);
    resultado_en_pantalla(resultado);
    
}
function frandom(){
    let num1 = +document.getElementById("primer_num").value;
    let num2 = +document.getElementById("segundo_num").value;
    let resultado = Math.floor(Math.random() * ((num2 +1) - num1) + num1);
    resultado_en_pantalla(resultado);
    
}
function fround(){
    let resultado = +document.getElementById("resultado").value;
    let nuevo_resultado = Math.round(resultado);
    resultado_en_pantalla(nuevo_resultado);
    
}
function ffloor(){
    let resultado = +document.getElementById("resultado").value;
    let nuevo_resultado = Math.floor(resultado);
    resultado_en_pantalla(nuevo_resultado);
    
}
function fceil(){
    let resultado = +document.getElementById("resultado").value;
    let nuevo_resultado = Math.ceil(resultado);
    resultado_en_pantalla(nuevo_resultado);
    
}

function resultado_en_pantalla(resultado){
    document.getElementById("resultado").value = resultado;
}