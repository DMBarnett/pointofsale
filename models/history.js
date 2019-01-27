module.exports = function(sequelize, DataTypes) {
  const Hist = sequelize.define("History", {
    customerID:{
      type:DataTypes.STRING,
      allowNull: false
    },
    item_id:{
      type:DataTypes.STRING,
      allowNull: false
    },
    customerName:{
      type:DataTypes.STRING,
      allowNull: false
    },
    cardName:{
      type:DataTypes.STRING,
      allowNull: false
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    price_each:{
      type:DataTypes.FLOAT,
      allowNull: false,
    }
  });

  return Hist;
}