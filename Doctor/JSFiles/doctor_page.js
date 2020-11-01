var messageElem = document.createElement('div');
messageElem.innerHTML =
    "<p><b>Имя</b></p>" + // getName +
    "<p> <b>Фамилия</b></p>" +//+ getLastName<br> +
    "<p><b>Отчество</b></p>" // + getPatrinymic
"<p><b>Должность</b></p>" // + get
// + get other info
document.getElementById('subscribe').appendChild(messageElem);
var messageElem2 = document.createElement('div');
messageElem2.innerHTML = " <p align='center'>Список Пациентов </p>" +
    "<table>"
//for (var pacient : pacients) {
messageElem2.innerHTML +=
    "<tr> <td>" +
    "Имя Фамилия Отчество " +
    "</td></tr>" +
    "<p>" +
    "Имя2 Фамилия2 Отчество2 " +
    "</p>"
// }
messageElem2.innerHTML += "</table>"
document.getElementById('subscribe').appendChild(messageElem2);
