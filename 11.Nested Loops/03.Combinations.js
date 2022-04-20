function numbersPrint(input) {
    let num = Number(input[0]);
    let counter=0;
    for (let i = 0; i <= num; i++) {
        for (let n = 0; n <= num; n++) {
            for (let m = 0; m <= num; m++) {
                let result = i + n + m;
                if(result===num){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}