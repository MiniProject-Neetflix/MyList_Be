const Mylist = require("../models/mylist");
const sequelize = require("../models/index").sequelize;
const { DataTypes } = require("sequelize");

module.exports = {
  getList: async (req, res) => {
    try {
      const data = await Mylist(sequelize, DataTypes).findAll({
        attributes: [
          "id",
          "userId",
          "title",
          "image",
          "year",
          "duration",
          "genre",
          "casting",
          "deskription",
          "rating",
          "isMyList",
        ],
        offset: JSON.parse(req.query.page),
        limit: JSON.parse(req.query.size),
      });
      res.status(200).json({ message: "Succes", data: data });
    } catch (err) {
      res.status(422).json({ message: err.sqlMessage });
    }
  },

  createList: async (req, res) => {
    try {
      const data = await Mylist(sequelize, DataTypes).create({
        userId: req.body.userId,
        title: req.body.title,
        image: req.body.image,
        year: req.body.year,
        duration: req.body.duration,
        genre: req.body.genre,
        casting: req.body.casting,
        deskription: req.body.deskription,
        rating: req.body.rating,
        isMyList: req.body.isMyList,
      });
      res.status(200).json({ message: "Success", data: data });
    } catch (err) {
      res.status(422).json({ message: err.sqlMessage });
    }
  },
};
