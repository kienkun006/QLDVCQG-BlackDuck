export default (sequelize, DataTypes) => {
  return sequelize.define('News', {
    id_new: { type: DataTypes.STRING(5), primaryKey: true },
    id_admin: { type: DataTypes.STRING(5) },
    name: { type: DataTypes.STRING(225) },
    image: { type: DataTypes.TEXT },
    noiDung: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE },
    update_at: { type: DataTypes.DATE }
  }, {
    tableName: 'news',
    timestamps: false
  });
};
