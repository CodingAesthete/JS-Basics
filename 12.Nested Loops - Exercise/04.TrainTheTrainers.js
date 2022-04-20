function numbersPrint(input) {
    let jury = Number(input[0]);
    let index=1;
    let avg=0;
    let allNotes=0;
    let counter=0;
    let totalAvg=0;
    while(input[index]!="Finish"){
        let pres= String(input[index]);
        index++;
        let sum=0;
        for(i=0; i<jury; i++){
            counter++;
            sum+=Number(input[index]);
            allNotes+=Number(input[index]);
            index++;
        }
        avg=sum/jury;
        console.log(`${pres} - ${avg.toFixed(2)}.`)
    }
    totalAvg=allNotes/counter;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`);
}