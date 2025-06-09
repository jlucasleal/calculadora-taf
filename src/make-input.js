export class MakeInput {
    constructor (label, type, id, name, placeholder) {
        this.label = label;
        this.type = type;
        this.id = id;
        this.name = name;
        this.placeholder = placeholder
    }

    makeInput(){
    const input = document.createElement('input');
    input.type = this.type;
    input.id = this.id;
    input.placeholder = this.placeholder;

    const label = document.createElement('label');
    label.textContent = `${this.label}`;
    label.setAttribute("for", `${this.name}`);
    label.classList.add("input-label");

    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.classList.add("input-wrapper");
    wrapper.setAttribute("id", `${this.id}-wrapper`);


    const square = document.querySelector("#square");
    square.appendChild(wrapper);
    }

    makeInputQuestion(questionContainer){
    const input = document.createElement('input');
    input.type = this.type;
    input.id = this.id;
    input.placeholder = this.placeholder;

    const label = document.createElement('label');
    label.textContent = `${this.label}`;
    label.setAttribute("for", `${this.name}`);
    label.classList.add("input-label");

    const wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.classList.add("input-wrapper");
    wrapper.setAttribute("id", `${this.id}-wrapper`);


    const square = document.querySelector("#square");
    questionContainer.appendChild(wrapper);
    }

    addDataList(...options){
        const input = document.querySelector(`#${this.id}`);
        const dataList = document.createElement('datalist');
        dataList.id = `${this.id}-list`;

        options.forEach(optionValue => {
            const optionElement = document.createElement('option');
            optionElement.value = optionValue;
            dataList.appendChild(optionElement);
        })

    input.setAttribute('list', dataList.id);
        const square = document.querySelector("#square");
        square.appendChild(dataList);
    }
}