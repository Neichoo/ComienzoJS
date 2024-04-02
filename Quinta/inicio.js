function recomendar(parametro){
    let edad = document.getElementById("Edad").value;
    let recomendacion = document.getElementById("Recomendaciones");
    switch(parametro){
        case "Comedia":
            if(edad<13){
                mostrarpelicula("Paddington");
                recomendacion.value = "Paddington";
            }else{
                if(edad < 16){
                    mostrarpelicula("Spiderman");
                    recomendacion.value = "Spider-Man: Into the Spider-Verse";
                } else{
                    mostrarpelicula("Superbad");
                    recomendacion.value = "Superbad";
                }
            }
            break;
        case "Drama":
            if(edad<13){
                mostrarpelicula("Spirited Away");
                recomendacion.value = "Spirited Away";
            } else{
                if(edad < 16){
                    mostrarpelicula("Coco");
                    recomendacion.value = "Coco";
                } else{
                    mostrarpelicula("The Revenant");
                    recomendacion.value = "The Revenant";
                }
            }
            break;
        case "Musical":
            if(edad<13){
                mostrarpelicula("Moana");
                recomendacion.value = "Moana";
            } else{
                if(edad < 16){
                    mostrarpelicula("The Greatest Showman");
                    recomendacion.value = "The Greatest Showman";
                } else{
                    mostrarpelicula("Les Misérables");
                    recomendacion.value = "Les Misérables";
                }
            }
            break;
        case "Crimen":
            if(edad<13){
                mostrarpelicula("Zootopia");
                recomendacion.value = "Zootopia";
            } else{
                if(edad < 16){
                    mostrarpelicula("Percy Jackson");
                    recomendacion.value = "Percy Jackson & the Olympians: The Lightning Thief";
                } else{
                    mostrarpelicula("Game Night");
                    recomendacion.value = "Game Night";
                }
            }
            break;
    }
}

function mostrarpelicula(pelicula){
    pelicula += ".jpg";
    let imagen = document.createElement("img");
    imagen.src = pelicula;
    imagen.alt = "Imagen de la película";
    imagen.style.width = "400px";
    imagen.style.height = "500px"
    imagen.id = "imagenpeli";
    document.body.appendChild(imagen);
}