const listaTarefas = require("../model/listaTarefas.json");

exports.getId = (req, res) => {
    const id = req.params.id
    const ids = listaTarefas.find(listaTarefas => listaTarefas.id == id)
    res.status(200).send(ids)
}
exports.get = (req, res) => {
    res.status(200).send(listaTarefas)
}
exports.getConcluido = (req, res) => {
    const concluido = req.params.Concluido
    const tarefaConcluida = listaTarefas.filter(listaTarefas => listaTarefas.concluido == "true")
    res.status(200).send(tarefaConcluida)
}

exports.getNome = (req, res) => {
    const nome = req.params.nomeColaborador
    const colaborador = listaTarefas.find(listaTarefas => listaTarefas.nomeColaborador == nome)
    if (colaborador == undefined) {
        res.status(404).send("Colaborador não existe")
    } else {
        res.status(200).send(colaborador)
    }
}

exports.getDataConclusao = (req, res) => {
    
}