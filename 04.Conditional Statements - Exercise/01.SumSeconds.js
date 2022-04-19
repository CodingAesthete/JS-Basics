function numbersPrint(input){
    let firstAthlete = Number(input[0]);
    let secondAthlete=Number(input[1]);
    let thirdAthlete=Number(input[2]);
    let totalTime=firstAthlete+secondAthlete+thirdAthlete;
    let minutes=Math.floor(totalTime/60);
    let seconds= totalTime%60;
    if(seconds<10){
        console.log(`${minutes}:0${seconds}`);
    }
    else{
        console.log(`${minutes}:${seconds}`);
    }
}    