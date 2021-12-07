const express = require("express");

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const router = express.Router();
const { v4: uuid } = require('uuid');

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post("/register", async (req, res) => {
    const { email } = req.body;
   
    try {

        if (await User.findOne({ email }))
            return res.status(400).send({error: "User already exists"})
        
        const user = await User.create( req.body );
        // Não exibir a senha ou hash quando o usuario for cadastrado
        user.password = undefined;      

        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    }catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Registration failed'})
    }
})

router.post("/authenticate", async (req,res) => {
    const { email, password } = req.body;
    // .select(+password) = Está falando para mostrar o password tambem 
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({error: "User not found"})

    // verificando se a senha que o usuario digitou é a mesma que esta no banco de dados.
    // Usando o bcrypt.compare porque a senha foi criptograda quando o usuario foi registrado.
    if (!await bcrypt.compare( password , user.password ))
        return res.status(400).send({ error: "Invalid password" })

    // Não exibir a senha ou hash quando o usuario for autenticado.
    user.password = undefined;

  
    
    res.send({ 
        user,
        token: generateToken({ id: user.id }),
    });
});

module.exports = app => app.use("/auth", router);