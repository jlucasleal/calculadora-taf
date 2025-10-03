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
    

    const titleInputContainer = document.createElement('div');
    titleInputContainer.id = "title-input-container"
    resultBox.appendChild(titleInputContainer);
    const titleInput = document.createElement('input');
    titleInput.id = "doc-title";
    titleInput.type = "text";
    titleInput.maxLength = "45";
    titleInput.placeholder = "TAF Nº / SU / ANO";
    const sendTitleBtn = document.createElement('img');
    sendTitleBtn.src = Checked;
    sendTitleBtn.id = "send-title-btn";
    titleInputContainer.appendChild(titleInput);
    titleInputContainer.appendChild(sendTitleBtn);

    function sendTitle() {
    if(!document.querySelector('#header-row')){
    const headerRow = document.createElement('tr');
    headerRow.id = "header-row";
    header.appendChild(headerRow);
    const headerTitle = document.createElement('th');
    headerTitle.id = "header-title";
    headerRow.appendChild(headerTitle);
    }

    let headerTitleNew = document.getElementById('header-title');
    headerTitleNew.textContent = titleInput.value;
    headerTitleNew.setAttribute("colspan", 12);
        }

    sendTitleBtn.addEventListener('click', ()=>{
        sendTitle();
        titleInput.focus()
    });

    titleInput.addEventListener('keyup', (event) => {
        if(event.key === 'Enter'){
            sendTitle();
        }
    })

    table.appendChild(header);
    resultBox.appendChild(table);




    
}

export const headerArr = [
    "POSTO\nGRAD",
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
    `MENÇÃO\nGERAL`
]

export function createRow (arr, id){

    const pdfBtn = document.createElement('button');
    pdfBtn.id = 'pdf-btn';
    pdfBtn.textContent = "Imprimir";
    pdfBtn.addEventListener('click', ()=> {
        print();
    })

    if (!document.querySelector('tr')){
        document.querySelector('#result-box').appendChild(pdfBtn);
    }

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