module.exports = (sequelize, DataTypes) => {
  const DegreeType = sequelize.define('DegreeType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    universityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Universities',
        key: 'id',
      },
    },
  });

  DegreeType.associate = (models) => {
    DegreeType.belongsTo(models.University, { foreignKey: 'universityId', as: 'university' });
  };

  return DegreeType;
};
