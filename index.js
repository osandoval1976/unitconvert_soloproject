/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const liter = 0.264
const kilogram = 2.204
const feet = 0.3048

//button//
let convert = document.getElementById("text2")
//Displaying html//
let sText = document.getElementById("supporting-text") //innerHtml//
let sText1 = document.getElementById("supporting-text2") //innerHtml//
let sText2 = document.getElementById("supporting-text1") //innerHtml//
 
  
  

//Convert button function//
convert.addEventListener("click", function() {
  let nconvert = document.getElementById("ntn").value//input value//
  let lenghtFeet = nconvert / feet //convert to meters
  let lenghtMeter = nconvert * feet // convert to feets
  let volLiters = nconvert * liter // convert to liters
  let volGallons = nconvert / liter// convert to gallons
  let masskilograms = nconvert * kilogram//convert to Kilograms
  let massPounds = nconvert / kilogram// convert to pounds
  //Displaying the result//
  sText.innerHTML =`${nconvert} meters = ${lenghtFeet.toFixed(3)} feets | ${nconvert} feets = ${lenghtMeter.toFixed(3)} meters `
  sText1.innerHTML =`${nconvert} liters = ${volLiters.toFixed(3)} gallons | ${nconvert} gallons = ${volGallons.toFixed(3)} liters `
  sText2.innerHTML =`${nconvert} kilos = ${masskilograms.toFixed(3)} pounds | ${nconvert} pounds = ${massPounds.toFixed(3)} kilos`
});





















