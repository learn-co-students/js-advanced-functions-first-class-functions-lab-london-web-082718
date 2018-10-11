const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplyBy => (fare => (multiplyBy * fare))

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = (drivers, specified) => specified(drivers)