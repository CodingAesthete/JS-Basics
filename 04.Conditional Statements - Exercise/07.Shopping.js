function numbersPrint(input) {
    let budjet = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let rams = Number(input[3]);
    let videoPrices=videocards*250;
    let eachProcessor=0.35*videoPrices;
    let processorPrices= processors*eachProcessor;
    let eachRam=0.10*videoPrices;
    let ramPrices= rams*eachRam;
    let sum=videoPrices+processorPrices+ramPrices;
    if(videocards>processors){
        sum=0.85*sum;
    }
    if(sum<=budjet){
        console.log(`You have ${(budjet-sum).toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${(sum-budjet).toFixed(2)} leva more!`);
    }
}