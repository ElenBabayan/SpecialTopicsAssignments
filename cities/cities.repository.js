const axios = require('axios').default;

async function getCityDataByZipCode(zipCode) {
    return await axios.get("https://api.zippopotam.us/us/" + zipCode)      
}

module.exports = {
    getCityDataByZipCode
}
