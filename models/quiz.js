// const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Quiz = sequelize.define("quiz", {
    quiz: {
      type: Sequelize.STRING,
    },
    a: {
      type: Sequelize.STRING,
    },
    b: {
      type: Sequelize.STRING,
    },
    b: {
      type: Sequelize.STRING,
    },
    d: {
      type: Sequelize.STRING,
    },
    key: {
      type: Sequelize.STRING,
    },
    categoryID: {
      type: Sequelize.INTEGER,
    },
    levelId: {
      type: Sequelize.INTEGER,
    },
  });
  return Quiz;
};