function numbersPrint(input){
    let hours = Number(input[0]);
    let minutes=Number(input[1]);
    let hoursInMins=hours*60;
    let totalMins=hoursInMins+minutes;
    let totalWithSum=totalMins+15;
    let newMins=totalWithSum%60;
    let leftHours=(totalWithSum-newMins)/60;
    if(newMins==60){
        leftHours+=1;
        newMins=0;
    }
    else if(newMins>60){
        leftHours+=1;
        newMins-=60;
    }
    if(leftHours>23){
        leftHours=0;
    }
    if(newMins<10){
        console.log(`${leftHours}:0${Math.round(newMins)}`)
    }
    else{
        console.log(`${leftHours}:${Math.round(newMins)}`)
    }
} 