const app = require("./src/app") //essa rota é dada ao app
const port = 3000 

app.listen(port, function () { //para mostrar a porta 3000 rodando
    console.log(`app está rodando na porta ${port}`)
})