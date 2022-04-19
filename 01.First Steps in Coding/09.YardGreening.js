function numbersPrint(input){
    let area= Number(input[0]);
    let suma=area*7.61;
    let discount=suma*0.18;
    let sum=suma-discount;
    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}   