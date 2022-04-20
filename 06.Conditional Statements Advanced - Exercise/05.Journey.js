function numbersPrint(input) {
    const budjet = Number(input[0]);
    const season = String(input[1]);
    let excursion = "";
    let price = 0;
    if (budjet > 1000) {
        excursion = "Europe";
        if (season == "summer") {
            price = 0.9 * budjet;
        }
        else if (season == "winter") {
            price = 0.9 * budjet;
        }
    }
    else if (budjet <= 100) {
        excursion = "Bulgaria";
        if (season == "summer") {
            price = 0.3 * budjet;
        }
        else if (season == "winter") {
            price = 0.7 * budjet;
        }
    }
    else if (budjet <= 1000) {
        excursion = "Balkans";
        if (season == "summer") {
            price = 0.4 * budjet;
        }
        else if (season == "winter") {
            price = 0.8 * budjet;
        }
    }
    let place="";
    if (season=="summer"){
        place="Camp";
    }
    else if(season=="winter"){
        place="Hotel";
    }
    if(excursion=="Europe"){
        place="Hotel";
    }
    console.log(`Somewhere in ${excursion}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}