const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number,
    sexo: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;