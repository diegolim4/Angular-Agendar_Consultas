const express = require('express');
const bcrypt = require('bcryptjs')

const User = require('../models/user')

const router = express.Router();

// rotar de registro
router.post('/register', async (req, res) => {
    
    const { email } = req.body;

    try {
        //verificar se o usuário já existe pelo email
        if(await User.findOne ({ email }))
            return res.status(400).send({error: 'Usuário já existe'}) 

        const user = await User.create(req.body);

        user.password = undefined;
        
        return res.send({user});
    
    }catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'});
    }
});

// rota de autentificação
router.post('/authenticate', async (req, res,)=> {
    
    const{ email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({error: 'Usuário não encontrado'});
    
    if(!await bcrypt.compare(password, user.password)) //compara se a senha do login é a mesma salva no banco de dados
        return res.status(400).send({error: 'Senha Inválida'})

    user.password = undefined;
        
    res.send({ user })   
    
});

module.exports = app => app.use('/auth', router)