const planets = require('../../models/planets.model');

exports.getAllPlanets = (req, res, next) =>{
    return res.status(200).json({message: "ubbu is the man"});
}