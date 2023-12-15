const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { RobotMasterApi } = require('./routes/RobotMasterRoutes');

require("./database/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
RobotMasterApi(app);

app.listen(3000, () => { console.log('Server is running in port 3000') });