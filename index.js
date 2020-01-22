const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');



//Config
    //Template Engine
        app.engine('handlebars',handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

//Conexao com banco de dados MySQL
    const sequelize = new Sequelize('sistemadecadastro','root','toor',{
        host:"localhost",
        dialect:'mysql'
    })


//Rotas

    app.get('/cad',function(req,res){
        res.render('formulario');
    })

    app.post('/add',function(req,res){
        res.send('FORMULARIO RECEBIDO')
    })

app.listen(8081,function(){
    console.log("Servidor Rodando na URL");
})

