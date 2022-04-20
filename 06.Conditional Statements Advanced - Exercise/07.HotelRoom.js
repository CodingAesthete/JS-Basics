function numbersPrint(input) {
    const month = String(input[0]);
    const day = Number(input[1]);
    let studio=0;
    let apartment=0;
    if(month==="May" || month==="October"){
        studio=50*day;
        apartment=65*day;
        if(day>14){
            studio=0.70*studio;
        }
        else if(day>7){
            studio=0.95*studio;
        }
    }
    if(month==="June" || month==="September"){
        studio=75.20*day;
        apartment=68.70*day;
        if(day>14){
            studio=0.80*studio;
        }
    }
    if(month==="July" || month==="August"){
        studio=76*day;
        apartment=77*day;
    }
    if(day>14){
        apartment=0.9*apartment;
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}