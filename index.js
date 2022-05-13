// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr){
    return driverArr.slice(0,2);
   }
   
   const returnLastTwoDrivers = function (driverArr){
     return driverArr.slice(driverArr.length-2, driverArr.length)
   }
   
   const selectingDrivers = [
     returnFirstTwoDrivers, returnLastTwoDrivers
   ];
   
   function createFareMultiplier(num){
     return function(fare){
       return fare * num;
     }
   }
   
   