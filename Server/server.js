const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, '../vaccichain-app/dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../vaccichain-app/dist/index.html'));
});

http.listen(3000,()=> {
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at: '+ n + ':' + m);
    console.log('Listening on port: 3000');
});
