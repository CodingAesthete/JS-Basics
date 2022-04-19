function numbersPrint(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let metersPerSecond = Number(input[2]);
    let netTime = distance * metersPerSecond;
    let times = Math.floor(distance / 15);
    let addTime = times * 12.5;
    let totalTime = netTime + addTime;
    if(totalTime<record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else{
        let diff= totalTime.toFixed(2)-record
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}