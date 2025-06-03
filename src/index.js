import "./styles.css";
import { createSquare } from "./square.js";
import { makeSquareContent } from "./content.js";
import { makeSendBtn } from "./send.js";
import { MakeData } from "./data.js";

const container = document.querySelector('#container');

const projectTop = document.createElement('div');
projectTop.id = "project-top";
container.appendChild(projectTop);

const projectTitle = document.createElement('div');
projectTitle.id = "project-title"
projectTitle.textContent = "CALCULADORA DE ÍNDICES DO TAF ATUALIZADA";
projectTop.appendChild(projectTitle);

createSquare();
makeSquareContent();
makeSendBtn();

document.getElementById("send-btn").addEventListener("click", () => {
    const firstPerson = new MakeData();
    firstPerson.makeData();
    firstPerson.getData();
    firstPerson.getAgeRange();
    firstPerson.getGen();
});