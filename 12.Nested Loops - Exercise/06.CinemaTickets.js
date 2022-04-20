function numbersPrint(input) {
    let i = 0;
    let film = "";
    let freeSeats=0;
    let kid=0;
    let student=0;
    let standard=0;
    while (input[i] != "Finish") {
        film = input[i];
        i++;
        freeSeats=Number(input[i]);
        i++;
        let countero=0;
        while(freeSeats!=countero){
            let currSeat=String(input[i]);
            if(currSeat=="End"){
                i++;
                break;
            }
            else if(currSeat=="kid"){
                kid++;
            }
            else if(currSeat=="student"){
                student++;
            }
            else if(currSeat=="standard"){
                standard++;
            }
            i++;
            countero++;
        }
        if(countero==freeSeats){
            console.log(`${film} - 100.00% full.`);
        }
        else{
            let perc=(countero/freeSeats)*100;
            console.log(`${film} - ${perc.toFixed(2)}% full.`);
        }
    }
    let all=kid+student+standard;
    console.log(`Total tickets: ${all}`);
    console.log(`${(student/all*100).toFixed(2)}% student tickets.`);
    console.log(`${(standard/all*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid/all*100).toFixed(2)}% kids tickets.`);
}