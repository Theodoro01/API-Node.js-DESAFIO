const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const connection = require("./database/database")

require("./controller/authcontroller.js")(app);
require("./controller/projectController.js")(app);

app.get("/", (req, res) => {
    res.send({ ok: true })
})


app.listen( process.env.PORT || 3000, () => {
    console.log("APP RODANDO!");
})