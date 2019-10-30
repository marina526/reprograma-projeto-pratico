const listaTarefas = require("../model/listaTarefas.json");

exports.getId = (req, res) => {
    const id = req.params.id
    const ids = listaTarefas.find(listaTarefas => listaTarefas.id == id)
    res.status(200).send(ids)
}
exports.get = (req, res) => {
    res.status(200).send(listaTarefas)

}
