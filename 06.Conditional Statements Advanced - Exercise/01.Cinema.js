function numbersPrint(input) {
    let typeProjection = String(input[0]);
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let sum = 0;
    if (typeProjection === "Premiere") {
        sum = rows * columns * 12.00;
    }
    else if (typeProjection === "Normal") {
        sum = rows * columns * 7.50;
    }
    else if (typeProjection === "Discount") {
        sum = rows * columns * 5.00;
    }
    console.log(`${sum.toFixed(2)} leva`);
}