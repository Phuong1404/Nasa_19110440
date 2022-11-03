const express = require('express')

const {
    httpGetAllLaunches,
    httpAddNewLaunches,
    httpAborthLaunch
} = require('./launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunches);
launchesRouter.delete('/:id',httpAborthLaunch);
module.exports = launchesRouter
