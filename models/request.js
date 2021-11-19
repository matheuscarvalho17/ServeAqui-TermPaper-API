'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.Order);
      Request.hasOne(models.Products);
    }
  }
  Request.init(
    {
      amount: DataTypes.INTEGER,
      idOrder: DataTypes.INTEGER,
      idProduct: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Request',
    },
  );
  return Request;
};
