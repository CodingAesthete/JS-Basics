function numbersPrint(input) {
    let snum=Number(input.shift());
    let sum=0;
    while(sum<snum){
        sum+=Number(input.shift());
    }
    console.log(sum);
}