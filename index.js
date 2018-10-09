// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0,2)

const returnLastTwoDrivers = array => array.slice(array.length - 2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return fare => fare * integer
}

const fareDoubler = createFareMultiplier (2)


const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers (array, f){
    return f(array)
}
