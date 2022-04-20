function numbersPrint(input) {
    let moneyForExcursion = Number(input[0]);
    let havingMoney=Number(input[1]);
    let spendCounter=0;
    let days=0;
    let index=2;
    while(spendCounter<5){
        days++;
        if(input[index]=="spend"){
            spendCounter++;
            havingMoney-=Number(input[index+1]);
            if(havingMoney<=0){
                havingMoney=0;
            }
        }
        else if(input[index]=="save"){
            spendCounter=0;
            havingMoney+=Number(input[index+1]);
            if(havingMoney>=moneyForExcursion){
                console.log(`You saved the money for ${days} days.`);
                return;
            }
        }
        index+=2;
    }
    console.log(`You can't save the money.`)
    console.log(days);
}