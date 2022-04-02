'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mylist.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    year: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    genre: DataTypes.STRING,
    casting: DataTypes.STRING,
    deskription: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    isMyList: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'mylist',
  });
  return mylist;
};