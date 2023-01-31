const express = require("express")
const router = express.Router()
const Post = require('../models/AddLote')
const Cadastro = require('../models/Cadastro')

router.get('/home',(req,res)=>{
    res.render("./admin/index")

})

//Cadastrar Lote
router.get('/CadastrarLote',(req,res)=>{
    res.render("./admin/addLote")

})

//Cadastrar User
router.get('/CadastrarUsuario',(req,res)=>{
    res.render("./admin/cadastroUsuario")

})

//Deletar Lote
router.get('/DeletarLote/:id', (req,res)=>{
    Post.destroy({where: {id:req.params.id}}).then(function(){
        res.redirect("/admin/ListaDeLotes")
    }).catch(function(erro){
        res.send("Erro ao deletar o lote"+erro)
    })
    
})
//Lista de lotes
router.get('/ListaDeLotes',(req,res)=>{
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
     res.render("./admin/lotes",{posts: posts}) 
    })
    
 
 })

 //Atualizar lotes
 router.get("/AtualizarLote/:id",  (req, res) =>{
    Post.findOne({where: {id:req.params.id }}).then(posts =>{
      res.render("./admin/atualizarLote", {posts: posts})
    }).catch((erro) =>{
      res.send("Erro"+erro)
    })
  });

 
//Lista de Usuário
  router.get('/Users',(req,res)=>{
    Cadastro.findAll({order: [['id', 'DESC']]}).then(function(posts){
     res.render("./admin/users",{posts: posts}) 
    })
    
 
 })

//Deletar User
  router.get('/DeletarUser/:id', (req,res)=>{
    Cadastro.destroy({where: {id:req.params.id}}).then(function(){
        res.redirect("/admin/Users")
    }).catch(function(erro){
        res.send("Erro ao deletar o lote"+erro)
    })
 
})

//Atualizar User
  router.get("/AtualizarUser/:id",  (req, res) =>{
    Cadastro.findOne({where: {id:req.params.id }}).then(posts =>{
      res.render("./admin/atualizarUser", {posts: posts})
    }).catch((erro) =>{
      res.send("Erro"+erro)
    })
});

module.exports = router