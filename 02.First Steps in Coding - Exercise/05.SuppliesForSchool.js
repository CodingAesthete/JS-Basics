function numbersPrint(input){
    let ballpoints= Number(input[0]);
    let markers=Number(input[1]);
    let litresDetergent= Number(input[2]);
    let percentageDiscount=Number(input[3]);
    let grossSum=ballpoints*5.80+markers*7.20+litresDetergent*1.20;
    let netSum=(1-percentageDiscount/100)*grossSum;
    console.log(netSum);
}    