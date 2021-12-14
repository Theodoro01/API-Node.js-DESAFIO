const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const dotenv = require("dotenv/config")

const connection = require("./database/database");

require("./controller/authcontroller.js")(app);
require("./controller/projectController.js")(app);

app.get("/", (req, res) => {
    res.send({ ok: true })
});

const port =  process.env.PORT || 3000; 

app.listen(port, () => {
    console.log("APP RODANDO!");
});

