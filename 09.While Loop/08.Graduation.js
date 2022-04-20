function numbersPrint(input) {
    let name = input.shift();
    let sum=0
    let counter=1;
    let failure=0;
    while(Number(counter)<=12){
        let curre= Number(input.shift());
        if(curre<4){
            failure++;
        }
        if(failure==2){
            console.log(`${name} has been excluded at ${counter-1} grade`);
            return;
        }
        sum+=curre;
        counter++;
    }
    let ave=sum/(counter-1);
    console.log(`${name} graduated. Average grade: ${(ave.toFixed(2))}`);
}