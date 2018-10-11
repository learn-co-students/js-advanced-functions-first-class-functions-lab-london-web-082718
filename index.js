// Code your solution in this file!



const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
// this declares a variable (returnFirstTwoDrivers) an anonymous function ... 

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//  the first two functions are put into an array 

const createFareMultiplier  = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value;
    };
}
// this function returns a function 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
} 