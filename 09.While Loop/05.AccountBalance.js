function numbersPrint(input) {
    let curr = input.shift();
    let sum = 0;
    while (curr != "NoMoreMoney") {
        let money = Number(curr);
        if (money < 0) {
            console.log("Invalid operation!")
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`)
        sum+=money;
        curr=input.shift();
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}