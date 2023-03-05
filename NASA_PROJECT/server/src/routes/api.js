const planetRouter = require('../routes/planets/planets.router');
const launchRouter = require('../routes/launches/launch.router');
const api = require('express').Router();

api.use('/planets', planetRouter);
api.use('/launches', launchRouter);

module.exports = api;
