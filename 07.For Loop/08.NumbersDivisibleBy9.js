function numbersPrint(input) {
    let firstNum = Number(input[0]);
    let secondNum=Number(input[1]);
    let sum=0;
    let arro= new Array();
    let index=0;
    for (let i = firstNum; i <= secondNum; i++) {
        if(i%9==0){
            sum+=i;
            arro[index]=i;
            index++;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let i=0; i<=arro.length-1;i++){
        console.log(arro[i]);
    }
}