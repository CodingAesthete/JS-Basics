function numbersPrint(input) {
    let current = input.shift();
    let prosti = 0;
    let slojni = 0;
    while (current != "stop") {
        let num = Number(current);
        if(num<0){
            console.log(`Number is negative.`);
            current=input.shift();
            continue;
        }
        if (num % 2 == 0 && num != 2) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 3 == 0 && num != 3) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 5 == 0 && num != 5) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 7 == 0 && num != 7) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 11 == 0 && num != 11) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 13 == 0 && num != 13) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 17 == 0 && num != 17) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 19 == 0 && num != 19) {
            slojni += num;
            current=input.shift();
            continue;
        }
        else if (num % 23 == 0 && num != 23) {
            slojni += num;
            current=input.shift();
            continue;
        }
        prosti += num;
        current=input.shift();
    }
    console.log(`Sum of all prime numbers is: ${prosti}`);
    console.log(`Sum of all non prime numbers is: ${slojni}`);
}