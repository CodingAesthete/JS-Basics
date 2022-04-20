function numbersPrint(input) {
    let age = Number(input[0]);
    let priceWashingmachine = Number(input[1]);
    let priceEachToy = Number(input[2]);
    let sparedMoney = 0;
    let countToys = 0;
    let giftMoney = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            countToys++;
        }
        else {
            if (i == 2) {
                giftMoney = 10.00;
            }
            else{
                giftMoney+=10.00;
            }
            sparedMoney+=(giftMoney-1.00);
        }
    }
    sparedMoney += countToys * priceEachToy;
    if(sparedMoney<priceWashingmachine){
        console.log(`No! ${(priceWashingmachine-sparedMoney).toFixed(2)}`);
    }
    else{
        console.log(`Yes! ${(sparedMoney-priceWashingmachine).toFixed(2)}`);
    }
}