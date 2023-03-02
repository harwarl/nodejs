const launches = new Map();

let latestLaunchTime = 100;

const launch = {
    LaunchNumber: 100,
    mission : "Kepler Exploration X",
    rocket: "Explorer X",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true, 
    success: true
}

launches.set(launch.LaunchNumber, launch);

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

function existsLaunchWIthId(launchId){
    console.log(launches)
    return launches.has(launchId);
}

function getLaunches(){
    return Array.from(launches.values())
}

function addLaunch(launch){
    latestLaunchTime++;
    launches.set(latestLaunchTime, Object.assign(launch, {
        success: true, 
        upcoming: true, 
        customer: ['Adewale', 'Oduwale'],
        launchDate: latestLaunchTime
    }))
}

module.exports = {
    existsLaunchWIthId,
    getLaunches,
    addLaunch,
    abortLaunchById
};