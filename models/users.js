module.exports = (sequelize, DataTypes)=>{
  const User = sequelize.define("User", {
    username: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    first_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    emp_id:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    manager_status:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    hire_date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })

  return User;
}