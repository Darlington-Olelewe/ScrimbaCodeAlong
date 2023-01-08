
const input = document.getElementById("input");
input.value = 0;
const convert = document.getElementById("convert");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

const showValues =(raw)=>{
    length.textContent = `${raw} meters = ${Number(raw*3.281).toFixed(3)} feet | ${raw} feet = ${Number(raw/3.281).toFixed(3)} meters`
    volume.textContent = `${raw} liters = ${Number(raw*0.264).toFixed(3)} gallons | ${raw} gallons = ${Number(raw/0.264).toFixed(3)} liters`
    mass.textContent = `${raw} kilos = ${Number(raw*2.204).toFixed(3)} pounds | ${raw} pounds = ${Number(raw/2.204).toFixed(3)} kilos`
}
showValues(0)
convert.addEventListener("click",(e)=>{
    e.preventDefault();
    showValues(input.value)
})

input.addEventListener("input",(e)=>{
    input.value = Number(e.target.value)
})




