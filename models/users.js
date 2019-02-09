const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes)=>{
  const User = sequelize.define("User", {
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    manager:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    hire_date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    password: {
      type:DataTypes.STRING,
    }
  })
  return User;
}