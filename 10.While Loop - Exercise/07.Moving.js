function numbersPrint(input) {
    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    let area = length * width * height;
    let index = 3;
    while (input[index] != "Done") {
        area -= Number(input[index]);
        index++;
        if (area < 0) {
            console.log(`No more free space! You need ${-area} Cubic meters more.`);
            return;
        }
    }
    console.log(`${area} Cubic meters left.`);
}