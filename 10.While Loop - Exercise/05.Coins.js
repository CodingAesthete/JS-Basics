function numbersPrint(input) {
    let change=Number(input[0]);
    let total=0;
    while(change>0){
        if(change>=2){
            let count=Math.floor(change/2);
            change-=count*2;
            total+=count;
            continue;
        }
        if(change>=1){
            change-=1;
            total+=1;
            continue;
        }
        if(change>=0.50){
            change-=0.5;
            change=change.toFixed(2);
            total+=1;
            continue;
        }
        if(change>=0.20){
            let count=Math.floor(change/0.20);
            change-=count*0.20;
            change=change.toFixed(2);
            total+=count;
            continue;
        }
        if(change>=0.10){
            change-=0.10;
            change= change.toFixed(2);
            total+=1;
            continue;
        }
        if(change>=0.05){
            change-=0.05;
            change=change.toFixed(2);
            total+=1;
            continue;
        }
        if(change>=0.02){
            let count=Math.floor(change/0.02);
            change-=count*0.02;
            change=change.toFixed(2);
            total+=count;
            continue;
        }
        if(change>=0.01){
            change-=0.01;
            change=change.toFixed(2);
            total+=1;
            continue;
        }
    }
    console.log(total);
}