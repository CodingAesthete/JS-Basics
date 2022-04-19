function numbersPrint(input){
    let protectiveNylon= Number(input[0]);
    let paint=Number(input[1]);
    let paintThinner= Number(input[2]);
    let hoursWork=Number(input[3]);
    let sum=(protectiveNylon+2)*1.50+(1.1*paint)*14.50
    +paintThinner*5.00+0.40;
    let payPerHour=0.3*sum;
    console.log(payPerHour*hoursWork+sum);
}  