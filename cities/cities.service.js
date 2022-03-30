const NotFoundError = require("../common/errors/not-found.error");
const citiesRepository = require("./cities.repository");

module.exports = {
    async getCityByZipCode(zipCode) {
        try {
            const response = await citiesRepository.getCityDataByZipCode(zipCode);
            if (!response) {
                throw new NotFoundError("No cities found!");
            }
            const placeName = response.data.places[0]['place name'];
            const stateAbbreviation = response.data.places[0]['state abbreviation'];
            const country = response.data.country;

            return await placeName + ", " + stateAbbreviation + ", " + country;
        }
        catch (error) {
            throw new NotFoundError("No cities found!")
        }
    }
}
