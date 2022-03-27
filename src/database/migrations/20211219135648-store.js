'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const trx = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('store', {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        description: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'users'
            },
            key: 'id'
          }
        }
      }, { trx });

      await trx.commit();

    } catch (error) {
      await trx.rollback();
      throw error;
    }
  },

  down: async queryInterface => {
    const trx = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('store', { trx });
      await trx.commit();
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  }
};
