const Sequelize = require('sequelize')

const sequelize = new Sequelize('nyso2','root','roottheo',{
host:'localhost',
dialect:'mysql'
})

sequelize.authenticate().then(function(){
	console.log("Conectado ao servidor")
}).catch(function(erro){
	console.log("Erro ao conectar: "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}