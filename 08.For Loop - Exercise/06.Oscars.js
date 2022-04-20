function numbersPrint(input) {
    let nameActor = String(input[0]);
    let pointsAcademy = Number(input[1]);
    let criticians = Number(input[2]);
    for (let i = 3; i < criticians * 2 + 3; i += 2) {
        let nameCrit = String(input[i]);
        let points = Number(input[i + 1]);
        pointsAcademy +=((nameCrit.length * points) / 2);
        if(pointsAcademy>1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${nameActor} you need ${(1250.5-pointsAcademy).toFixed(1)} more!`);
}