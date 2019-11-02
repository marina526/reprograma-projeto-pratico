const express = require("express") // chama o pacote express
const router = express.Router()
const listaTarefas = require("../controllers/listaTarefaControllers.js");

router.get("/", function (req, res) { //quando coloca / chama esse status com esse titulo e versão
    res.status(200).send({
        title: "Projeto pratico - back end",
        version: "0.0.1"
    })
})

router.get("/index/tarefa/:nomeColaborador", listaTarefas.getNome)
router.get("/index/tarefa/tarefaConcluida", listaTarefas.getConcluido)
router.get("/index/:id", listaTarefas.getId)
router.get("/index", listaTarefas.get)

module.exports = router //usado para qualquer rota