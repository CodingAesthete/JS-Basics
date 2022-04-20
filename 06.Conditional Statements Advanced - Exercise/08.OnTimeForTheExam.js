function numbersPrint(input) {
    const hourOfExam = Number(input[0]);
    const minuteOfExam = Number(input[1]);
    const hourOfArr = Number(input[2]);
    const minuteOfArr = Number(input[3]);
    let totalExam = hourOfExam * 60 + minuteOfExam;
    let totalArr = hourOfArr * 60 + minuteOfArr;
    if (hourOfExam === hourOfArr && minuteOfExam == minuteOfArr) {
        console.log("On time");

    }
    else if (totalExam - totalArr <= 30 && totalExam-totalArr>0) {
        console.log("On time");
        console.log(`${totalExam - totalArr} minutes before the start`);
    }
    else if (totalExam - totalArr > 30) {
        if (totalExam - totalArr < 60) {
            console.log("Early");
            console.log(`${totalExam - totalArr} minutes before the start`);
        }
        else{
            let diff=totalExam-totalArr;
            let diffHour=diff/60;
            let diffMin=diff%60;
            if(diffMin<10){
                console.log("Early");
                console.log(`${Math.floor(diffHour)}:0${diffMin} hours before the start`);
            }
            else{
                console.log("Early");
                console.log(`${Math.floor(diffHour)}:${diffMin} hours before the start`);
            }
        }
    }
    else if (totalArr > totalExam) {
        if (totalArr - totalExam < 60 && totalArr-totalExam>0) {
            console.log("Late");
            console.log(`${totalArr - totalExam} minutes after the start`);
        }
        else{
            let diff=totalArr-totalExam;
            let diffHour=diff/60;
            let diffMin=diff%60;
            if(diffMin<10){
                console.log("Late");
                console.log(`${Math.floor(diffHour)}:0${diffMin} hours after the start`);
            }
            else{
                console.log("Late");
                console.log(`${Math.floor(diffHour)}:${diffMin} hours after the start`);
            }
        }
    }
}