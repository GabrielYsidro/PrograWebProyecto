// models/Role.js
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'roles',
    timestamps: false,
  });

  return Role;
};
