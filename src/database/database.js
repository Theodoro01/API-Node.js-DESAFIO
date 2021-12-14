//criando conexão com o banco de dados
const mongoose = require("mongoose")

const dotenv = require("dotenv/config")

const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME


const uri =
        `mongodb+srv://Theodorovieira01:${dbPassword}@cluster0.8oerp.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(uri ,{ 
        useNewUrlParser: true, useUnifiedTopology: true,});

mongoose.Promise = global.Promise

module.exports = mongoose;