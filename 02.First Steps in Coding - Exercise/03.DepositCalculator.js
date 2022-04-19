function numbersPrint(input){
    let deposit= Number(input[0]);
    let term=Number(input[1]);
    let percent= Number(input[2])/100;
    let sum= deposit+term*((deposit*percent)/12);
    console.log(sum);
} 