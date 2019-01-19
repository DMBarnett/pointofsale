module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    abbreviation: {
      type: DataTypes.STRING,
      validate: {
        len: [3,3],
        isUppercase: true,
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })

  Category.associate = function(models){
    Category.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };

  return Category;
}