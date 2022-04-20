function numbersPrint(input) {
    const budjet = Number(input[0]);
    const season = String(input[1]);
    const fishers = Number(input[2]);
    let priceTrip = 0;
    if (season === "Spring") {
        priceTrip = 3000;
    }
    else if (season === "Summer") {
        priceTrip = 4200;
    }
    else if (season === "Autumn") {
        priceTrip = 4200;
    }
    else if (season === "Winter") {
        priceTrip = 2600;
    }
    if (fishers <= 6) {
        priceTrip = 0.9 * priceTrip;
    }
    else if (fishers >= 7 && fishers <= 11) {
        priceTrip = 0.85 * priceTrip;
    }
    else if (fishers >= 12) {
        priceTrip = 0.75 * priceTrip;
    }
    if(fishers%2==0 && season!="Autumn"){
        priceTrip=0.95*priceTrip;
    }
    if(budjet<priceTrip){
        console.log(`Not enough money! You need ${(priceTrip-budjet).toFixed(2)} leva.`);
    }
    else{
        console.log(`Yes! You have ${(budjet-priceTrip).toFixed(2)} leva left.`);
    }
}