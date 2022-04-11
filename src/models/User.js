const Sequelize = require('sequelize')
const db = require('../database/index')

const User = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alloNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        alloNull: false,
    },
    email: {
        type: Sequelize.STRING,
        alloNull: false,
    },
})


module.exports = User