export function makeSendBtn(){
    const sendBtn = document.createElement('button');
    sendBtn.id = "send-btn";
    sendBtn.textContent = "Send";
    document.getElementById("square").appendChild(sendBtn);
}