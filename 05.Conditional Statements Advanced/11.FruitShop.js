function numbersPrint(input) {
    let fruit = String(input[0]);
    let day = String(input[1]);
    let count = Number(input[2]);
    let sum = 0;
    if (day == "Monday" || day == "Tuesday"
    ||day=="Wednesday" || day=="Thursday" || day=="Friday") {
        if (fruit === "banana") {
            sum = 2.50 * count;
        }
        else if (fruit === "apple") {
            sum = 1.20 * count;
        }
        else if (fruit === "orange") {
            sum = 0.85 * count;
        }
        else if (fruit === "grapefruit") {
            sum = 1.45 * count;
        }
        else if (fruit === "kiwi") {
            sum = 2.70 * count;
        }
        else if (fruit === "pineapple") {
            sum = 5.50 * count;
        }
        else if (fruit === "grapes") {
            sum = 3.85 * count;
        }
        if (sum != 0) {
            console.log(sum.toFixed(2));
        }
        else {
            console.log("error");
        }
    }
    else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            sum = 2.70 * count;
        }
        else if (fruit === "apple") {
            sum = 1.25 * count;
        }
        else if (fruit === "orange") {
            sum = 0.90 * count;
        }
        else if (fruit === "grapefruit") {
            sum = 1.60 * count;
        }
        else if (fruit === "kiwi") {
            sum = 3.00 * count;
        }
        else if (fruit === "pineapple") {
            sum = 5.60 * count;
        }
        else if (fruit === "grapes") {
            sum = 4.20 * count;
        }
        if (sum != 0) {
            console.log(sum.toFixed(2));
        }
        else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }
}