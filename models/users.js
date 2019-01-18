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
      autoIncrement: true,
      allowNull: false,
    },
    manager_status:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    hire_date: Sequelize.Date,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })

  return User;
}