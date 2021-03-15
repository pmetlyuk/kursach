var messageElem = document.createElement('div');
messageElem.innerHTML = "<b>Имя</b> " + // getName +
     "<br><br> <b>Фамилия</b>" +//+getLastName<br> +
     "<br><br><b>Отчество</b> " // + getPatrinymic
        // + get other info
document.getElementById('subscribe').appendChild(messageElem);
