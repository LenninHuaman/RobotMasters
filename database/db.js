const Sequelize = require('sequelize');
const robotMasterModel = require('../models/RobotMaster');

const sequelize = new Sequelize("RobotMasterDB", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

const robotMasterDB = robotMasterModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log("Synconized tables");
});

module.exports = {robotMasterDB};