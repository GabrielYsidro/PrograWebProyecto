// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.CHAR(9),
      allowNull: true,
      
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    fotoperfil: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'https://res.cloudinary.com/dzqj1x3bq/image/upload/v1735686262/DefaultProfilePicture.png',
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  }, {
    tableName: 'users',
    timestamps: false, // porque ya usas created_at manualmente
    underscored: true, // para mantener snake_case si decides hacer relaciones
  });

  return User;
};
