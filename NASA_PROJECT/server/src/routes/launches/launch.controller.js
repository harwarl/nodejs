const { getLaunches, addLaunch, existsLaunchWIthId, abortLaunchById} = require('../../models/launches.model');

exports.httpGetAllLaunches = (req, res, next) =>{
    //lauches is  a map that has keys and values
    return res.status(200).json(getLaunches());  
}

exports.httpAddNewLaunch = (req, res, next) =>{
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: 'Missing required launch property'
        })
    }
    
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)){
        return res.status(400).json({ 
            error: 'Invalid launch Date'
        })
    }
    
    addLaunch(launch);
    return res.status(201).json(launch);   
}

exports.httpAbortLaunch = (req, res, next)=>{
    const launchId = Number(req.params.id);

    if(!existsLaunchWIthId(launchId)){
        return res.status(404).json({
            error: 'Launch not found'
        });
    }

    const aborted = abortLaunchById(launchId);
    if(!aborted){
        return res.status(400).json({
            error: 'Launch not aborted'
        });
    }

    return res.status(200).json({
        ok: true
    })
}