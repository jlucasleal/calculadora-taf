import { MakeInput } from "./make-input.js";
import { MakeSelect } from "./make-select.js";
import Interrogation from "./img/interrogation-mark.png";
import XBtn from "./img/x-btn.png";

export let sust = false;

export function makeSquareContent (){

    const square = document.querySelector('#square');

    const infoWrapper = document.createElement('div');
    infoWrapper.id = 'info-wrapper';
    square.appendChild(infoWrapper);

    function makeInfo(){
    if(!document.querySelector('#info')){

 

    const info = document.createElement('div');
    info.id = 'info';
    infoWrapper.appendChild(info);

    const xBtn = document.createElement('img');
    xBtn.src = XBtn;
    xBtn.id = 'x-btn';
    xBtn.alt = "Fechar";
    info.appendChild(xBtn);

    xBtn.addEventListener('click', () => {
        infoWrapper.removeChild(info);
    })

    const infoOne = document.createElement('p');
    infoOne.textContent = "LEMB: Linha de Ensino Militar Bélico";
    info.appendChild(infoOne);

    const infoTwo = document.createElement('p');
    infoTwo.textContent = "LEMS: Linha de Ensino Militar de Saúde";
    info.appendChild(infoTwo);

    const infoThree = document.createElement('p');
    infoThree.textContent = "LEMC: Linha de Ensino Militar Complementar";
    info.appendChild(infoThree);

    const infoFour = document.createElement('p');
    infoFour.textContent = "LEMCT: Linha de Ensino Militar de Científico-Tecnológico";
    info.appendChild(infoFour);
    } else if(document.querySelector('#info')){
            infoWrapper.removeChild(document.querySelector('#info'));
    }} 


    console.log('test');
   

    const grad = new MakeSelect("Posto/ Graduação: ", "grad", "grad", "SD EV", "SD EP", "CB", "3º Sgt", "2º Sgt", "1º Sgt", "ST", "Asp OF", "2º Ten", "1º Ten", "Cap", "Maj", "Ten Cel", "Cel", "Gen Bda", "Gen Div", "Gen Ex", "Al CFC", "Al CFST", "Al CPOR", "Al NPOR", "Selecionar");
    grad.makeSelect();
    document.getElementById("grad").value = "Selecionar";

    const name = new MakeInput("nome: ", "text", "name", "name", "");
    ///change for new build and deploy
    
    name.makeInput();
    const nameInput = document.getElementById("name");
    nameInput.value = "";
    nameInput.setAttribute('maxlength', '25');

    function inputLimit (input, limit){
    input.addEventListener("input", () => {
        let value = parseInt(input.value, 10);

        if (isNaN(value)) {
            input.value = "";
            return;
        }
        
    if (value > limit){
            input.value = limit;
        } else if ( value < 0){
            input.value = 0;
        }
    });
    }

    const age = new MakeInput("Idade: ", "number", "age", "age", "");
    age.makeInput();
    const ageInput = document.getElementById("age");
    ageInput.value = "";
    ageInput.setAttribute('min', '18');
    ageInput.setAttribute('max', '65');
    inputLimit(ageInput, 65);

    const corrida = new MakeInput("Corrida: ", "number", "corrida", "corrida", "");
    corrida.makeInput();
    const corridaInput = document.getElementById("corrida");
    corridaInput.value = "";
    corridaInput.setAttribute('min', '0');
    corridaInput.setAttribute('max', '4000');
    inputLimit(corridaInput, 3250);
    


    const barra = new MakeInput("Barras: ", "number", "barra", "barra", "");
    barra.makeInput();
    document.getElementById("barra").value = "";
    document.getElementById("barra").setAttribute('min', '0');
    document.getElementById("barra").setAttribute('max', '100');
    const barraWrapper = document.getElementById('barra-wrapper');



    const abdominal = new MakeInput("Abdominal: ", "number", "abdominal", "abdominal", "");
    abdominal.makeInput();
    document.getElementById("abdominal").value = ""; 

    const flexao = new MakeInput("Flexões: ", "number", "flexao", "flexao", "");
    flexao.makeInput();
    document.getElementById("flexao").value = "";

    const gen = new MakeSelect ("Gênero: ", "gen", "gen", "Masculino", "Feminino");
    gen.makeSelect();
    const seg = new MakeSelect ("Segmento: ", "seg", "seg", "LEMB", "LEMS/LEMC/LEMCT");
    seg.makeSelect();
    
    const segWrapper = document.getElementById('seg-wrapper');
    const infoShow = document.createElement('img');
    infoShow.src = Interrogation;
    infoShow.id = 'info-show';
    infoShow.alt = "O que é LEMB, LEMS, LEMC e LEMCT?";
    segWrapper.appendChild(infoShow);

    infoShow.addEventListener('click', () => {
        makeInfo();
    });
     const verification = new MakeInput("LEMB Feminino, idade entre 40 e 49?", "checkbox", "verification", "verification", "");
    verification.makeInput();
    const verificationInput = document.querySelector('#verification');

    verificationInput.addEventListener('change', () => {
        if(verificationInput.checked){
            sust = true;
            
            const segSelect = document.getElementById('seg');
            segSelect.value = "LEMB";
            const genSelect = document.getElementById('gen');
            genSelect.value = "Feminino";

            const guide = document.createElement('div');
            guide.id = 'guide';
            guide.textContent = '(Sustentação em segundos)';
            guide.className = 'input-label';
            barraWrapper.appendChild(guide);

        } else {
            barraWrapper.removeChild(guide);
            sust = false;
        }
        });
}