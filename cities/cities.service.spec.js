const rewire = require('rewire');
const citiesService = rewire("./cities.service");
const assert = require("assert");
const citiesRepository = rewire("./cities.repository");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect

const mockData = {
    'post code': '94122',
    country: 'United States',
    'country abbreviation': 'US',
    places: [
    {
        'place name': 'San Francisco',
        longitude: '-122.4836',
        state: 'California',
        'state abbreviation': 'CA',
        latitude: '37.7593'
    }
]}
describe("Testing cities.service file.", function () {

    describe("Testing the 'getCityByZipCode' function.", function () {
        it("Returns information about city correctly.", async function () {
            let rev = citiesRepository.__set__("resFinal", mockData);
            assert.strictEqual(await citiesService.getCityByZipCode(94122), 'San Francisco, CA, United States')
            rev();
        })

        it("Returns information about city correctly.", async function () {
            citiesRepository.__set__("resFinal", mockData);
            assert.strictEqual(await citiesService.getCityByZipCode(90210), 'Beverly Hills, CA, United States')
        })

        it("Throws an error with message.",  async function () {
            citiesRepository.__set__("resFinal", mockData);
            await expect(citiesService.getCityByZipCode(2)).to.be.rejectedWith("No cities found!")
        })

    })

})
