module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define('University', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  University.associate = (models) => {
    University.hasMany(models.DegreeType, { foreignKey: 'universityId', as: 'degreeTypes' });
  };

  return University;
};
