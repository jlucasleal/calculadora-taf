export class MakeData {
    constructor(name, grad, age, corrida, barra, abdominal, flexao) {
        this.name = name;
        this.grad = grad;
        this.age = age;
        this.corrida = corrida;
        this.barra = barra;
        this.abdominal = abdominal;
        this.flexao = flexao;

        this.ageRange = 0;
    }

    
    makeData() {
    this.name = document.querySelector('#name').value;
    this.grad = document.querySelector('#grad').value;
    this.age = document.querySelector('#age').value;
    this.corrida = document.querySelector('#corrida').value;
    this.barra = document.querySelector('#barra').value;
    this.abdominal = document.querySelector('#abdominal').value;
    this.flexao = document.querySelector('#flexao').value;
    this.data = {
        name: this.name,
        grad: this.grad,
        age: this.age,
        corrida: this.corrida,
        barra: this.barra,
        abdominal: this.abdominal,
        flexao: this.flexao
    };
    }

    getData() {
        console.log(this.data);
    }

    getAgeRange () {
        let ageRange = this.ageRange;
        const age = Number(this.age);

        if(age >= 18 && age <= 21){
            ageRange = 1;
            console.log(`Idade entre 18 e 21. Range de idade numero: ${ageRange}`);
        } else if(age >=22 && age <= 25){
            ageRange = 2;
            console.log(`Idade entre 22 e 25. Range de idade numero: ${ageRange}`);
        } else if(age >=26 && age <= 29){
            ageRange = 3;
            console.log(`Idade entre 26 e 29. Range de idade numero: ${ageRange}`);
        } else if(age >= 30 && age <= 33){
            ageRange = 4;
            console.log(`Idade entre 30 e 33. Range de idade numero: ${ageRange}`);
        } else if(age >= 34 && age <= 37){
            ageRange = 5;
            console.log(`Idade entre 34 e 37. Range de idade numero: ${ageRange}`);
        } else if(age >= 38 && age <= 41){
            ageRange = 6;
            console.log(`Idade entre 38 e 41. Range de idade numero: ${ageRange}`);
        } else if(age >= 42 && age <= 45){
            ageRange = 7;
            console.log(`Idade entre 42 e 45. Range de idade numero: ${ageRange}`);
        } else if(age >= 46 && age <= 49){
            ageRange = 8;
            console.log(`Idade entre 46 e 49. Range de idade numero: ${ageRange}`);
        } else if(age >=50 && age <=53){
            ageRange = 9;
            console.log(`Idade entre 50 e 53. Range de idade numero: ${ageRange}`);
        } else if(age >=54 && age <=57){
            ageRange = 10;
            console.log(`Idade entre 54 e 57. Range de idade numero: ${ageRange}`);
        } else if(age >=58 && age <=61){
            ageRange = 11;
            console.log(`Idade entre 58 e 61. Range de idade numero: ${ageRange}`);
        } else if(age >=62 && age <=65){
            ageRange = 12;
            console.log(`Idade entre 62 e 65. Range de idade numero: ${ageRange}`);
        } else {
            console.log("Idade fora do range");
        }
        return ageRange;
    }

    getGen(){
        const gen = document.querySelector("#gen").value;
        console.log(gen);
    }

    // getCorridaScore(){
    //     let ageRange = this.ageRange;
    //     const corrida = this.corrida;
    //     let corridaScore = 0;
    //     if (ageRange = 1){
    //         if(corrida <= 2599){
    //             corridaScore = 0;
    //             console.log("Índice Insuficiente");
    //         } else if(corrida >= 2600 && corrida <= 2799){
    //             corridaScore = 1;
    //             console.log("Índice R");
    //         } else if (corrida >= 2800 && corrida ){

    //         }
    //     }
    // }


}

