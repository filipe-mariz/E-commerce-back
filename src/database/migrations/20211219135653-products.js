'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const trx = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('products', {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false
        },
        product_name: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        description: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        category: {
          type: Sequelize.ENUM({
            values: ['feminina', 'masculina']
          }),
          allowNull: false
        },
        price: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        image_link: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        deleted_at: {
          type: Sequelize.DATE,
          defaultValue: null,
          allowNull: true
        }
      }, { trx });

      await trx.commit();

    } catch (error) {
      await trx.rollback();
    }
  },

  down: async (queryInterface, Sequelize) => {
    const trx = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('products', { trx });
      await trx.commit();
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  }
};
