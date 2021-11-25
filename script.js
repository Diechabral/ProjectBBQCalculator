let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let results = document.getElementById("results");

function calculating() {
    console.log("calculating...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let qttTotalMeat = meatPP(duration) * adults + (meatPP(duration) / 2) * kids;
    let qttTotalBeer = beerPP(duration) * adults;
    let qttTotalBevarage = bevaragePP(duration) * adults + (bevaragePP(duration) / 2) * kids;

    results.innerHTML = `<p>${qttTotalMeat}g of Meat </p>`
    results.innerHTML += `<p>${qttTotalBeer}ml of Beer </p>`
    results.innerHTML += `<p>${qttTotalBevarage}ml of Pop </p>`

}

function meatPP(duration) {
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function beerPP(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}



function bevaragePP(duration) {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}