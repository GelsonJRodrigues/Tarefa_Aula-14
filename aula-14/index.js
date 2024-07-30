const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const routes = require('./route/routes.js');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});