// let socket = new WebSocket('ws://localhost:8081');

// отправка сообщения из формы

let socket = new WebSocket('ws://localhost:8081');
document.forms.search_of_cardiograms.onclick = function () {
    socket.send("patients");
    let messageElem = document.getElementById('out');
    messageElem.innerHTML = 'new text'

}
socket.onmessage = function (event) {
    let message = event.data;
    let messageElem = document.getElementById('out');
    messageElem.innerHTML = 'new text2' + message;
    // document.getElementById('messages').prepend(messageElem);
}


// получение сообщения - отобразить данные в div#messages
