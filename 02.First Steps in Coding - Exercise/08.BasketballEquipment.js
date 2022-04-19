function numbersPrint(input){
    let annualFee = Number(input[0]);
    let trainers=0.6*annualFee;
    let kit=0.8*trainers;
    let ball=0.25*kit;
    let accessories= 0.2*ball;
    let sum=annualFee+trainers+kit+ball+accessories;
    console.log(sum);
}  