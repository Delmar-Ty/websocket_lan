const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080, host: '192.168.0.231' });

wss.on('connection', ws => {
        console.log('New Client Connected');

        ws.on('message', data => {
            console.log(`Client sent ${data}`);
        });

        ws.on('close', () => {
            console.log('Client Disconnected');
        });
});