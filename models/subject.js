module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Standards',
        key: 'id',
      },
    },
  });

  Subject.associate = (models) => {
    Subject.belongsTo(models.Standard, { foreignKey: 'standardId', as: 'standard' });
  };

  return Subject;
};
