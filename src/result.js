import  trashIcon  from "./img/bin.png";
import Checked from "./img/checked.png";

export function createResult () {
    const container = document.querySelector('#container');
    
    const resultBox = document.createElement('div');
    resultBox.id = "result-box";
    container.appendChild(resultBox);

    const table = document.createElement('table');
    table.id = "result-table";
    
    const header = document.createElement('thead');
    header.id = "header";


    const docTitleRow = document.createElement('tr');
    header.appendChild(docTitleRow);
    const docTitleHeader = document.createElement('th');
    docTitleRow.appendChild(docTitleHeader);
    const docTitle = document.createElement('input');
    docTitle.id = "doc-title";
    docTitle.type = "text";
    docTitle.maxLength = "6df0";

    docTitle.placeholder = "TAF Nº / SU / ANO";
    docTitleHeader.setAttribute("colspan", 12);
    docTitleHeader.appendChild(docTitle);
    const sendTitleBtn = document.createElement('img');
    sendTitleBtn.src = Checked;
    sendTitleBtn.id = "send-title-btn";
    docTitleHeader.appendChild(sendTitleBtn);

    sendTitleBtn.addEventListener('click', () => {

    if(!document.querySelector('#header-row')){
    const headerRow = document.createElement('tr');
    headerRow.id = "header-row";
    header.appendChild(headerRow);
    const headerTitle = document.createElement('th');
    headerTitle.id = "header-title";
    headerRow.appendChild(headerTitle);
    }

    let headerTitleNew = document.getElementById('header-title');
    headerTitleNew.textContent = docTitle.value;
    headerTitleNew.setAttribute("colspan", 12);
        })

    table.appendChild(header);
    resultBox.appendChild(table);




    
}

export const headerArr = [
    "POSTO/GRAD",
    "NOME",
    "IDADE",
    "CORRIDA",
    "ÍNDICE",
    "FLEXÃO",
    "ÍNDICE",
    "ABDOMINAL",
    "ÍNDICE",
    "BARRA",
    "ÍNDICE",
    "MENÇÃO GERAL"
]

export function createRow (arr, id){

    const table = document.querySelector('#result-table');

    const row = document.createElement('tr');
    row.classList.add('tr');
    table.appendChild(row);
    row.id = id;

    const trash = document.createElement('img');
    trash.src = trashIcon;
    trash.classList.add('trash-icon');
    trash.id = `trash-${id}`;

    trash.addEventListener('click', ()=>{
        table.removeChild(row);
    })
    

    arr.forEach(element => {
    const td = document.createElement('td');
    td.textContent = element;
    row.appendChild(td);
    row.appendChild(trash);
    });

  


}