export default (sequelize, DataTypes) => {
  return sequelize.define('SuKien', {
    id_suKienPL: { type: DataTypes.STRING(5), primaryKey: true },
    tenSK: { field: 'tensk', type: DataTypes.STRING(225) },
    loai: { type: DataTypes.ENUM('Tạm trú', 'Khai sinh') },
    noiDung: { type: DataTypes.TEXT }
  }, {
    tableName: 'sukien',
    timestamps: false
  });
};
