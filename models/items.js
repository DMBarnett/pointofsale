module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    name:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0.00,
      validate:{
        min:0.00
      }
    },
    barcode: {
      type: DataTypes.STRING
    },
    category: {
      type:DataTypes.STRING
    }
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return Item;
}