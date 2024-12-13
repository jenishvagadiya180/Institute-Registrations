module.exports = (sequelize, DataTypes) => {
  const Institute = sequelize.define('Institute', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Institute.associate = (models) => {
    Institute.hasMany(models.ClassCategory, { foreignKey: 'instituteId', as: 'classCategories' });
  };

  return Institute;
};
