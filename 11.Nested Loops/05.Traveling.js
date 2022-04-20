function numbersPrint(input) {
    let i = 0;
    let sum = 0;
    while (String(input[i]) != "End") {
        let destination = String(input[i]);
        let needed = Number(input[i+1]);
        i+=2;
        while(sum<needed){
            sum += Number(input[i]);
            i++;
        }
        sum=0;
        console.log(`Going to ${destination}!`);
        continue;
    }
}