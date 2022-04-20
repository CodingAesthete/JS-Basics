function numbersPrint(input) {
    let sum = 0;
    let i = 0;
    while (input[i] != "Going home") {
        sum += Number(input[i]);
        if (sum >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - 10000} steps over the goal!`);
            return;
        }
        i+=1;
    }
    var lastSum=Number(input[i+1]);
    sum+=lastSum;
    if (sum >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sum - 10000} steps over the goal!`);
    }
    else{
        console.log(`${10000-sum} more steps to reach goal.`);
    }
}