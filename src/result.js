import  trashIcon  from "./img/bin.png";

export function createResult () {
    const container = document.querySelector('#container');
    
    const resultBox = document.createElement('div');
    resultBox.id = "result-box";
    container.appendChild(resultBox);

    const table = document.createElement('table');
    table.id = "result-table";
    
    const header = document.createElement('thead');
    header.id = "header";

    const headerRow = document.createElement('tr');
    header.appendChild(headerRow);
    const headerData = document.createElement('th');
    headerRow.appendChild(headerData);

    headerData.textContent = "TAF CIA C2 2025"
    headerData.setAttribute("colspan", 12);

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
    "ABDOMINAIS",
    "ÍNDICE",
    "BARRAS",
    "ÍNDICE",
    "ÍNDICE GERAL"
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