function numbersPrint(input) {
    let typeFlower = String(input[0]);
    let countFlowers = Number(input[1]);
    let budjet = Number(input[2]);
    let price = 0;
    if (typeFlower == "Roses") {
        price = countFlowers * 5;
        if(countFlowers>80){
            price=0.9*price;
        }
    }
    else if (typeFlower == "Dahlias") {
        price = countFlowers * 3.80;
        if(countFlowers>90){
            price=0.85*price;
        }
    }
    else if (typeFlower == "Tulips") {
        price = countFlowers * 2.80;
        if(countFlowers>80){
            price=0.85*price;
        }
    }
    else if (typeFlower == "Narcissus") {
        price = countFlowers * 3;
        if(countFlowers<120){
            price=1.15*price;
        }
    }
    else if (typeFlower == "Gladiolus") {
        price = countFlowers * 2.50;
        if(countFlowers<80){
            price=1.20*price;
        }
    }
    if(price>budjet){
        console.log(`Not enough money, you need ${(price-budjet).toFixed(2)} leva more.`);
    }
    else{
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${(budjet-price).toFixed(2)} leva left.`);
    }
}