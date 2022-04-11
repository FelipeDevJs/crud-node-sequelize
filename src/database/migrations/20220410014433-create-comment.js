'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_user:{
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
     });
    

  },

  down: async (queryInterface, Sequelize) =>{
    await queryInterface.dropTable('comments');
  }
};
