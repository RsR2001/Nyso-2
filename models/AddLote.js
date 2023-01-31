const conectar = require('./Conexao.js')

const addLote = conectar.sequelize.define('Lotes' ,{
    TipoUva: {
        type: conectar.Sequelize.STRING
    },
    HorarioIrrigacao:{
        type: conectar.Sequelize.TIME
    },
    DiaAdubacao:{
        type: conectar.Sequelize.DATE
    },
    PresencaDePragas:{
        type: conectar.Sequelize.STRING
    },
    TipoDePraga:{
        type: conectar.Sequelize.STRING
    },
    
})



module.exports= addLote

