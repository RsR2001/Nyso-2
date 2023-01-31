const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const Post = require('./models/AddLote')
const Cadastro = require('./models/Cadastro')
const bodyParser = require("body-parser")

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

//Rotas de Post
app.use('/admin', admin)

app.post('/RegistroConcluido',(req,res)=>{       
        
    Post.create({
        TipoUva: req.body.TipoUva,
        HorarioIrrigacao: req.body.HorarioIrrigacao,
        DiaAdubacao: req.body.DiaAdubacao,
        PresencaDePragas: req.body.PresencaDePragas,
        TipoDePraga: req.body.TipoDePraga
     
    }).then(function(){
         res.redirect("/admin/home")
    }).catch(function(erro){
     res.send("Houve um erro ao se cadastrar! "+ erro)
    })  
     
 })

 app.post('/CadastroConcluido',(req,res)=>{       
        
    Cadastro.create({
        Nome: req.body.Nome,
        Celular: req.body.Celular,
        CPF: req.body.CPF
     
    }).then(function(){
         res.redirect("/admin/CadastrarLote")
    }).catch(function(erro){
     res.send("Houve um erro ao se cadastrar! "+ erro)
    })  
     
 })

 app.post("/AtualizarLote/:id",(req,res) =>{

    Post.findOne( {where: {id:req.body.id }}).then((posts) => {

      posts.TipoUva = req.body.TipoUva
      posts.HorarioIrrigacao = req.body.HorarioIrrigacao
      posts.DiaAdubacao = req.body.DiaAdubacao
      posts.PresencaDePragas = req.body.PresencaDePragas
      posts.TipoDePraga = req.body.TipoDePraga

      console.log(posts)
      posts.save().then(() => {
        res.redirect("/admin/ListaDeLotes")
      }).catch((err) => {
        res.send('Erro')
      })
    }).catch((err) => {
      console.log(err)
      res.send('Erro!')
    })
  })

  app.post("/AtualizarUser/:id",(req,res) =>{

    Cadastro.findOne( {where: {id:req.body.id }}).then((posts) => {

      posts.Nome = req.body.Nome
      posts.Celular = req.body.Celular
      posts.CPF = req.body.CPF

      console.log(posts)
      posts.save().then(() => {
        res.redirect("/admin/Users")
      }).catch((err) => {
        res.send('Erro')
      })
    }).catch((err) => {
      console.log(err)
      res.send('Erro!')
    })
  })
//Outros
const PORT = 3000
app.listen(PORT,() =>{
    console.log("Servidor rodando")
})