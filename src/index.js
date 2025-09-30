import "./styles.css";
import { createSquare } from "./square.js";
import { makeSquareContent } from "./content.js";
import { makeSendBtn } from "./send.js";
import { MakeData } from "./data.js";
import { createResult, createRow, headerArr } from "./result.js";
import { credits } from "./credits.js";

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
createResult();
credits();

createRow(headerArr, "first-line");
const firstLine = document.getElementById('first-line');
const firstTrash = document.getElementById('trash-first-line');
firstLine.removeChild(firstTrash);

let index = 0;
document.getElementById("send-btn").addEventListener("click", () => {
    const firstPerson = new MakeData();
    firstPerson.makeData();
    firstPerson.getData();
    firstPerson.getAgeRange();
    firstPerson.getGen();
    firstPerson.getSeg();
    firstPerson.getCorridaScore();
    firstPerson.getFlexaoScore();
    firstPerson.getAbdScore();
    firstPerson.getBarraScore();
    firstPerson.getIndex();


    createRow(firstPerson.getArray(), `row-${index}`);
    index ++;
    document.querySelector('#name').focus();
});