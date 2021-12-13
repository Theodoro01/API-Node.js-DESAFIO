//criando conexão com o banco de dados
const mongoose = require("mongoose")

const dotenv = require("dotenv/config")

const uri =
        `mongodb+srv://Theodorovieira01:5qbCv0iY7GDNvq5H@cluster0.8oerp.mongodb.net/DesafioDado?retryWrites=true&w=majority`
mongoose.connect(uri ,{ 
        useNewUrlParser: true, useUnifiedTopology: true,});

mongoose.Promise = global.Promise

module.exports = mongoose;