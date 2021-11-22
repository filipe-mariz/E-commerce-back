'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable('users', {
                id: {
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                phone: {
                    type: Sequelize.STRING,
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                password_hash: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                is_admin: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
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
            }, { transaction });

            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            throw error;
        };
    },

    down: async queryInterface => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.dropTable('users', { transaction });
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
};
