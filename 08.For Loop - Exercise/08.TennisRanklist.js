function numbersPrint(input) {
    let tournamets = Number(input[0]);
    let basePoints = Number(input[1]);
    let gainedPoints = 0;
    let wins = 0;
    for (i = 2; i <= tournamets + 1; i++) {
        if (String(input[i]) == "W") {
            basePoints += 2000;
            gainedPoints += 2000;
            wins++;
        }
        else if (String(input[i]) == "F") {
            basePoints += 1200;
            gainedPoints += 1200;
        }
        else if (String(input[i]) == "SF") {
            basePoints += 720;
            gainedPoints += 720;
        }
    }
    console.log(`Final points: ${basePoints}`);
    console.log(`Average points: ${Math.floor(gainedPoints/tournamets)}`);
    console.log(`${(wins / tournamets * 100).toFixed(2)}%`)
}