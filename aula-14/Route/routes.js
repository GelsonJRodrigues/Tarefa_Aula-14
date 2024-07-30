const express = require('express');
const user = require('../user.js');

const router = express.Router();

// Criando um novo usuário
router.post('/users', async (req, res) => {
    const { nome, email, idade, sexo } = req.body;

    try {
        const users = new user({ nome, email, idade, sexo });
        await users.save();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Listando todos os usuários do banco de dados
router.get('/users', async (req, res) => {
    try {
        const users = await user.find({});
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
        const users = await user.findByIdAndUpdate(id, { nome, email, idade, sexo }, { new: true });
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Deletando um usuário
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const users = await user.findByIdAndDelete(id);
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;