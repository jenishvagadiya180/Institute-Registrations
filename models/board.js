module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Board.associate = (models) => {
    Board.hasMany(models.ClassCategory, { foreignKey: 'boardId', as: 'classCategories' });
  };

  return Board;
};
