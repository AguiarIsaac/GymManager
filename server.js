// Importa a função
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')


const server = express()

//Middlewares
server.use(express.urlencoded({extended: true }))
server.use(express.static('public')) //inportação de arquivos estaticos
server.use(methodOverride('_method'))
server.use(routes)


//Configuração template engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false, //Habilita Htmls dentro de variaveis
    noCache: true
})

//Abertura de porta
server.listen(5000, function(){
    console.log('Server is Runnin!')
})