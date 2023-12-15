const router = require('express').Router();

const { RobotMasterController } = require('../controller/RobotMasterController');

module.exports.RobotMasterApi = (app) => {
    router.get('/', RobotMasterController.getAllRobotMasters);
    router.get('/series', RobotMasterController.getRobotMastersByGame);
    router.get('/id/:id', RobotMasterController.getRobotMasterById);
    router.get('/search', RobotMasterController.searchRobotMasters); //http://localhost:3000/api/robotmasters/search?name=Metal
    router.post('/', RobotMasterController.createRobotMaster);
    router.post('/bulk', RobotMasterController.createRobotMasters);

    app.use('/api/robotmasters', router);
}