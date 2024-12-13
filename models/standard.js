module.exports = (sequelize, DataTypes) => {
  const Standard = sequelize.define('Standard', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ClassCategories',
        key: 'id',
      },
    },
  });

  Standard.associate = (models) => {
    Standard.belongsTo(models.ClassCategory, { foreignKey: 'classCategoryId', as: 'classCategory' });
    Standard.hasMany(models.Subject, { foreignKey: 'standardId', as: 'subjects' });
  };

  return Standard;
};
