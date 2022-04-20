function numbersPrint(input) {
    let drink = String(input[0]);
    let town = String(input[1]);
    let count = Number(input[2]);
    let sum = 0;
    if (town === "Varna") {
        if (drink === "coffee") {
            sum = 0.45 * count;
        }
        else if(drink==="water"){
            sum=0.70*count;
        }
        else if(drink==="beer"){
            sum=1.10*count;
        }
        else if(drink==="sweets"){
            sum=1.35*count;
        }
        else{
            sum=1.55*count;
        }
    }
    if (town === "Sofia") {
        if (drink === "coffee") {
            sum = 0.50 * count;
        }
        else if(drink==="water"){
            sum=0.80*count;
        }
        else if(drink==="beer"){
            sum=1.20*count;
        }
        else if(drink==="sweets"){
            sum=1.45*count;
        }
        else{
            sum=1.60*count;
        }
    }
    if (town === "Plovdiv") {
        if (drink === "coffee") {
            sum = 0.40 * count;
        }
        else if(drink==="water"){
            sum=0.70*count;
        }
        else if(drink==="beer"){
            sum=1.15*count;
        }
        else if(drink==="sweets"){
            sum=1.30*count;
        }
        else{
            sum=1.50*count;
        }
    }
    console.log(sum);
}