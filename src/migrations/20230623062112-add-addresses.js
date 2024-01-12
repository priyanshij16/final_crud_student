'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.createTable('addresses', {
                addressId: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                studentId: {
                    type: Sequelize.UUID,
                    references: {
                        model: 'students',
                        key: 'studentId'
                    },
                    onDelete: 'CASCADE'
                },
                state: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                city: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                pincode: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                    allowNull: false
                },

                createdBy: {
                    type: Sequelize.UUID,
                    allowNull: false
                },

                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: true
                },

                updatedBy: {
                    type: Sequelize.UUID,
                    allowNull: true
                },

                deletedAt: {
                    type: Sequelize.DATE,
                    allowNull: true
                },

                deletedBy: {
                    type: Sequelize.UUID,
                    allowNull: true
                }
            })
            console.log("Migration run successfully of address");
        } catch (err) {
            console.log("Migration failed of address", err);
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('addresses')
    }
};