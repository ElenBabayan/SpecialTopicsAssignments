const axios = require('axios').default;

async function getCityDataByZipCode(zipCode) {
    return await axios.get("https://api.zippopotam.us/us/" + zipCode)
}

async function getCityDataByZipCodeS(zipCode) {
    const res = await getCityDataByZipCode(zipCode);
    const resFinal = {
        placeName: res.data.places[0]['place name'],
        stateAbbreviation: response.data.places[0]['state abbreviation'],
        country: response.data.country
    }
    return resFinal;
}

module.exports = {
    getCityDataByZipCode,
    getCityDataByZipCodeS
}
