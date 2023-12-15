const { robotMasterDB } = require('../database/db');
const { Op } = require('sequelize');

const getAllRobotMasters = async () => {
    const robotMasters = await robotMasterDB.findAll();
    return robotMasters;
};

const getRobotMasterById = async (_id) => {
    const robotMaster = await robotMasterDB.findOne({
        where: { id: _id }
    });
    return robotMaster;
};

const getRobotMastersByGame = async (_series) => {
    const robotMasters = await robotMasterDB.findAll({
        where: { series: _series }
    });
    return robotMasters;
};

const searchRobotMasters = async (_name) => {
    const robotMasters = await robotMasterDB.findAll({
        where: {
            name: {
                [Op.like]: `${_name}%`
            }
        }
    });

    return robotMasters;
};

const createRobotMaster = async (_robotMaster) => {
    const newRobotMaster = await robotMasterDB.create(_robotMaster);
    return newRobotMaster;
};

const createRobotMasters = async (_robotMasters) => {
    const newRobotMasters = await robotMasterDB.bulkCreate(_robotMasters);
    return newRobotMasters;
};

module.exports.RobotMasterServices = {
    getAllRobotMasters,
    getRobotMasterById,
    getRobotMastersByGame,
    searchRobotMasters,
    createRobotMaster,
    createRobotMasters
};