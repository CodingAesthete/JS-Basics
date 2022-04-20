function numbersPrint(input) {
    let curr = input.shift();
    let minimal = Number.MAX_SAFE_INTEGER;
    while (curr != "Stop") {
        if (Number(curr) < minimal) {
            minimal = curr;
        }
        curr=input.shift();
    }
    console.log(minimal);
}