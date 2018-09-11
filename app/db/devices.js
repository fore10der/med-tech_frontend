import db from './devices.json';

const devices =  () => {
    return fetch('/devices', {
        gzip: true
    }).then(data => data.json()).then(data => data).catch(e => db)
};

export default devices;
