const Sequelize = require('sequelize')
const db = require('../database/index')

const User = require('./User')

const Comment = db.define('comment',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alloNull: false,
        primaryKey: true
    },
    comment: {
        type: Sequelize.STRING,
        alloNull: false,
    },
    idUser: {
        type: Sequelize.INTEGER
    }
})

User.hasMany(Comment, {
    foreignKey: 'idUser'
})

module.exports = Comment