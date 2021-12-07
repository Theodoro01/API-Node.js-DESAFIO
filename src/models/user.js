const  mongoose = require("../database/database")
// const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { v4: uuid } = require('uuid');
// Schema é campos que tem na tabela de usuarios/ou qualquer outra coisa

const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false, // Quando eu buscar uma lista de usuarios, 
    },                 // não quero que a senha venha junto
    createAt:{
        type: Date,
        default: Date.now,
    },
},{ _id : uuid() });
    //CRIPTOGRAFANDO O PASSWORD:
//UserSchema.pre("save"...) = Antes de Salvar.
// this = refere-se ao Objeto que esta sendo salvo
UserSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash( this.password, 10);
    this.password = hash;
    next();
})

const User =  mongoose.model( "User", UserSchema )

module.exports = User;