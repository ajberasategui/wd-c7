const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.get('/', (req, res) => {
    console.log('Received a GET request: ');
    console.log(req.query);
    res.status(200).send();
});

app.post('/', (req, res) => {
    console.log('Received a POST request: ');
    console.log(req.body);
    res.status(200).send();
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;