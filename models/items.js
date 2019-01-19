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
      type: DataTypes.STRING,
      default: "000000000000",
      validate:{
        len:[12],
        is: ["^[a-zA-Z0-9]+$",'i'],
      }
    },
    category: {
      type:DataTypes.STRING,
      validate:{
        len:[3,3],
        is: ["^[A-Z0-9]+$",'i']
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
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