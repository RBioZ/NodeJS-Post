const Sequelize = require('sequelize');

//Conexao com banco de dados MySQL
const sequelize = new Sequelize('postapp','root','toor',{
    host:"localhost",
    dialect:'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}