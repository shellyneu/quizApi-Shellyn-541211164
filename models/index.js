const dbConfig = require("../config/db");
const Sequelize = require("sequelize");
const sequlize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAlias: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequlize = sequlize;

// define mode
db.quizzes = require("./quiz")(sequlize, Sequelize);
db.user = require("./user")(sequlize, Sequelize);
module.exports = db;
