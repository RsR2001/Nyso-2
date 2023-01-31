const conectar = require('./Conexao.js')

const Cadastro = conectar.sequelize.define('Usuarios_Cadastrados' ,{
    Nome: {
        type: conectar.Sequelize.STRING
    },
    Celular:{
        type: conectar.Sequelize.STRING
    },
    CPF:{
        type: conectar.Sequelize.STRING
    },
    
})


module.exports= Cadastro

