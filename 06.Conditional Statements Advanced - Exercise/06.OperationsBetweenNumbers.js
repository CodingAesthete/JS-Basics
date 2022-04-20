function numbersPrint(input) {
    const firstNum = Number(input[0]);
    const secondNum = Number(input[1]);
    const sign = String(input[2]);
    let result = 0;
    let typeNum="";
    if (sign == "+") {
        result = firstNum + secondNum;
        if(result%2==0){
            typeNum="even";
        }
        else{
            typeNum="odd";
        }
        console.log(`${firstNum} + ${secondNum} = ${result} - ${typeNum}`);
    }
    else if (sign == "-") {
        result = firstNum - secondNum;
        if(result%2==0){
            typeNum="even";
        }
        else{
            typeNum="odd";
        }
        console.log(`${firstNum} - ${secondNum} = ${result} - ${typeNum}`);
    }
    else if (sign == "*") {
        result = firstNum * secondNum;
        if(result%2==0){
            typeNum="even";
        }
        else{
            typeNum="odd";
        }
        console.log(`${firstNum} * ${secondNum} = ${result} - ${typeNum}`);
    }
    else if (sign == "/") {
        if(secondNum==0){
            console.log(`Cannot divide ${firstNum} by zero`);
            return;
        }
        result = Number(firstNum / secondNum);
        console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`);
    }
    else if (sign == "%") {
        if(secondNum==0){
            console.log(`Cannot divide ${firstNum} by zero`);
            return;
        }
        result = firstNum % secondNum;
        console.log(`${firstNum} % ${secondNum} = ${result}`);
    }
}