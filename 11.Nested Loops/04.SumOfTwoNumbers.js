function numbersPrint(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magic = Number(input[2]);
    let counter=0;
    for(let i =firstNum; i<=secondNum; i++){
        for(let e=firstNum; e<=secondNum; e++){
            counter++;
            let result=i+e;
            if(result==magic){
                console.log(`Combination N:${counter} (${i} + ${e} = ${magic})`);
                return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magic}`);
}