function numbersPrint(input) {
    let num = String(input[0]);
    let sum=0;
    for (let i = 0; i <= num.length-1; i++) {
        sum+=Number(num[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}