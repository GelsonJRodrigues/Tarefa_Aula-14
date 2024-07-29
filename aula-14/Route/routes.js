const express = require('express');
const User = require('./user');

const router = express.Router();

// Criando um novo usuário
router.post('/users', async (req, res) => {
    const { nome, email, idade, sexo } = req.body;

    try {
        const user = new User({ nome, email, idade, sexo });
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Listando todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Atualizando um usuário
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, idade, sexo } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { nome, email, idade, sexo }, { new: true });
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Deletando um usuário
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;