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
        this.genType = 0;
        this.segType = 0;
        this.corridaScore = 0;

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


    //
    //
    //
    // SCORE DE CORRIDA
    //
    //

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
                    corridaScore = 1;
                } else if (corrida >= 1900) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1799){
                    corridaScore = 1;
                } else if (corrida >= 1800) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1599){
                    corridaScore = 1;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1399){
                    corridaScore = 1;
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
                    corridaScore = 1;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1499){
                    corridaScore = 1;
                } else if (corrida >= 1500) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1299){
                    corridaScore = 1;
                } else if (corrida >= 1300) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1099){
                    corridaScore = 1;
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
                    corridaScore = 1;
                } else if (corrida >= 1900) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1799){
                    corridaScore = 1;
                } else if (corrida >= 1800) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1599){
                    corridaScore = 1;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1399){
                    corridaScore = 1;
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
                    corridaScore = 1;
                } else if (corrida >= 1600) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 10){
                if (corrida <= 1499){
                    corridaScore = 1;
                } else if (corrida >= 1500) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 11){
                if (corrida <= 1299){
                    corridaScore = 1;
                } else if (corrida >= 1300) {
                    corridaScore = 6;
                }
            }
            else if (ageRange == 12){
                if (corrida <= 1099){
                    corridaScore = 1;
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
        if ( genType == 1 && segType == 1){
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
            }
        }
        this.corridaScore = corridaScore;
        console.log(`Score de flexao: ${this.corridaScore}`);
        return corridaScore;
    }


}