module.exports = (sequelize, DataTypes) => {
  const ClassCategory = sequelize.define('ClassCategory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Institutes',
        key: 'id',
      },
    },
    boardId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Boards',
        key: 'id',
      },
    },
  });

  ClassCategory.associate = (models) => {
    ClassCategory.belongsTo(models.Institute, { foreignKey: 'instituteId', as: 'institute' });
    ClassCategory.belongsTo(models.Board, { foreignKey: 'boardId', as: 'board' });
    ClassCategory.hasMany(models.Standard, { foreignKey: 'classCategoryId', as: 'standards' });
  };

  return ClassCategory;
};
