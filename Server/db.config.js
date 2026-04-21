const Sequelize = require("sequelize");
const mysql2 = require("mysql2");

let crearConfigDB = () => {
  return new Sequelize("uniLuisPelaez", "root", "admin1234", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
};

module.exports = { crearConfigDB };
