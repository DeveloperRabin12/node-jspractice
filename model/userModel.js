module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {   //here the user is the name of the db
    
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