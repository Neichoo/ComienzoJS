document.addEventListener('DOMContentLoaded', function(){
    const boton_jugar = document.getElementById("jugar");
    boton_jugar.addEventListener("click", function(){
        window.location.href = "juego.html";
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const boton_inicio = document.getElementById("inicio");
    boton_inicio.addEventListener("click", function(){
        window.location.href = "inicio.html";
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const boton_reiniciar = document.getElementById("reiniciar");
    boton_reiniciar.addEventListener("click", function(){
        window.location.href = "juego.html";
    })
})

function cuentaregresiva(){
    let cuenta = document.getElementById("CuentaRegresiva");
    let tiempo = 30;
    cuenta.textContent = tiempo;
    let intervalo = setInterval(refreshtime, 1000)
    function refreshtime(){
        tiempo --;
        cuenta.textContent = tiempo;
        if(tiempo <= 0){
            sonido_fin()
            cuenta.style.color = "red";
            clearInterval(intervalo);
        }
    }
}

window.onload = function(){
    cuentaregresiva();
}

function sonido_fin(){
    let sonido_fin_a = document.getElementById("Audio");
    sonido_fin_a.play();
}

function findeljuego(){
    let fecha = new Date();
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;
    let p4 = document.getElementById("p4").value;
    let p5 = document.getElementById("p5").value;
    let mensaje = fecha.toLocaleDateString("es-ES") + "\n" +
    "1. " + p1 + "\n" +
    "2. " + p2 + "\n" +
    "3. " + p3 + "\n" +
    "4. " + p4 + "\n" +
    "5. " + p5;
    if((p1==="Druddigon")&&(p2==="Feebas")&&(p3==="156")&&(p4==="Celebi")&&(p5==="8")){
        alert(mensaje + "\n" + "Enhorabuena, todo está correcto!");
    } else{
        alert(mensaje + "\n" + "Hay algo mal, sigue intentando!")
    }
}