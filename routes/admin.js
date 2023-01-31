const express = require("express")
const router = express.Router()


router.get('/home',(req,res)=>{
    res.render("admin/index")

})

router.get('/posts',(req,res)=>{
    res.send("Página de posts")

})

router.get('/lote',(req,res)=>{
    res.render("admin/Lote")

})
 
router.get('/addLote',(req,res)=>{
    res.render("admin/addLote")

})

router.get('/cadastrarUsuario',(req,res)=>{
    res.render("admin/cadastroUsuario")

})


module.exports = router