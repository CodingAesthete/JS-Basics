function numbersPrint(input) {
    let budjet = Number(input[0]);
    let countStatists = Number(input[1]);
    let pricePerStatist = Number(input[2]);
    let priceForStatists = countStatists * pricePerStatist;
    let decor = 0.1 * budjet;
    let expenses = 0;
    if (countStatists <= 150) {
        expenses = priceForStatists + decor;
    }
    else {
        expenses = decor + (priceForStatists * 0.9);
    }
    if (expenses > budjet) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses - budjet).toFixed(2)} leva more.`);
    }
    else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budjet-expenses).toFixed(2)} leva left.`);
    }
}