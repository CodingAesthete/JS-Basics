function numbersPrint(input) {
    const length = Number(input[0]);
    const width = Number(input[1]);
    let area = length * width;
    let index = 2;
    while (input[index] != "STOP") {
        let curr = Number(input[index]);
        index++;
        area -= curr;
        if(area<0){
            console.log(`No more cake left! You need ${-area} pieces more.`);
            return;
        }
    }
    console.log(`${area} pieces are left.`);
}