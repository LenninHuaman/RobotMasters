const { RobotMasterServices } = require('../services/RobotMasterService');

const getAllRobotMasters = async (req, res) => {
    try {
        const robotMasters = await RobotMasterServices.getAllRobotMasters();
        res.json(robotMasters);
    } catch (error) {
        res.send("Error: " + error);
    }
};

const getRobotMasterById = async (req, res) => {
    try {
        const robotMaster = await RobotMasterServices.getRobotMasterById(req.params.id);
        res.json(robotMaster);
    } catch (error) {
        res.send("Error: " + error);
    }
};

const getRobotMastersByGame = async (req, res) => {
    try {
        const robotMasters = await RobotMasterServices.getRobotMastersByGame(req.query.series);
        res.json(robotMasters);
    } catch (error) {
        res.send("Error: " + error);
    }
};

const searchRobotMasters = async (req, res) => {
    try{
        const name = await RobotMasterServices.searchRobotMasters(req.query.name);
        res.json(name);
    } catch (error) {
        res.send("Error: " + error);
    }
};

const createRobotMaster = async (req, res) => {
    try {
        const newRobotMaster = await RobotMasterServices.createRobotMaster(req.body);
        res.json(newRobotMaster);
    } catch (error) {
        res,send("Error: " + error);
    }
};

const createRobotMasters = async (req, res) => {
    try {
        const newRobotMasters = await RobotMasterServices.createRobotMasters(req.body);
        res.json(newRobotMasters);
    } catch (error) {
        res.send("Error: " + error);
    }
};

module.exports.RobotMasterController = {
    getAllRobotMasters,
    getRobotMasterById,
    getRobotMastersByGame,
    searchRobotMasters,
    createRobotMaster,
    createRobotMasters
};