/*  External API*/
var FlightListAPI = function () {
  //creation
};

FlightListAPI.prototype = {
  getFlight: function () {
    // get master list of flights
    console.log("Generating flight List");
  },

  searchFlight: function (flightDetails) {
    // search through the flight list based on criteria
    console.log("Searching for flight");
  },

  addFlight: function (flightData) {
    // add a new flight to the database
    console.log("Adding new flight to DB");
  },
};

// creating the proxy
var FlightListProxy = function () {
  // getting a reference to the original object
  this.flightList = new FlightListAPI();
};

FlightListProxy.prototype = {
  getFlight: function () {
    return this.flightList.getFlight();
  },

  searchFlight: function (flightDetails) {
    return this.flightList.searchFlight(flightDetails);
  },

  addFlight: function (flightData) {
    return this.flightList.addFlight(flightData);
  },
};

console.log("----------With Proxy----------");
const proxy = new FlightListProxy();
console.log(proxy.getFlight());
/*
 
OUTPUT
 
----------With Proxy----------
Generating flight List
 
 
*/
