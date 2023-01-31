const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const Post = require('./models/AddLote')
const Cadastro = require('./models/Cadastro')

    //Configurações

    // Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //Handlebars
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/views")));
app.set('views', path.join(__dirname, '/views'))
app.engine('hbs',
exphbs.engine({
defaultLayout: 'main',
extname:'.hbs',
layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine','hbs')  

//MySQL
const servidor = require('./models/Conexao.js')
//Rotas
app.use('/admin', admin)

app.post('/RegistroConcluido',(req,res)=>{       
        
    Post.create({
        TipoUva: req.body.TipoUva,
        HorarioIrrigacao: req.body.HorarioIrrigacao,
        DiaAdubacao: req.body.DiaAdubado,
        PresencaDePragas: req.body.PresencaDePragas,
        TipoDePraga: req.body.TipoDePragas
     
    }).then(function(){
         res.render("admin/index")
    }).catch(function(erro){
     res.send("Houve um erro ao se cadastrar! "+ erro)
    })  
     
 })

 app.post('/CadastroConcluido',(req,res)=>{       
        
    Cadastro.create({
        Nome: req.body.nomee,
        Celular: req.body.fone,
        CPF: req.body.cpff
     
    }).then(function(){
         res.render("admin/addLote")
    }).catch(function(erro){
     res.send("Houve um erro ao se cadastrar! "+ erro)
    })  
     
 })
	


//Outros
const PORT = 3000
app.listen(PORT,() =>{
    console.log("Servidor rodando")
})