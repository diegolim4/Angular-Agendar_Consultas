const express = require('express');

const User = require('../models/user')

const router = express.Router();

router.post('/register', async (req, res) => {
    
    const { email } = req.body;

    try {
        //verificar se o usuário já existe pelo email
        if(await User.findOne ({ email }))
            return res.send(400).send({error: 'Usuário já existe'}) 

        const user = await User.create(req.body);

        user.password = undefined;
        
        return res.send({user});
    
    }catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'});
    }
});

module.exports = app => app.use('/auth', router)