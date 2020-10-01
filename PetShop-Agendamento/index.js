const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const Tableview = require('./infra/tableview')

connection.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('conectado ao banco de dados com sucesso.')

        Tableview.init(connection)

        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000.'))
    }
})



