var WebSocketServer = new require('ws');

// подключения
var connections = {};
// id подключенией
var ids = 1

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
    port: 8081
});
console.log("server run");
// date format
let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
//подключение к серверу
webSocketServer.on('connection', function (ws) {

    connections[ids] = ws;
    let cid = ids;
    console.log("new connection " + ids + " at " + Date.now());
    ids++;

    ws.on('message', function (msg) {
        console.log('получено сообщение ' + msg);
        switch (msg) {
            case "patients":
                let s = SendPatientsToClient(connections[cid]);
                break;
            default:
                connections[cid].send("def");
                break;
        }
    });

    ws.on('close', function () {
        console.log('close connection ' + cid);
        delete connections[cid];
    });

});


function SendPatientsToClient(client) {
    let Databases = require('pg');
    let db = new Databases.Client("postgres://postgres:molnix2000@localhost:5432/medicine");
    db.connect();
    const query = ` SELECT * FROM pacients`;
    let str = String("");
    db.query(query, (err, res, cid) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of res.rows) {
            str = str + row.fio_pacients + '\n';
        }

        db.end();
        client.send(str);
        // console.log(str);
    });
}