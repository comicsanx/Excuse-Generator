import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa() {
    const sujetos = ["Mi gato", "Mi padre", "Una vecina", "Leticia Sabater", "Tu planta"];
    const acciones = ["se comió", "pintó", "perdió", "rompió", "robó"];
    const objetos = ["mis zapatos", "mi coche", "mi reloj", "mi peluca", "mi pasaporte"];
    const lugares = ["en la calle", "en tu casa", "en el trabajo", "en Disneylandia", "en el Mercadona"];

    const excusa = `${sujetos[Math.floor(Math.random() * sujetos.length)]} 
                    ${acciones[Math.floor(Math.random() * acciones.length)]} 
                    ${objetos[Math.floor(Math.random() * objetos.length)]} 
                    ${lugares[Math.floor(Math.random() * lugares.length)]}.`;

    document.getElementById("excuse").innerHTML = excusa;
}

window.onload = generarExcusa;
document.getElementById("generateExcuse").addEventListener("click", generarExcusa);

