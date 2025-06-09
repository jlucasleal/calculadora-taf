export class MakeData {
    constructor(grad, name, age, corrida, barra, abdominal, flexao) {
        this.grad = grad;
        this.name = name;
        this.age = age;
        this.corrida = corrida;
        this.barra = barra;
        this.abdominal = abdominal;
        this.flexao = flexao;

        this.ageRange = 0;
        this.genType = 0;
        this.segType = 0;
        this.corridaScore = 0;
        this.flexaoScore = 0;
        this.abdScore = 0;
        this.barraScore = 0;

        this.corridaIndex = 0;
        this.flexaoIndex = 0;
        this.abdIndex = 0;
        this.barraIndex = 0;
        this.allScores = [];
        this.finalIndex = 0;
    }
    
    makeData() {
    this.grad = document.querySelector('#grad').value;
    this.name = document.querySelector('#name').value;
    this.age = document.querySelector('#age').value;
    this.corrida = document.querySelector('#corrida').value;
    this.barra = document.querySelector('#barra').value;
    this.abdominal = document.querySelector('#abdominal').value;
    this.flexao = document.querySelector('#flexao').value;
    this.data = {
        grad: this.grad,
        name: this.name,
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

    getIndex(){
    this.allScores = [
        this.corridaScore,
        this.flexaoScore,
        this.abdScore,
        this.barraScore
    ];

    if(this.corridaScore == 0){
        this.corridaIndex = "Inapto";
    } else if(this.corridaScore == 1){
        this.corridaIndex = "I";
    } else if(this.corridaScore == 2){
        this.corridaIndex = "R";
    } else if(this.corridaScore == 3){
        this.corridaIndex = "B";
    } else if(this.corridaScore == 4){
        this.corridaIndex = "MB";
    } else if(this.corridaScore == 5){
        this.corridaIndex = "E";
    } else if(this.corridaScore == 6){
        this.corridaIndex = "Apto";
    } else if(this.corridaScore == 7){
        this.corridaIndex = "Não Realiza";
    }

            if(this.flexaoScore == 0){
        this.flexaoIndex = "Inapto";
    } else if(this.flexaoScore == 1){
        this.flexaoIndex = "I";
    } else if(this.flexaoScore == 2){
        this.flexaoIndex = "R";
    } else if(this.flexaoScore == 3){
        this.flexaoIndex = "B";
    } else if(this.flexaoScore == 4){
        this.flexaoIndex = "MB";
    } else if(this.flexaoScore == 5){
        this.flexaoIndex = "E";
    } else if(this.flexaoScore == 6){
        this.flexaoIndex = "Apto";
    } else if(this.flexaoScore == 7){
        this.flexaoIndex = "Não Realiza";
    }

            if(this.abdScore == 0){
        this.abdIndex = "Inapto";
    } else if(this.abdScore == 1){
        this.abdIndex = "I";
    } else if(this.abdScore == 2){
        this.abdIndex = "R";
    } else if(this.abdScore == 3){
        this.abdIndex = "B";
    } else if(this.abdScore == 4){
        this.abdIndex = "MB";
    } else if(this.abdScore == 5){
        this.abdIndex = "E";
    } else if(this.abdScore == 6){
        this.abdIndex = "Apto";
    } else if(this.abdScore == 7){
        this.abdIndex = "Não Realiza";
    }

            if(this.barraScore == 0){
        this.barraIndex = "Inapto";
    } else if(this.barraScore == 1){
        this.barraIndex = "I";
    } else if(this.barraScore == 2){
        this.barraIndex = "R";
    } else if(this.barraScore == 3){
        this.barraIndex = "B";
    } else if(this.barraScore == 4){
        this.barraIndex = "MB";
    } else if(this.barraScore == 5){
        this.barraIndex = "E";
    } else if(this.barraScore == 6){
        this.barraIndex = "Apto";
    } else if(this.barraScore == 7){
        this.barraIndex = "Não Realiza";
    }

    if(this.allScores.includes(0)){
        this.finalIndex = "Inapto";
    } else if(this.allScores.includes(1)){
        this.finalIndex = "I";
    } else if(this.allScores.includes(2)){
        this.finalIndex = "R";
    } else if(this.allScores.includes(3)){
        this.finalIndex = "B";
    } else if(this.allScores.includes(4)){
        this.finalIndex = "MB";
    } else if(this.allScores.includes(5)){
        this.finalIndex = "E";
    } else if(this.allScores.includes(6)){
        this.finalIndex = "Apto";
    } else if(this.allScores.includes(7)){
        this.finalIndex = "Não Realiza";
    }
    }

        getArray() {
        const array = [
            `${this.grad}`,
            `${this.name}`,
            `${this.age}`,
            `${this.corrida}`,
            `${this.corridaIndex}`,
            `${this.flexao}`,
            `${this.flexaoIndex}`,
            `${this.abdominal}`,
            `${this.abdIndex}`,
            `${this.barra}`,
            `${this.barraIndex}`,
            `${this.finalIndex}`           
        ]
        return array;
    }

    getAgeRange () {
        let ageRange = 0;
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
        this.ageRange = ageRange;
        return ageRange;
    }

    getGen(){
        const gen = document.querySelector("#gen")
        if (gen.value == "Masculino"){
            this.genType = 1;
            console.log("Gênero Masculino selecionado.");
        } else if (gen.value == "Feminino") {
            this.genType = 2;
            console.log("Gênero Feminino selecionado.");
        }
    }

    getSeg() {
        const seg = document.querySelector("#seg");
        if (seg.value == "LEMB") {
            console.log("Segmento LEMB selecionado.");
            this.segType = 1;
        } else if (seg.value == "LEMS/LEMC/LEMCT") {
            console.log("Segmento LEMS/LEMC/LEMCT selecionado.");
            this.segType = 2;
        }
    }

    getCorridaScore() {
        let corridaScore = 0;
        let ageRange = this.ageRange;
        let corrida = Number(this.corrida);
        // Score de corrida para LEMB Masculino
        if (this.genType == 1 && this.segType == 1){
            if (ageRange == 1){
                if (corrida <= 2599){
                    corridaScore = 1;
                } else if (corrida >= 2600 && corrida <= 2799){
                    corridaScore = 2;
                } else if (corrida >= 2800 && corrida <= 3149){
                    corridaScore = 3;
                } else if (corrida >= 3150 && corrida <= 3199){
                    corridaScore = 4;
                } else if (corrida >= 3200) {
                    corridaScore = 5;
                }
            } else if (ageRange == 2){
                if (corrida <= 2699){
                    corridaScore = 1;
                } else if (corrida >= 2700 && corrida <= 2849){
                    corridaScore = 2;
                } else if (corrida >= 2850 && corrida <= 3099){
                    corridaScore = 3;
                } else if (corrida >= 3100 && corrida <= 3249){
                    corridaScore = 4;
                } else if (corrida >= 3250) {
                    corridaScore = 5;
                }
            } else if (ageRange == 3){
                if (corrida <= 2599){
                    corridaScore = 1;
                } else if (corrida >= 2600 && corrida <= 2749){
                    corridaScore = 2;
                } else if (corrida >= 2750 && corrida <= 2999){
                    corridaScore = 3;
                } else if (corrida >= 3000 && corrida <= 3149){
                    corridaScore = 4;
                } else if (corrida >= 3150) {
                    corridaScore = 5;
                }
            } else if (ageRange == 4){
                if (corrida <= 2549){
                    corridaScore = 1;
                } else if (corrida >= 2550 && corrida <= 2649){
                    corridaScore = 2;
                } else if (corrida >= 2650 && corrida <= 2899){
                    corridaScore = 3;
                } else if (corrida >= 2900 && corrida <= 3099){
                    corridaScore = 4;
                } else if (corrida >= 3100) {
                    corridaScore = 5;
                }
            } else if (ageRange == 5){
                if (corrida <= 2449){
                    corridaScore = 1;
                } else if (corrida >= 2450 && corrida <= 2549){
                    corridaScore = 2;
                } else if (corrida >= 2550 && corrida <= 2799){
                    corridaScore = 3;
                } else if (corrida >= 2800 && corrida <= 2949){
                    corridaScore = 4;
                } else if (corrida >= 2950) {
                    corridaScore = 5;
                }
            } 
            else if (ageRange == 6){
                if (corrida <= 2349){
                    corridaScore = 1;
                } else if (corrida >= 2350 && corrida <= 2449){
                    corridaScore = 2;
                } else if (corrida >= 2450 && corrida <= 2699){
                    corridaScore = 3;
                } else if (corrida >= 2700 && corrida <= 2849){
                    corridaScore = 4;
                } else if (corrida >= 2850) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 7){
                if (corrida <= 2249){
                    corridaScore = 1;
                } else if (corrida >= 2250 && corrida <= 2399){
                    corridaScore = 2;
                } else if (corrida >= 2400 && corrida <= 2599){
                    corridaScore = 3;
                } else if (corrida >= 2600 && corrida <= 2749){
                    corridaScore = 4;
                } else if (corrida >= 2750) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 8){
                if (corrida <= 2149){
                    corridaScore = 1;
                } else if (corrida >= 2150 && corrida <= 2299){
                    corridaScore = 2;
                } else if (corrida >= 2300 && corrida <= 2499){
                    corridaScore = 3;
                } else if (corrida >= 2500 && corrida <= 2649){
                    corridaScore = 4;
                } else if (corrida >= 2650) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 9){
                if (corrida <= 1899){
                    corridaScore = 0;
                } else if (corrida >= 1900) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1799){
                    corridaScore = 0;
                } else if (corrida >= 1800) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1599){
                    corridaScore = 0;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1399){
                    corridaScore = 0;
                } else if (corrida >= 1400) {
                    corridaScore = 6;
                }
            } 
        } else if (this.genType == 2 && this.segType == 1){ 
            // Score de corrida para LEMB Feminino
            if (ageRange == 1){
                if (corrida <= 2099){
                    corridaScore = 1;
                } else if (corrida >= 2100 && corrida <= 2199){
                    corridaScore = 2;
                } else if (corrida >= 2200 && corrida <= 2449){
                    corridaScore = 3;
                } else if (corrida >= 2450 && corrida <= 2599){
                    corridaScore = 4;
                } else if (corrida >= 2600) {
                    corridaScore = 5;
                }
            } else if (ageRange == 2){
                if (corrida <= 2149){
                    corridaScore = 1;
                } else if (corrida >= 2150 && corrida <= 2249){
                    corridaScore = 2;
                } else if (corrida >= 2250 && corrida <= 2449){
                    corridaScore = 3;
                } else if (corrida >= 2450 && corrida <= 2649){
                    corridaScore = 4;
                } else if (corrida >= 2650) {
                    corridaScore = 5;
                }
            } else if (ageRange == 3){
                if (corrida <= 2099){
                    corridaScore = 1;
                } else if (corrida >= 2100 && corrida <= 2199){
                    corridaScore = 2;
                } else if (corrida >= 2200 && corrida <= 2399){
                    corridaScore = 3;
                } else if (corrida >= 2400 && corrida <= 2599){
                    corridaScore = 4;
                } else if (corrida >= 2600) {
                    corridaScore = 5;
                }
            } else if (ageRange == 4){
                if (corrida <= 2049){
                    corridaScore = 1;
                } else if (corrida >= 2050 && corrida <= 2149){
                    corridaScore = 2;
                } else if (corrida >= 2150 && corrida <= 2349){
                    corridaScore = 3;
                } else if (corrida >= 2350 && corrida <= 2549){
                    corridaScore = 4;
                } else if (corrida >= 2550) {
                    corridaScore = 5;
                }
            } else if (ageRange == 5){
                if (corrida <= 1999){
                    corridaScore = 1;
                } else if (corrida >= 2000 && corrida <= 2099){
                    corridaScore = 2;
                } else if (corrida >= 2100 && corrida <= 2299){
                    corridaScore = 3;
                } else if (corrida >= 2300 && corrida <= 2499){
                    corridaScore = 4;
                } else if (corrida >= 2500) {
                    corridaScore = 5;
                }
            } 
            else if (ageRange == 6){
                if (corrida <= 1899){
                    corridaScore = 1;
                } else if (corrida >= 1900 && corrida <= 1999){
                    corridaScore = 2;
                } else if (corrida >= 2000 && corrida <= 2199){
                    corridaScore = 3;
                } else if (corrida >= 2200 && corrida <= 2399){
                    corridaScore = 4;
                } else if (corrida >= 2400) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 7){
                if (corrida <= 1849){
                    corridaScore = 1;
                } else if (corrida >= 1850 && corrida <= 1949){
                    corridaScore = 2;
                } else if (corrida >= 1950 && corrida <= 2149){
                    corridaScore = 3;
                } else if (corrida >= 2150 && corrida <= 2299){
                    corridaScore = 4;
                } else if (corrida >= 2300) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 8){
                if (corrida <= 1749){
                    corridaScore = 1;
                } else if (corrida >= 1750 && corrida <= 1849){
                    corridaScore = 2;
                } else if (corrida >= 1850 && corrida <= 2049){
                    corridaScore = 3;
                } else if (corrida >= 2050 && corrida <= 2249){
                    corridaScore = 4;
                } else if (corrida >= 2250) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 9){
                if (corrida <= 1599){
                    corridaScore = 0;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1499){
                    corridaScore = 0;
                } else if (corrida >= 1500) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1299){
                    corridaScore = 0;
                } else if (corrida >= 1300) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1099){
                    corridaScore = 0;
                } else if (corrida >= 1100) {
                    corridaScore = 6;
                }
            } 
        } else if (this.genType == 1 && this.segType == 2){ 
            // Score de corrida para não LEMB Masculino
            if (ageRange == 1){
                if (corrida <= 2599){
                    corridaScore = 1;
                } else if (corrida >= 2600 && corrida <= 2699){
                    corridaScore = 2;
                } else if (corrida >= 2700 && corrida <= 2899){
                    corridaScore = 3;
                } else if (corrida >= 2900 && corrida <= 2999){
                    corridaScore = 4;
                } else if (corrida >= 3000) {
                    corridaScore = 5;
                }
            } else if (ageRange == 2){
                if (corrida <= 2699){
                    corridaScore = 1;
                } else if (corrida >= 2700 && corrida <= 2799){
                    corridaScore = 2;
                } else if (corrida >= 2800 && corrida <= 2949){
                    corridaScore = 3;
                } else if (corrida >= 2950 && corrida <= 3049){
                    corridaScore = 4;
                } else if (corrida >= 3050) {
                    corridaScore = 5;
                }
            } else if (ageRange == 3){
                if (corrida <= 2599){
                    corridaScore = 1;
                } else if (corrida >= 2600 && corrida <= 2699){
                    corridaScore = 2;
                } else if (corrida >= 2700 && corrida <= 2849){
                    corridaScore = 3;
                } else if (corrida >= 2850 && corrida <= 2949){
                    corridaScore = 4;
                } else if (corrida >= 2950) {
                    corridaScore = 5;
                }
            } else if (ageRange == 4){
                if (corrida <= 2549){
                    corridaScore = 1;
                } else if (corrida >= 2550 && corrida <= 2649){
                    corridaScore = 2;
                } else if (corrida >= 2650 && corrida <= 2799){
                    corridaScore = 3;
                } else if (corrida >= 2800 && corrida <= 2899){
                    corridaScore = 4;
                } else if (corrida >= 2900) {
                    corridaScore = 5;
                }
            } else if (ageRange == 5){
                if (corrida <= 2449){
                    corridaScore = 1;
                } else if (corrida >= 2450 && corrida <= 2549){
                    corridaScore = 2;
                } else if (corrida >= 2550 && corrida <= 2649){
                    corridaScore = 3;
                } else if (corrida >= 2650 && corrida <= 2749){
                    corridaScore = 4;
                } else if (corrida >= 2750) {
                    corridaScore = 5;
                }
            } 
            else if (ageRange == 6){
                if (corrida <= 2349){
                    corridaScore = 1;
                } else if (corrida >= 2350 && corrida <= 2449){
                    corridaScore = 2;
                } else if (corrida >= 2450 && corrida <= 2549){
                    corridaScore = 3;
                } else if (corrida >= 2550 && corrida <= 2649){
                    corridaScore = 4;
                } else if (corrida >= 2650) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 7){
                if (corrida <= 2249){
                    corridaScore = 1;
                } else if (corrida >= 2250 && corrida <= 2349){
                    corridaScore = 2;
                } else if (corrida >= 2350 && corrida <= 2499){
                    corridaScore = 3;
                } else if (corrida >= 2500 && corrida <= 2599){
                    corridaScore = 4;
                } else if (corrida >= 2600) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 8){
                if (corrida <= 2149){
                    corridaScore = 1;
                } else if (corrida >= 2150 && corrida <= 2299){
                    corridaScore = 2;
                } else if (corrida >= 2300 && corrida <= 2399){
                    corridaScore = 3;
                } else if (corrida >= 2400 && corrida <= 2499){
                    corridaScore = 4;
                } else if (corrida >= 2500) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 9){
                if (corrida <= 1899){
                    corridaScore = 0;
                } else if (corrida >= 1900) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1799){
                    corridaScore = 0;
                } else if (corrida >= 1800) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1599){
                    corridaScore = 0;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1399){
                    corridaScore = 0;
                } else if (corrida >= 1400) {
                    corridaScore = 6;
                }
            } 
        }else if (this.genType == 2 && this.segType == 2){ 
            if (ageRange == 1){
                if (corrida <= 2099){
                    corridaScore = 1;
                } else if (corrida >= 2100 && corrida <= 2199){
                    corridaScore = 2;
                } else if (corrida >= 2200 && corrida <= 2299){
                    corridaScore = 3;
                } else if (corrida >= 2300 && corrida <= 2399){
                    corridaScore = 4;
                } else if (corrida >= 2400) {
                    corridaScore = 5;
                }
            } else if (ageRange == 2){
                if (corrida <= 2149){
                    corridaScore = 1;
                } else if (corrida >= 2150 && corrida <= 2249){
                    corridaScore = 2;
                } else if (corrida >= 2250 && corrida <= 2349){
                    corridaScore = 3;
                } else if (corrida >= 2350 && corrida <= 2449){
                    corridaScore = 4;
                } else if (corrida >= 2450) {
                    corridaScore = 5;
                }
            } else if (ageRange == 3){
                if (corrida <= 2099){
                    corridaScore = 1;
                } else if (corrida >= 2100 && corrida <= 2199){
                    corridaScore = 2;
                } else if (corrida >= 2200 && corrida <= 2299){
                    corridaScore = 3;
                } else if (corrida >= 2300 && corrida <= 2399){
                    corridaScore = 4;
                } else if (corrida >= 2400) {
                    corridaScore = 5;
                }
            } else if (ageRange == 4){
                if (corrida <= 2049){
                    corridaScore = 1;
                } else if (corrida >= 2050 && corrida <= 2149){
                    corridaScore = 2;
                } else if (corrida >= 2150 && corrida <= 2249){
                    corridaScore = 3;
                } else if (corrida >= 2250 && corrida <= 2349){
                    corridaScore = 4;
                } else if (corrida >= 2350) {
                    corridaScore = 5;
                }
            } else if (ageRange == 5){
                if (corrida <= 1999){
                    corridaScore = 1;
                } else if (corrida >= 2000 && corrida <= 2099){
                    corridaScore = 2;
                } else if (corrida >= 2100 && corrida <= 2199){
                    corridaScore = 3;
                } else if (corrida >= 2200 && corrida <= 2299){
                    corridaScore = 4;
                } else if (corrida >= 2300) {
                    corridaScore = 5;
                }
            } 
            else if (ageRange == 6){
                if (corrida <= 1899){
                    corridaScore = 1;
                } else if (corrida >= 1900 && corrida <= 1999){
                    corridaScore = 2;
                } else if (corrida >= 2000 && corrida <= 2149){
                    corridaScore = 3;
                } else if (corrida >= 2150 && corrida <= 2249){
                    corridaScore = 4;
                } else if (corrida >= 2250) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 7){
                if (corrida <= 1849){
                    corridaScore = 1;
                } else if (corrida >= 1850 && corrida <= 1949){
                    corridaScore = 2;
                } else if (corrida >= 1950 && corrida <= 2049){
                    corridaScore = 3;
                } else if (corrida >= 2050 && corrida <= 2149){
                    corridaScore = 4;
                } else if (corrida >= 2150) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 8){
                if (corrida <= 1749){
                    corridaScore = 1;
                } else if (corrida >= 1750 && corrida <= 1849){
                    corridaScore = 2;
                } else if (corrida >= 1850 && corrida <= 1949){
                    corridaScore = 3;
                } else if (corrida >= 1950 && corrida <= 2049){
                    corridaScore = 4;
                } else if (corrida >= 2050) {
                    corridaScore = 5;
                }
            }
            else if (ageRange == 9){
                if (corrida <= 1599){
                    corridaScore = 0;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1499){
                    corridaScore = 0;
                } else if (corrida >= 1500) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1299){
                    corridaScore = 0;
                } else if (corrida >= 1300) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1099){
                    corridaScore = 0;
                } else if (corrida >= 1100) {
                    corridaScore = 6;
                }
            } 
        }
        this.corridaScore = corridaScore;
        console.log(`Score de corrida: ${this.corridaScore}`);
        return corridaScore;
    }

    getFlexaoScore () {
        let flexaoScore = 0;
        let ageRange = this.ageRange;
        let flexao = Number(this.flexao);

        //FLEXAO LEMB MASC
        if ( this.genType == 1 && this.segType == 1){
            if (ageRange == 1){
                if(flexao <= 21){
                    flexaoScore = 1;
                } else if (flexao >= 22 && flexao <= 24){
                    flexaoScore = 2;
                } else if (flexao  >= 25 && flexao <= 33){
                    flexaoScore = 3;
                } else if (flexao >= 34 && flexao <= 38){
                    flexaoScore = 4;
                } else if (flexao >= 39){
                    flexaoScore = 5;
                }
            } else if (ageRange == 2){
                if(flexao <= 23){
                    flexaoScore = 1;
                } else if (flexao >= 24 && flexao <= 26){
                    flexaoScore = 2;
                } else if (flexao  >= 27 && flexao <= 35){
                    flexaoScore = 3;
                } else if (flexao >= 36 && flexao <= 40){
                    flexaoScore = 4;
                } else if (flexao >= 41){
                    flexaoScore = 5;
                }
            } else if (ageRange == 3){
                if(flexao <= 21){
                    flexaoScore = 1;
                } else if (flexao >= 22 && flexao <= 24){
                    flexaoScore = 2;
                } else if (flexao  >= 25 && flexao <= 33){
                    flexaoScore = 3;
                } else if (flexao >= 34 && flexao <= 38){
                    flexaoScore = 4;
                } else if (flexao >= 39){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 4){
                if(flexao <= 20){
                    flexaoScore = 1;
                } else if (flexao >= 21 && flexao <= 23){
                    flexaoScore = 2;
                } else if (flexao  >= 24 && flexao <= 31){
                    flexaoScore = 3;
                } else if (flexao >= 32 && flexao <= 36){
                    flexaoScore = 4;
                } else if (flexao >= 37){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 5){
                if(flexao <= 17){
                    flexaoScore = 1;
                } else if (flexao >= 18 && flexao <= 20){
                    flexaoScore = 2;
                } else if (flexao  >= 21 && flexao <= 28){
                    flexaoScore = 3;
                } else if (flexao >= 29 && flexao <= 33){
                    flexaoScore = 4;
                } else if (flexao >= 34){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 6){
                if(flexao <= 16){
                    flexaoScore = 1;
                } else if (flexao >= 17 && flexao <= 19){
                    flexaoScore = 2;
                } else if (flexao  >= 20 && flexao <= 27){
                    flexaoScore = 3;
                } else if (flexao >= 28 && flexao <= 31){
                    flexaoScore = 4;
                } else if (flexao >= 32){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 7){
                if(flexao <= 14){
                    flexaoScore = 1;
                } else if (flexao >= 15 && flexao <= 17){
                    flexaoScore = 2;
                } else if (flexao  >= 18 && flexao <= 24){
                    flexaoScore = 3;
                } else if (flexao >= 25 && flexao <= 28){
                    flexaoScore = 4;
                } else if (flexao >= 29){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 8){
                if(flexao <= 11){
                    flexaoScore = 1;
                } else if (flexao >= 12 && flexao <= 14){
                    flexaoScore = 2;
                } else if (flexao  >= 15 && flexao <= 21){
                    flexaoScore = 3;
                } else if (flexao >= 22 && flexao <= 25){
                    flexaoScore = 4;
                } else if (flexao >= 26){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 9){
                if(flexao >= 11){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }              
            } else if (ageRange == 10){
                if(flexao >= 9){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 11){
                if(flexao >= 8){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 12){
                if(flexao >= 6){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                 
            }
            // FLEXAO LEMB FEMININO
        } else if (this.genType == 2 && this.segType == 1) {
            if (ageRange == 1){
                if(flexao <= 10){
                    flexaoScore = 1;
                } else if (flexao == 11){
                    flexaoScore = 2;
                } else if (flexao  >= 12 && flexao <= 16){
                    flexaoScore = 3;
                } else if (flexao >= 17 && flexao <= 19){
                    flexaoScore = 4;
                } else if (flexao >= 20){
                    flexaoScore = 5;
                }
            } else if (ageRange == 2){
                if(flexao <= 11){
                    flexaoScore = 1;
                } else if (flexao == 12){
                    flexaoScore = 2;
                } else if (flexao  >= 13 && flexao <= 18){
                    flexaoScore = 3;
                } else if (flexao >= 19 && flexao <= 21){
                    flexaoScore = 4;
                } else if (flexao >= 22){
                    flexaoScore = 5;
                }
            } else if (ageRange == 3){
                if(flexao <= 10){
                    flexaoScore = 1;
                } else if (flexao == 11){
                    flexaoScore = 2;
                } else if (flexao  >= 12 && flexao <= 16){
                    flexaoScore = 3;
                } else if (flexao >= 17 && flexao <= 19){
                    flexaoScore = 4;
                } else if (flexao >= 20){
                    flexaoScore = 5;
                }              
            } else if (ageRange == 4){
                if(flexao <= 9){
                    flexaoScore = 1;
                } else if (flexao == 10){
                    flexaoScore = 2;
                } else if (flexao  >= 11 && flexao <= 15){
                    flexaoScore = 3;
                } else if (flexao >= 16 && flexao <= 18){
                    flexaoScore = 4;
                } else if (flexao >= 19){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 5){
                if(flexao <= 8){
                    flexaoScore = 1;
                } else if (flexao == 9){
                    flexaoScore = 2;
                } else if (flexao  >= 10 && flexao <= 14){
                    flexaoScore = 3;
                } else if (flexao >= 15 && flexao <= 17){
                    flexaoScore = 4;
                } else if (flexao >= 18){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 6){
                if(flexao <= 7){
                    flexaoScore = 1;
                } else if (flexao == 8){
                    flexaoScore = 2;
                } else if (flexao  >= 9 && flexao <= 13){
                    flexaoScore = 3;
                } else if (flexao >= 14 && flexao <= 16){
                    flexaoScore = 4;
                } else if (flexao >= 17){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 7){
                if(flexao <= 6){
                    flexaoScore = 1;
                } else if (flexao == 7){
                    flexaoScore = 2;
                } else if (flexao  >= 8 && flexao <= 12){
                    flexaoScore = 3;
                } else if (flexao >= 13 && flexao <= 15){
                    flexaoScore = 4;
                } else if (flexao >= 16){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 8){
                if(flexao <= 5){
                    flexaoScore = 1;
                } else if (flexao == 6){
                    flexaoScore = 2;
                } else if (flexao  >= 7 && flexao <= 10){
                    flexaoScore = 3;
                } else if (flexao >= 11 && flexao <= 13){
                    flexaoScore = 4;
                } else if (flexao >= 14){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 9){
                if(flexao >= 5){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }              
            } else if (ageRange == 10){
                if(flexao >= 4){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 11){
                if(flexao >= 3){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 12){
                if(flexao >= 2){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                 
            }
        // FLEXAO N LEMB MASC
        } else if (this.genType == 1 && this.segType == 2) {
            if (ageRange == 1){
                if(flexao <= 21){
                    flexaoScore = 1;
                } else if (flexao >= 22 && flexao <= 24){
                    flexaoScore = 2;
                } else if (flexao  >= 25 && flexao <= 29){
                    flexaoScore = 3;
                } else if (flexao >= 30 && flexao <= 32){
                    flexaoScore = 4;
                } else if (flexao >= 33){
                    flexaoScore = 5;
                }
            } else if (ageRange == 2){
                if(flexao <= 23){
                    flexaoScore = 1;
                } else if (flexao >= 24 && flexao <= 26){
                    flexaoScore = 2;
                } else if (flexao  >= 27 && flexao <= 31){
                    flexaoScore = 3;
                } else if (flexao >= 32 && flexao <= 34){
                    flexaoScore = 4;
                } else if (flexao >= 35){
                    flexaoScore = 5;
                }
            } else if (ageRange == 3){
                if(flexao <= 21){
                    flexaoScore = 1;
                } else if (flexao >= 22 && flexao <= 24){
                    flexaoScore = 2;
                } else if (flexao  >= 25 && flexao <= 29){
                    flexaoScore = 3;
                } else if (flexao >= 30 && flexao <= 32){
                    flexaoScore = 4;
                } else if (flexao >= 33){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 4){
                if(flexao <= 20){
                    flexaoScore = 1;
                } else if (flexao >= 21 && flexao <= 23){
                    flexaoScore = 2;
                } else if (flexao  >= 24 && flexao <= 27){
                    flexaoScore = 3;
                } else if (flexao >= 28 && flexao <= 30){
                    flexaoScore = 4;
                } else if (flexao >= 31){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 5){
                if(flexao <= 17){
                    flexaoScore = 1;
                } else if (flexao >= 18 && flexao <= 20){
                    flexaoScore = 2;
                } else if (flexao  >= 21 && flexao <= 25){
                    flexaoScore = 3;
                } else if (flexao >= 26 && flexao <= 28){
                    flexaoScore = 4;
                } else if (flexao >= 29){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 6){
                if(flexao <= 16){
                    flexaoScore = 1;
                } else if (flexao >= 17 && flexao <= 19){
                    flexaoScore = 2;
                } else if (flexao  >= 20 && flexao <= 23){
                    flexaoScore = 3;
                } else if (flexao >= 24 && flexao <= 26){
                    flexaoScore = 4;
                } else if (flexao >= 27){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 7){
                if(flexao <= 14){
                    flexaoScore = 1;
                } else if (flexao >= 15 && flexao <= 17){
                    flexaoScore = 2;
                } else if (flexao  >= 18 && flexao <= 21){
                    flexaoScore = 3;
                } else if (flexao >= 22 && flexao <= 24){
                    flexaoScore = 4;
                } else if (flexao >= 25){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 8){
                if(flexao <= 11){
                    flexaoScore = 1;
                } else if (flexao >= 12 && flexao <= 14){
                    flexaoScore = 2;
                } else if (flexao  >= 15 && flexao <= 18){
                    flexaoScore = 3;
                } else if (flexao >= 19 && flexao <= 21){
                    flexaoScore = 4;
                } else if (flexao >= 22){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 9){
                if(flexao >= 11){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }              
            } else if (ageRange == 10){
                if(flexao >= 9){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 11){
                if(flexao >= 8){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 12){
                if(flexao >= 6){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                 
            }
        // FLEXAO N LEMB FEMININO
        } else if (this.genType == 2 && this.segType == 2) {
            if (ageRange == 1){
                if(flexao <= 10){
                    flexaoScore = 1;
                } else if (flexao == 11){
                    flexaoScore = 2;
                } else if (flexao  >= 12 && flexao <= 14){
                    flexaoScore = 3;
                } else if (flexao == 15){
                    flexaoScore = 4;
                } else if (flexao >= 16){
                    flexaoScore = 5;
                }
            } else if (ageRange == 2){
                if(flexao <= 11){
                    flexaoScore = 1;
                } else if (flexao == 12){
                    flexaoScore = 2;
                } else if (flexao  >= 13 && flexao <= 15){
                    flexaoScore = 3;
                } else if (flexao == 16){
                    flexaoScore = 4;
                } else if (flexao >= 17){
                    flexaoScore = 5;
                }
            } else if (ageRange == 3){
                if(flexao <= 10){
                    flexaoScore = 1;
                } else if (flexao == 11){
                    flexaoScore = 2;
                } else if (flexao  >= 12 && flexao <= 14){
                    flexaoScore = 3;
                } else if (flexao == 15){
                    flexaoScore = 4;
                } else if (flexao >= 16){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 4){
                if(flexao <= 9){
                    flexaoScore = 1;
                } else if (flexao == 10){
                    flexaoScore = 2;
                } else if (flexao  >= 11 && flexao <= 13){
                    flexaoScore = 3;
                } else if (flexao == 14){
                    flexaoScore = 4;
                } else if (flexao >= 15){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 5){
                if(flexao <= 8){
                    flexaoScore = 1;
                } else if (flexao == 9){
                    flexaoScore = 2;
                } else if (flexao  >= 10 && flexao <= 12){
                    flexaoScore = 3;
                } else if (flexao == 13){
                    flexaoScore = 4;
                } else if (flexao >= 14){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 6){
                if(flexao <= 7){
                    flexaoScore = 1;
                } else if (flexao == 8){
                    flexaoScore = 2;
                } else if (flexao  >= 9 && flexao <= 11){
                    flexaoScore = 3;
                } else if (flexao == 12){
                    flexaoScore = 4;
                } else if (flexao >= 13){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 7){
                if(flexao <= 6){
                    flexaoScore = 1;
                } else if (flexao == 7){
                    flexaoScore = 2;
                } else if (flexao  >= 8 && flexao <= 10){
                    flexaoScore = 3;
                } else if (flexao == 11){
                    flexaoScore = 4;
                } else if (flexao >= 12){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 8){
                if(flexao <= 5){
                    flexaoScore = 1;
                } else if (flexao == 6){
                    flexaoScore = 2;
                } else if (flexao  >= 7 && flexao <= 9){
                    flexaoScore = 3;
                } else if (flexao == 10){
                    flexaoScore = 4;
                } else if (flexao >= 11){
                    flexaoScore = 5;
                }                
            } else if (ageRange == 9){
                if(flexao >= 5){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }              
            } else if (ageRange == 10){
                if(flexao >= 4){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 11){
                if(flexao >= 3){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                
            } else if (ageRange == 12){
                if(flexao >= 2){
                    flexaoScore = 6;
                } else {
                    flexaoScore = 0;
                }                 
            }

        }
        this.flexaoScore = flexaoScore;
        console.log(`Score de flexao: ${this.flexaoScore}`);
        return flexaoScore;
    }

    getAbdScore() {
        let abdScore = 0;
        let ageRange = this.ageRange
        let abd = Number(this.abdominal);

        // ABD LEMB MASC
        if(this.genType == 1 && this.segType == 1){
        if(ageRange == 1){
            if(abd <= 34){
                abdScore = 1;
            } else if (abd >= 35 && abd <= 44){
                abdScore = 2;
            } else if(abd >= 45 && abd <= 63){
                abdScore = 3;
            } else if (abd >= 64 && abd <= 73){
                abdScore = 4;
            } else if (abd >= 74){
                abdScore = 5;
            }
        } else if(ageRange == 2){
            if(abd <= 41){
                abdScore = 1;
            } else if (abd >= 42 && abd <= 51){
                abdScore = 2;
            } else if(abd >= 52 && abd <= 68){
                abdScore = 3;
            } else if (abd >= 69 && abd <= 78){
                abdScore = 4;
            } else if (abd >= 79){
                abdScore = 5;
            }
        } else if(ageRange == 3){
            if(abd <= 37){
                abdScore = 1;
            } else if (abd >= 38 && abd <= 48){
                abdScore = 2;
            } else if(abd >= 49 && abd <= 65){
                abdScore = 3;
            } else if (abd >= 66 && abd <= 75){
                abdScore = 4;
            } else if (abd >= 76){
                abdScore = 5;
            }
        } else if(ageRange == 4){
            if(abd <= 33){
                abdScore = 1;
            } else if (abd >= 34 && abd <= 42){
                abdScore = 2;
            } else if(abd >= 43 && abd <= 60){
                abdScore = 3;
            } else if (abd >= 61 && abd <= 69){
                abdScore = 4;
            } else if (abd >= 70){
                abdScore = 5;
            }
        } else if(ageRange == 5){
            if(abd <= 30){
                abdScore = 1;
            } else if (abd >= 31 && abd <= 39){
                abdScore = 2;
            } else if(abd >= 40 && abd <= 56){
                abdScore = 3;
            } else if (abd >= 57 && abd <= 65){
                abdScore = 4;
            } else if (abd >= 66){
                abdScore = 5;
            }
        } else if(ageRange == 6){
            if(abd <= 28){
                abdScore = 1;
            } else if (abd >= 29 && abd <= 37){
                abdScore = 2;
            } else if(abd >= 38 && abd <= 54){
                abdScore = 3;
            } else if (abd >= 55 && abd <= 63){
                abdScore = 4;
            } else if (abd >= 64){
                abdScore = 5;
            }
        } else if(ageRange == 7){
            if(abd <= 26){
                abdScore = 1;
            } else if (abd >= 27 && abd <= 35){
                abdScore = 2;
            } else if(abd >= 36 && abd <= 52){
                abdScore = 3;
            } else if (abd >= 53 && abd <= 61){
                abdScore = 4;
            } else if (abd >= 62){
                abdScore = 5;
            }
        } else if(ageRange == 8){
            if(abd <= 24){
                abdScore = 1;
            } else if (abd >= 25 && abd <= 33){
                abdScore = 2;
            } else if(abd >= 34 && abd <= 50){
                abdScore = 3;
            } else if (abd >= 51 && abd <= 59){
                abdScore = 4;
            } else if (abd >= 60){
                abdScore = 5;
            }
        } else if(ageRange == 9){
            if(abd >= 23){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 10){
            if(abd >= 21){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 11){
            if(abd >= 19){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 12){
            if(abd >= 17){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        }
    // ABD LEMB FEM
    } else if(this.genType == 2 && this.segType == 1){
        if (ageRange == 1){
            if(abd <= 30){
                abdScore = 1;
            } else if (abd >= 31 && abd <= 39){
                abdScore = 2;
            } else if(abd >= 40 && abd <= 55){
                abdScore = 3;
            } else if (abd >= 56 && abd <= 64){
                abdScore = 4;
            } else if (abd >= 65){
                abdScore = 5;
            }
        } else if (ageRange == 2){
            if(abd <= 32){
                abdScore = 1;
            } else if (abd >= 33 && abd <= 41){
                abdScore = 2;
            } else if(abd >= 42 && abd <= 57){
                abdScore = 3;
            } else if (abd >= 58 && abd <= 66){
                abdScore = 4;
            } else if (abd >= 67){
                abdScore = 5;
            }
        } else if(ageRange == 3){
            if(abd <= 31){
                abdScore = 1;
            } else if (abd >= 32 && abd <= 40){
                abdScore = 2;
            } else if(abd >= 41 && abd <= 56){
                abdScore = 3;
            } else if (abd >= 57 && abd <= 65){
                abdScore = 4;
            } else if (abd >= 66){
                abdScore = 5;
            }
        } else if(ageRange == 4){
            if(abd <= 29){
                abdScore = 1;
            } else if (abd >= 30 && abd <= 38){
                abdScore = 2;
            } else if(abd >= 39 && abd <= 54){
                abdScore = 3;
            } else if (abd >= 55 && abd <= 63){
                abdScore = 4;
            } else if (abd >= 64){
                abdScore = 5;
            }
        } else if(ageRange == 5){
            if(abd <= 27){
                abdScore = 1;
            } else if (abd >= 28 && abd <= 36){
                abdScore = 2;
            } else if(abd >= 37 && abd <= 52){
                abdScore = 3;
            } else if (abd >= 53 && abd <= 61){
                abdScore = 4;
            } else if (abd >= 62){
                abdScore = 5;
            }
        } else if(ageRange == 6){
            if(abd <= 25){
                abdScore = 1;
            } else if (abd >= 26 && abd <= 34){
                abdScore = 2;
            } else if(abd >= 35 && abd <= 50){
                abdScore = 3;
            } else if (abd >= 51 && abd <= 59){
                abdScore = 4;
            } else if (abd >= 60){
                abdScore = 5;
            }
        } else if(ageRange == 7){
            if(abd <= 23){
                abdScore = 1;
            } else if (abd >= 24 && abd <= 32){
                abdScore = 2;
            } else if(abd >= 33 && abd <= 48){
                abdScore = 3;
            } else if (abd >= 49 && abd <= 57){
                abdScore = 4;
            } else if (abd >= 58){
                abdScore = 5;
            }
        } else if(ageRange == 8){
            if(abd <= 21){
                abdScore = 1;
            } else if (abd >= 22 && abd <= 30){
                abdScore = 2;
            } else if(abd >= 31 && abd <= 46){
                abdScore = 3;
            } else if (abd >= 47 && abd <= 55){
                abdScore = 4;
            } else if (abd >= 56){
                abdScore = 5;
            }
        } else if(ageRange == 9){
            if(abd >= 20){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 10){
            if(abd >= 18){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 11){
            if(abd >= 16){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 12){
            if(abd >= 14){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        }
    // HERE ABD N LEMB MASC
    } else if(this.genType == 1 && this.segType == 2){
        if(ageRange == 1){
            if(abd <= 34){
                abdScore = 1;
            } else if (abd >= 35 && abd <= 44){
                abdScore = 2;
            } else if(abd >= 45 && abd <= 63){
                abdScore = 3;
            } else if (abd >= 64 && abd <= 73){
                abdScore = 4;
            } else if (abd >= 74){
                abdScore = 5;
            }
        } else if(ageRange == 2){
            if(abd <= 41){
                abdScore = 1;
            } else if (abd >= 42 && abd <= 51){
                abdScore = 2;
            } else if(abd >= 52 && abd <= 68){
                abdScore = 3;
            } else if (abd >= 69 && abd <= 78){
                abdScore = 4;
            } else if (abd >= 79){
                abdScore = 5;
            }
        } else if(ageRange == 3){
            if(abd <= 37){
                abdScore = 1;
            } else if (abd >= 38 && abd <= 48){
                abdScore = 2;
            } else if(abd >= 49 && abd <= 65){
                abdScore = 3;
            } else if (abd >= 66 && abd <= 75){
                abdScore = 4;
            } else if (abd >= 76){
                abdScore = 5;
            }
        } else if(ageRange == 4){
            if(abd <= 33){
                abdScore = 1;
            } else if (abd >= 34 && abd <= 42){
                abdScore = 2;
            } else if(abd >= 43 && abd <= 60){
                abdScore = 3;
            } else if (abd >= 61 && abd <= 69){
                abdScore = 4;
            } else if (abd >= 70){
                abdScore = 5;
            }
        } else if(ageRange == 5){
            if(abd <= 30){
                abdScore = 1;
            } else if (abd >= 31 && abd <= 39){
                abdScore = 2;
            } else if(abd >= 40 && abd <= 56){
                abdScore = 3;
            } else if (abd >= 57 && abd <= 65){
                abdScore = 4;
            } else if (abd >= 66){
                abdScore = 5;
            }
        } else if(ageRange == 6){
            if(abd <= 28){
                abdScore = 1;
            } else if (abd >= 29 && abd <= 37){
                abdScore = 2;
            } else if(abd >= 38 && abd <= 54){
                abdScore = 3;
            } else if (abd >= 55 && abd <= 63){
                abdScore = 4;
            } else if (abd >= 64){
                abdScore = 5;
            }
        } else if(ageRange == 7){
            if(abd <= 26){
                abdScore = 1;
            } else if (abd >= 27 && abd <= 35){
                abdScore = 2;
            } else if(abd >= 36 && abd <= 52){
                abdScore = 3;
            } else if (abd >= 53 && abd <= 61){
                abdScore = 4;
            } else if (abd >= 62){
                abdScore = 5;
            }
        } else if(ageRange == 8){
            if(abd <= 24){
                abdScore = 1;
            } else if (abd >= 25 && abd <= 33){
                abdScore = 2;
            } else if(abd >= 34 && abd <= 50){
                abdScore = 3;
            } else if (abd >= 51 && abd <= 59){
                abdScore = 4;
            } else if (abd >= 60){
                abdScore = 5;
            }
        } else if(ageRange == 9){
            if(abd >= 23){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 10){
            if(abd >= 21){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 11){
            if(abd >= 19){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 12){
            if(abd >= 17){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        }
    // ABD N LEMB FEM
    } else if(this.genType == 2 && this.segType == 2){
        if (ageRange == 1){
            if(abd <= 30){
                abdScore = 1;
            } else if (abd >= 31 && abd <= 39){
                abdScore = 2;
            } else if(abd >= 40 && abd <= 55){
                abdScore = 3;
            } else if (abd >= 56 && abd <= 64){
                abdScore = 4;
            } else if (abd >= 65){
                abdScore = 5;
            }
        } else if (ageRange == 2){
            if(abd <= 32){
                abdScore = 1;
            } else if (abd >= 33 && abd <= 41){
                abdScore = 2;
            } else if(abd >= 42 && abd <= 57){
                abdScore = 3;
            } else if (abd >= 58 && abd <= 66){
                abdScore = 4;
            } else if (abd >= 67){
                abdScore = 5;
            }
        } else if(ageRange == 3){
            if(abd <= 31){
                abdScore = 1;
            } else if (abd >= 32 && abd <= 40){
                abdScore = 2;
            } else if(abd >= 41 && abd <= 56){
                abdScore = 3;
            } else if (abd >= 57 && abd <= 65){
                abdScore = 4;
            } else if (abd >= 66){
                abdScore = 5;
            }
        } else if(ageRange == 4){
            if(abd <= 29){
                abdScore = 1;
            } else if (abd >= 30 && abd <= 38){
                abdScore = 2;
            } else if(abd >= 39 && abd <= 54){
                abdScore = 3;
            } else if (abd >= 55 && abd <= 63){
                abdScore = 4;
            } else if (abd >= 64){
                abdScore = 5;
            }
        } else if(ageRange == 5){
            if(abd <= 27){
                abdScore = 1;
            } else if (abd >= 28 && abd <= 36){
                abdScore = 2;
            } else if(abd >= 37 && abd <= 52){
                abdScore = 3;
            } else if (abd >= 53 && abd <= 61){
                abdScore = 4;
            } else if (abd >= 62){
                abdScore = 5;
            }
        } else if(ageRange == 6){
            if(abd <= 25){
                abdScore = 1;
            } else if (abd >= 26 && abd <= 34){
                abdScore = 2;
            } else if(abd >= 35 && abd <= 50){
                abdScore = 3;
            } else if (abd >= 51 && abd <= 59){
                abdScore = 4;
            } else if (abd >= 60){
                abdScore = 5;
            }
        } else if(ageRange == 7){
            if(abd <= 23){
                abdScore = 1;
            } else if (abd >= 24 && abd <= 32){
                abdScore = 2;
            } else if(abd >= 33 && abd <= 48){
                abdScore = 3;
            } else if (abd >= 49 && abd <= 57){
                abdScore = 4;
            } else if (abd >= 58){
                abdScore = 5;
            }
        } else if(ageRange == 8){
            if(abd <= 21){
                abdScore = 1;
            } else if (abd >= 22 && abd <= 30){
                abdScore = 2;
            } else if(abd >= 31 && abd <= 46){
                abdScore = 3;
            } else if (abd >= 47 && abd <= 55){
                abdScore = 4;
            } else if (abd >= 56){
                abdScore = 5;
            }
        } else if(ageRange == 9){
            if(abd >= 19){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 10){
            if(abd >= 17){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 11){
            if(abd >= 15){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        } else if(ageRange == 12){
            if(abd >= 13){
                abdScore = 6;
            } else {
                abdScore = 0;
            }
        }
    }

        this.abdScore = abdScore;
        console.log(`Score de abdominal: ${this.abdScore}`);
        return abdScore;
    }

    getBarraScore() {
        let barraScore = 0;
        let ageRange = this.ageRange
        let barra = Number(this.barra);

    //BARRA LEMB MASC
    if(this.genType == 1 && this.segType == 1){
        if(ageRange == 1){
            if(barra <= 4){
                barraScore = 1;
            } else if(barra >= 5 && barra <= 6){
                barraScore = 2;
            } else if(barra >= 7 && barra <= 9){
                barraScore = 3;
            } else if(barra >= 10 && barra <= 11){
                barraScore = 4;
            } else if(barra >= 12){
                barraScore = 5;
            }
        } else if(ageRange == 2){
            if(barra <= 5){
                barraScore = 1;
            } else if(barra >= 6 && barra <= 7){
                barraScore = 2;
            } else if(barra >= 8 && barra <= 10){
                barraScore = 3;
            } else if(barra >= 11 && barra <= 12){
                barraScore = 4;
            } else if(barra >= 13){
                barraScore = 5;
            }
        } else if(ageRange == 3){
            if(barra <= 4){
                barraScore = 1;
            } else if(barra >= 5 && barra <= 6){
                barraScore = 2;
            } else if(barra >= 7 && barra <= 9){
                barraScore = 3;
            } else if(barra >= 10 && barra <= 11){
                barraScore = 4;
            } else if(barra >= 12){
                barraScore = 5;
            }
        } else if(ageRange == 4){
            if(barra <= 4){
                barraScore = 1;
            } else if(barra == 5){
                barraScore = 2;
            } else if(barra >= 6 && barra <= 8){
                barraScore = 3;
            } else if(barra >= 9 && barra <= 10){
                barraScore = 4;
            } else if(barra >= 11){
                barraScore = 5;
            }
        } else if(ageRange == 5){
            if(barra <= 3){
                barraScore = 1;
            } else if(barra == 4){
                barraScore = 2;
            } else if(barra >= 5 && barra <= 6){
                barraScore = 3;
            } else if(barra >= 7 && barra <= 8){
                barraScore = 4;
            } else if(barra >= 9){
                barraScore = 5;
            }
        } else if(ageRange == 6){
            if(barra <= 2){
                barraScore = 1;
            } else if(barra == 3){
                barraScore = 2;
            } else if(barra >= 4 && barra <= 5){
                barraScore = 3;
            } else if(barra >= 6 && barra <= 7){
                barraScore = 4;
            } else if(barra >= 8){
                barraScore = 5;
            }
        } else if(ageRange == 7){
            if(barra >= 2){
                barraScore = 6;
            } else {
                barraScore = 0;
            }
        } else if(ageRange == 8){
            if(barra >= 1){
                barraScore = 6;
            } else {
                barraScore = 0;
            }
        } else if(ageRange >= 9){
           barraScore = 7;
        } 
        // BARRA LEMB FEM
        } else if (this.genType == 2 && this.segType == 1){
        if(ageRange == 1){
            if(barra < 1){
                barraScore = 1;
            } else if(barra >= 1 && barra <= 2){
                barraScore = 2;
            } else if(barra >= 3 && barra <= 4){
                barraScore = 3;
            } else if(barra == 5){
                barraScore = 4;
            } else if(barra >= 6){
                barraScore = 5;
            }
        } else if(ageRange == 2){
            if(barra <= 1){
                barraScore = 1;
            } else if(barra >= 2 && barra <= 3){
                barraScore = 2;
            } else if(barra >= 4 && barra <= 5){
                barraScore = 3;
            } else if(barra == 6){
                barraScore = 4;
            } else if(barra >= 7){
                barraScore = 5;
            }
        } else if(ageRange == 3){
            if(barra <= 1){
                barraScore = 1;
            } else if(barra == 2){
                barraScore = 2;
            } else if(barra >= 3 && barra <= 4){
                barraScore = 3;
            } else if(barra == 5){
                barraScore = 4;
            } else if(barra >= 6){
                barraScore = 5;
            }
        } else if(ageRange == 4){
            if(barra < 1){
                barraScore = 1;
            } else if(barra >= 1 && barra <= 2){
                barraScore = 2;
            } else if(barra >= 3 && barra <= 4){
                barraScore = 3;
            } else if(barra == 5){
                barraScore = 4;
            } else if(barra >= 6){
                barraScore = 5;
            }
        } else if(ageRange == 5){
            if(barra < 1){
                barraScore = 1;
            } else if(barra >= 1 && barra <= 2){
                barraScore = 2;
            } else if(barra == 3){
                barraScore = 3;
            } else if(barra == 4){
                barraScore = 4;
            } else if(barra >= 5){
                barraScore = 5;
            }
        } else if(ageRange == 6){
            if(barra < 1){
                barraScore = 1;
            } else if(barra == 1){
                barraScore = 2;
            } else if(barra == 2){
                barraScore = 3;
            } else if(barra == 3){
                barraScore = 4;
            } else if(barra >= 4){
                barraScore = 5;
            }
        } else if(ageRange == 7){
            if(barra >= 45){
                barraScore = 6;
            } else {
                barraScore = 0;
            }
        } else if(ageRange == 8){
            if(barra >= 30){
                barraScore = 6;
            } else {
                barraScore = 0;
            }
        } else if(ageRange >= 9){
           barraScore = 7;
        } 
        } else if(this.segType == 2){
            barraScore = 7;
        }
        
        this.barraScore = barraScore;
        console.log(`Score de barra: ${this.barraScore}`);
        return barraScore;
    }
}