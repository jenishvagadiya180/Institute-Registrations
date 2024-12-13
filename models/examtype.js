module.exports = (sequelize, DataTypes) => {
  const ExamType = sequelize.define('ExamType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ExamType;
};
