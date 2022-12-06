const express = require('express');
const path = require('path');
const app = new express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(4040, '192.168.0.231', console.log('Listening'));