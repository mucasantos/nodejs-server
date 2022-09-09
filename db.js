const Sequelize = require('sequelize');
const sequelize = new Sequelize('samuca', 'root', 'usbw', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;