const sinon = require('sinon');
const citiesRepository = require("./cities.repository");
const assert = require("assert");

res = {
    placeName: 'San Francisco',
    stateAbbreviation: 'US',
    country: 'United States'
}
res2 = {
    placeName: 'Beverly Hills',
    stateAbbreviation: 'US',
    country: 'United States'
}
describe("Testing cities.repository file.", function () {

    let getCityDataByZipCodeStub;

    beforeEach(function () {
        getCityDataByZipCodeStub = sinon.stub(citiesRepository, "getCityDataByZipCodeS");
    });

    afterEach(function () {
        getCityDataByZipCodeStub.restore();
    });

    describe("Testing the 'getCityDataByZipCode' function.", function () {
        it("Returns information about city correctly.", async function () {
            getCityDataByZipCodeStub.withArgs(94122).returns(res);
            assert.equal(citiesRepository.getCityDataByZipCodeS(94122), getCityDataByZipCodeStub(94122))

            assert.strictEqual(getCityDataByZipCodeStub.calledTwice, true);
        })
    })

    describe("Testing the 'getCityDataByZipCode' function.", function () {
        it("Returns information about city correctly.", async function () {
            getCityDataByZipCodeStub.withArgs(90210).returns(res2);
            assert.equal(citiesRepository.getCityDataByZipCodeS(90210), getCityDataByZipCodeStub(90210))

            assert.strictEqual(getCityDataByZipCodeStub.calledTwice, true);
        })
    })
})
