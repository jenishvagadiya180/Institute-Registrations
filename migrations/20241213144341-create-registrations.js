module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('registrations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instituteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      boardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      medium: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      classCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      universityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subjectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      standardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      degreeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('registrations');
  }
};
