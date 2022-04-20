function numbersPrint(input) {
    const days = Number(input[0]);
    const typeArrival = String(input[1]);
    const note = String(input[2]);
    let price=0;
    if(typeArrival==="room for one person"){
        price=18.00*(days-1);
    }
    else if(typeArrival==="apartment"){
        price=25.00*(days-1);
        if(days<10){
            price=0.7*price;
        }
        else if(days>=10 && days<=15){
            price=0.65*price;
        }
        else if(days>15){
            price= 0.5*price;
        }
    }
    else if(typeArrival==="president apartment"){
        price=35.00*(days-1);
        if(days<10){
            price=0.9*price;
        }
        else if(days>=10 && days<=15){
            price=0.85*price;
        }
        else if(days>15){
            price= 0.80*price;
        }
    }
    if(note=="positive"){
        price+=0.25*price;
    }
    else if(note=="negative"){
        price-=0.1*price;
    }
    console.log(price.toFixed(2))
}