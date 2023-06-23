/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtnEl = document.getElementById("convert-btn")
const inputBoxEl = document.getElementById("input-box")
const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")

convertBtnEl.addEventListener("click", function(){
    let valueNum = inputBoxEl.value
    let feetValue = toFeet(valueNum)
    let meterValue = toMeter(valueNum)
    let gallonValue = toGallon(valueNum)
    let literValue = toLiter(valueNum)
    let poundValue = toPound(valueNum)
    let kilogramValue = toKilogram(valueNum)
    lengthEl.textContent = `${valueNum} meters = ${feetValue} feet || ${valueNum} feet = ${meterValue} meters`
    volumeEl.textContent = `${valueNum} liters = ${gallonValue} gallons || ${valueNum} gallons = ${literValue} liters`
    massEl.textContent = `${valueNum} kilos = ${poundValue} pounds || ${valueNum} pounds = ${kilogramValue} kilos`
    inputBoxEl.value = ""
})


//calculating funtions
function toFeet(len){
    return (len / 3.281).toFixed(2)
}
function toMeter(len){
    return (len * 3.281).toFixed(2)
}
function toGallon(vol){
    return (vol / 0.264).toFixed(2)
}
function toLiter(vol){
    return (vol * 0.264).toFixed(2)
}
function toPound(mass){
    return (mass / 2.204).toFixed(2)
}
function toKilogram(mass){
    return (mass * 2.204).toFixed(2)
}