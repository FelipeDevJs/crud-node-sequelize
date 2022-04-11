const Sequelize = require('sequelize')
const db = require('../config/database')

const connection = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    define: {
        timestamp:true,
        underscored: true
    }
})
try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = connection