function numbersPrint(input) {
    let badNotes = Number(input[0]);
    index = 1;
    let sum = 0;
    let lastTask = "";
    let badCounter = 0;
    let allCounter=0;
    while (input[index] != "Enough") {
        let taskName = String(input[index ]);
        let note = Number(input[index + 1]);
        if (note <= 4.00) {
            badCounter++;
        }
        if(badCounter==badNotes){
            console.log(`You need a break, ${badNotes} poor grades.`);
            return;
        }
        sum += note;
        lastTask = taskName;
        index += 2;
        allCounter++;
    }
    let avg= sum/allCounter;
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${allCounter}`);
    console.log(`Last problem: ${lastTask}`);
}