function numbersPrint(input) {
    let curr = input.shift();
    let maximal = Number.MIN_SAFE_INTEGER;
    while (curr != "Stop") {
        if (Number(curr) > maximal) {
            maximal = curr;
        }
        curr=input.shift();
    }
    console.log(maximal);
}