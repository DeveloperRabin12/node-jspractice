module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
     
      },
    });
    return User;
  };