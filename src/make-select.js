export class MakeSelect {
// constructor (label, id, name, placeholder) {
// const grad = new makeSelect("Posto/ Graduação: ", "grad", "grad", "SD EV", "SD EP", "CB", "3º Sgt", "2º Sgt", "1º Sgt", "ST", "Asp OF", "2º Ten", "1º Ten", "Cap", "Maj", "Ten Cel", "Cel", "Gen Bda", "Gen Div", "Gen Ex", Al CFC", "Al CFST", "Al CPOR", "Al NPOR");
    constructor(label, id, name, ...options){
        this.label = label;
        this.id = id;
        this.name = name;
        this.options = options;
    }

    makeSelect(){
        const select = document.createElement('select');
        select.id = this.id;
        select.name = this.name;

        this.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        })
        
        const label = document.createElement('label');
        label.textContent = `${this.label}`;
        label.setAttribute("for", `${this.name}`);
        label.classList.add("select-label");

        const wrapper = document.createElement('div');
        wrapper.appendChild(label);
        wrapper.appendChild(select);
        wrapper.setAttribute("id", `${this.id}-wrapper`);

        const square = document.querySelector("#square");
        square.appendChild(wrapper);
    }

}