const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usuarios');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Banco de dados conectado com sucesso');
});
