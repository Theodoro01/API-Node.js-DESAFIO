//criando conexão com o banco de dados
const mongoose = require("mongoose")

const dotenv = require("dotenv/config")
    
mongoose.connect(process.env.MONGODB_ATLAS,{ 
        useNewUrlParser: true, useUnifiedTopology: true,});




mongoose.Promise = global.Promise

module.exports = mongoose;