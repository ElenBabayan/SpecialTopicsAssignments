// In cities.repository.spec test the function getCityDataByZipCode of citiesRepository
// ○ You should stub the axios.get function and check it to be
// called exactly once with the correct parameter.

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const mocha = require('mocha');
const citiesService = require("./cities.service");
const citiesRepository = require("./cities.repository");

// function responseData() {
//     return {
//       email: `someemail@user${id}.com`,
//       first_name: `firstName${id}`,
//       last_name: `lastName${id}`,
//       avatar: `https://www.somepage${id}.com`,
//     };
//   }

describe("Testing cities.repository file.", function () {
    let getCityDataByZipCodeStub;

    // beforeEach(function () {
    //     getCityDataByZipCodeStub = sinon.stub(citiesService, "getCityByZipCode");
    // });

    // afterEach(function () {
    //     getCityDataByZipCodeStub.restore();
    // });



    describe("Testing the 'getCityDataByZipCode' function.", function () {
        it("Returns information about city correctly.", async function () {
            // arrange
            getCityDataByZipCodeStub = sinon.stub(citiesRepository, "getCityDataByZipCode");

            getCityDataByZipCodeStub.returns("San Francisco, CA, United States");

            const result = await citiesService.getCityByZipCode(94122);

            console.log(result);
            result.should.eventually.be.equal(getCityDataByZipCodeStub());

            assert.equal(getCityDataByZipCodeStub.calledOnce, true);
        })
    })

})
