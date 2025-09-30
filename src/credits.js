import Interrogation from "./img/interrogation-mark.png";
import XBtn from "./img/x-btn.png";
import  trashIcon  from "./img/bin.png";
import Checked from "./img/checked.png";

export function credits(){
    const resultBox = document.querySelector('#result-box');
    const credits = document.createElement('div');

    const creditsContainer = document.createElement('div');
    creditsContainer.id = 'credits-container';
    resultBox.appendChild(creditsContainer);

 
    credits.id = 'credits';
    const creditsTitle = document.createElement('span');
    creditsTitle.textContent = "Ícones por flatIcon: ";
    creditsTitle.id = 'credits-title';

    creditsContainer.appendChild(creditsTitle);
    creditsContainer.appendChild(credits);
    
    //credit wrappers       

    const creditOne = document.createElement('div');
    const creditOneLink = document.createElement('a');
    creditOneLink.href = "https://www.flaticon.com/free-icon/trash-can_542724?term=trash+bin&page=1&position=7&origin=search&related_id=542724";
    creditOneLink.target = "_blank";
    creditOne.appendChild(creditOneLink);
    const creditOneImg = document.createElement('img');
    creditOneLink.appendChild(creditOneImg);
    creditOneImg.src = trashIcon;

    const creditTwo = document.createElement('div');
    const creditTwoLink = document.createElement('a');
    creditTwoLink.href = "https://www.flaticon.com/br/icone-gratis/botao-x_458594";
    creditTwoLink.target = "_blank";
    creditTwo.appendChild(creditTwoLink);
    const creditTwoImg = document.createElement('img');
    creditTwoLink.appendChild(creditTwoImg);
    creditTwoImg.src = XBtn;

    const creditThree = document.createElement('div');
    const creditThreeLink = document.createElement('a');
    creditThreeLink.href = "https://www.flaticon.com/free-icon/interrogation-mark_5259989";
    creditThreeLink.target = "_blank";
    creditThree.appendChild(creditThreeLink);
    const creditThreeImg = document.createElement('img');
    creditThreeLink.appendChild(creditThreeImg);
    creditThreeImg.src = Interrogation;

    const creditFour = document.createElement('div');
    const creditFourLink = document.createElement('a');
    creditFourLink.href = "https://www.flaticon.com/free-icon/checked_190411";
    creditFourLink.target = "_blank";
    creditFour.appendChild(creditFourLink);
    const creditFourImg = document.createElement('img');
    creditFourLink.appendChild(creditFourImg);
    creditFourImg.src = Checked;

    const creditFive = document.createElement('div');
    creditFive.id = 'credit-five';

    const creditFiveText = document.createElement('span');
    creditFiveText.textContent = " Em desenvolvimento.";
    creditFive.appendChild(creditFiveText);

    const creditFivePlus = document.createElement('button');
    creditFivePlus.textContent = "+";
    creditFivePlus.id = 'credit-five-plus';
    creditFive.appendChild(creditFivePlus);
    creditFivePlus.addEventListener('click', () => {
        if(!document.querySelector('#credit-five-plus-added')){
            const creditFivePlusAdded = document.createElement('div');
            creditFivePlusAdded.id = "credit-five-plus-added";
            creditFivePlusAdded.textContent = "por 3º Sgt Jorge Lucas - Cia C2 - 9º B Com GE. Qualquer erro, favor enviar email (jorgelucas.leal@eb.mil.br)";
            creditFive.appendChild(creditFivePlusAdded);
            creditFivePlus.textContent = "-"
        } else {
            creditFive.removeChild(document.querySelector('#credit-five-plus-added'));
            creditFivePlus.textContent = "+"
        }
    })
    

    const creditsArray = [creditOne, creditTwo, creditThree, creditFour, creditFive];
    creditsArray.forEach(credit => {
        credits.appendChild(credit);
        credit.className = 'credit';
    });
}