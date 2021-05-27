const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')

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
       
        // já gerar um token e liberar o acesso assim que o usuário criar a conta 
        return res.send({
            user,
            token: generateToken({id: user.id}),
        });
    
    }catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'});
    }
});

// função pra já gerar um token 
function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

// rota de autentificação
router.post('/authenticate', async (req, res,)=> {
    
    const{ email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({error: 'Usuário não encontrado'});
    
    if(!await bcrypt.compare(password, user.password)) //compara se a senha do login é a mesma salva no banco de dados
        return res.status(400).send({error: 'Senha Inválida'})

    user.password = undefined;    

        
    res.send({ user, 
        user,
        token: generateToken({id: user.id}),

    });   
    
});

module.exports = app => app.use('/auth', router)

