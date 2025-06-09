import { MakeInput } from "./make-input.js";
import { MakeSelect } from "./make-select.js";

export function makeSquareContent (){
    const grad = new MakeSelect("Posto/ Graduação: ", "grad", "grad", "SD EV", "SD EP", "CB", "3º Sgt", "2º Sgt", "1º Sgt", "ST", "Asp OF", "2º Ten", "1º Ten", "Cap", "Maj", "Ten Cel", "Cel", "Gen Bda", "Gen Div", "Gen Ex", "Al CFC", "Al CFST", "Al CPOR", "Al NPOR", "Selecionar");
    grad.makeSelect();
    document.getElementById("grad").value = "Selecionar";

    const name = new MakeInput("Nome: ", "text", "name", "name", "");
    
    name.makeInput();
    document.getElementById("name").value = "";
  
    const age = new MakeInput("idade: ", "number", "age", "age", "");
    age.makeInput();
    document.getElementById("age").value = "18";

    const corrida = new MakeInput("Corrida: ", "number", "corrida", "corrida", "");
    corrida.makeInput();
    document.getElementById("corrida").value = "0";

    const barra = new MakeInput("Barras: ", "number", "barra", "barra", "");
    barra.makeInput();
    document.getElementById("barra").value = "0";
    const barraWrapper = document.getElementById('barra-wrapper');
    const question = new MakeInput("sustentação (segundos)", "checkbox", "question", "question", "");
    question.makeInputQuestion(barraWrapper)

    const abdominal = new MakeInput("Abdominal: ", "number", "abdominal", "abdominal", "");
    abdominal.makeInput();
    document.getElementById("abdominal").value = "0"; 

    const flexao = new MakeInput("Flexões: ", "number", "flexao", "flexao", "");
    flexao.makeInput();
    document.getElementById("flexao").value = "0";

    // const gen = new MakeInput("Gênero", "text", "gen", "gen", "");
    const gen = new MakeSelect ("Gênero: ", "gen", "gen", "Masculino", "Feminino");
    gen.makeSelect();
    // gen.makeInput();
    // document.getElementById("gen").value = "Masculino";
    const seg = new MakeSelect ("Segmento: ", "seg", "seg", "LEMB", "LEMS/LEMC/LEMCT");
    seg.makeSelect();

}