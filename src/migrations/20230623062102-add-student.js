'use strict';
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.createTable('students', {
                studentId: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                studentName: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                contactNumber: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                gender: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                dateOfBirth: {
                    type: Sequelize.DATEONLY,
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
            });
            console.log("Migration run successsfully of student");
        } catch (err) {
            console.log("Error in studente migration", err);
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('students')
    }
};