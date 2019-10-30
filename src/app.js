const express = require("express")
const app = express()

//rotas
const index = require("./routes/index") //index chama essa rota

app.use(function (req, res, next) { // mostra que é publica
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index) //chama o index que la em cima chama outra rota

module.exports = app //para todos os app terem acesso