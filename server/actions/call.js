const axios = require('axios');
const configs = require('../config/devKeys').keys;

const url = `${configs.base_url}app_id=${configs.app_id}&app_key=${configs.app_key}${configs.end_url}`;
console.log('url: ', url);

const queryData = async () => {
    try {
        return await axios.get(url);
    } catch (e) {
        console.error(e);
    }
}

const readData = async () => {
    const rawData = await queryData();
    return rawData;
}

exports.readData = readData;