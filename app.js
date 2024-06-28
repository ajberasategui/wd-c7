const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    console.log('Received a request: ');
    console.log(req.body);
    res.status(200).send();
});

app.post('/', (req, res) => {
    console.log('Received a request: ');
    console.log(req.body);
    res.status(200).send();
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;