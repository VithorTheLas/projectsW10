const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()
    
    app.use(bodyParser.urlencoded({extended: true}))
    //converte automatico pra .json eu acho, entao essa prox linha talvez seja desnecessaria
    app.use(bodyParser.json())
    
    consign()    
        .include('controllers')
        .into(app)
    return app
}


