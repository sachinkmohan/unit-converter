/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const textEl = document.getElementById("text-el");
console.log(textEl);
const meterEl = document.getElementById("meter");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

// textEl.addEventListener("input", function () {
//   renderMeterData(textEl.value);
//   renderVolumeData(textEl.value);
//   renderMassData(textEl.value);
// });

function renderAllData() {
  renderMeterData(textEl.value);
  renderVolumeData(textEl.value);
  renderMassData(textEl.value);
}

function renderMeterData(val) {
  const metersToFeet = 3.281;
  let meterTofeetData = 0;
  let feetToMeterData = 0;
  meterTofeetData = (val * metersToFeet).toFixed(3);
  feetToMeterData = (val / metersToFeet).toFixed(3);

  meterEl.textContent = `${val} meters = ${meterTofeetData} feet | ${val} feet = ${feetToMeterData} meters `;
}

function renderVolumeData(val) {
  const litersToGallon = 0.264;
  let literToGallonData = 0;
  let gallonToLiterData = 0;
  literToGallonData = (val * litersToGallon).toFixed(3);
  gallonToLiterData = (val / litersToGallon).toFixed(3);

  volumeEl.textContent = `${val} liters = ${literToGallonData} gallons | ${val} gallons = ${gallonToLiterData} liters `;
}

function renderMassData(val) {
  const kilosToPound = 2.204;
  let kiloToPoundData = 0;
  let poundToKiloData = 0;
  kiloToPoundData = (val * kilosToPound).toFixed(3);
  poundToKiloData = (val / kilosToPound).toFixed(3);

  massEl.textContent = `${val} kilos = ${kiloToPoundData} pound | ${val} pound = ${poundToKiloData} kilos `;
}
