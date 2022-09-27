const Sequelize = require("sequelize");
const sequelize = new Sequelize("aulas", "root", "usbw", {
  dialect: "mysql",
  host: "localhost",
  port: 3307,
});

module.exports = sequelize;
