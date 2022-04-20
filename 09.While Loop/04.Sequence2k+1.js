function numbersPrint(input) {
    let snum = Number(input[0]);
    let num = 1;
    while (num <= snum) {
        console.log(num);
        num=2*num+1;
    }
}