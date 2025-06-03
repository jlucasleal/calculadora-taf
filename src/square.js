export function createSquare (){
    const container = document.querySelector('#container');
    const square = document.createElement('div');
    square.id = "square";
    container.appendChild(square);
}