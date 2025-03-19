import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa() {
    const sujetos = ["Mi gato", "Mi padre", "Una vecina", "Leticia Sabater", "Tu planta", "Donald Trump", "Un pintor austriaco", "Tu madre", "Mi perro", "Jarvis", "El repartidor de pizza más lento del mundo", "Un ninja japonés", "El Power Ranger amarillo"];
    const acciones = ["se comió", "pintó", "perdió", "rompió", "robó", "escondió", "quemó", "vendió", "tiró", "usó como almohada", "destruyó accidentalmente",];
    const objetos = ["mis zapatos", "mi coche", "mi reloj", "mi peluca", "mi pasaporte", "mi bonoloto", "la última galleta", "mi contraseña del WiFi", "el postre de mi abuela", "la luna"];
    const lugares = ["en la calle", "en tu casa", "en el trabajo", "en Disneylandia", "en Mercadona", " ", "en el plató de La Ruleta de la Suerte", "en el bolsillo de Doraemon", "en el bar", "en el avión", "en el espacio exterior" ];

    const excusa = `${sujetos[Math.floor(Math.random() * sujetos.length)]} 
                    ${acciones[Math.floor(Math.random() * acciones.length)]} 
                    ${objetos[Math.floor(Math.random() * objetos.length)]} 
                    ${lugares[Math.floor(Math.random() * lugares.length)]}.`;

    document.getElementById("excuse").innerHTML = excusa;
}

window.onload = generarExcusa;
document.getElementById("generateExcuse").addEventListener("click", generarExcusa);

