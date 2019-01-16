module.exports = (sequelize, DataTypes) =>{
  const Customer = sequelize.define("Customer", {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_credit:{
      type:DataTypes.FLOAT,
      allowNull: false,
      default:0.00,
      validate: {
        min: 0.00
      }
    },
    //I need to find out what ids users can have, WotC, WH40k, etc.
  });

  return Customer;
}