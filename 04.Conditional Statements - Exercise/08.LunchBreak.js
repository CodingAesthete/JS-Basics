function numbersPrint(input) {
    let nameSerial = String(input[0]);
    let durEpisode = Number(input[1]);
    let durBreak = Number(input[2]);
    let lunchTime=durBreak/8;
    let relaxTime=durBreak/4;
    let leftTime=durBreak-(lunchTime+relaxTime);
    if(durEpisode<leftTime){
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(leftTime-durEpisode)} minutes free time.`);
    }
    else{
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(durEpisode-leftTime)} more minutes.`);
    }
}