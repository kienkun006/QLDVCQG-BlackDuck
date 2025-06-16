export default (sequelize, DataTypes) => {
  return sequelize.define('DVQL', {
    id_dvql: {
      type: DataTypes.STRING(5),
      primaryKey: true,
      allowNull: false,
      validate: {
        len: [5, 5], // Bắt buộc đúng 5 ký tự
      }
    },
    tendv: { type: DataTypes.STRING(225), allowNull: false },
    diaChi: { type: DataTypes.STRING(225), allowNull: false },
    capQL: { type: DataTypes.STRING(45), allowNull: false }
  }, {
    tableName: 'dvql',
    timestamps: false
  });
};
