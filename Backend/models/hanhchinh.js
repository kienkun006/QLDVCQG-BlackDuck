export default (sequelize, DataTypes) => {
  return sequelize.define('HanhChinh', {
    id_hanhchinh: { type: DataTypes.STRING(5), primaryKey: true },
    id_cccd: { type: DataTypes.STRING(12), allowNull: false },
    id_suKienPL: { type: DataTypes.STRING(5), allowNull: false },
    thoiGian: { type: DataTypes.DATE, allowNull: false },
    id_dv: { type: DataTypes.STRING(5), allowNull: false }
  }, {
    tableName: 'hanhchinh',
    timestamps: false
  });
};
