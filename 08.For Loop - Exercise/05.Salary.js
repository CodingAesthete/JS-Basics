function numbersPrint(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let fines = 0;
    for (let i = 2; i < openTabs + 2; i++) {
        if (input[i] === "Facebook") {
            fines += 150;
        }
        else if (input[i] === "Instagram") {
            fines += 100;
        }
        else if (input[i] === "Reddit") {
            fines += 50;
        }
        if (fines >= salary) {
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(`${salary - fines}`);
}