'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    editable: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    ingredients: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};