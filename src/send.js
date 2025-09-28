export function makeSendBtn(){
    const sendBtn = document.createElement('button');
    sendBtn.id = "send-btn";
    sendBtn.textContent = "Enviar";
    document.getElementById("square").appendChild(sendBtn);
}