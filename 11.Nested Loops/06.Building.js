function numbersPrint(input) {
    let etaji = Number(input[0]);
    let nomera = Number(input[1]);
    for (let i = etaji; i >=1; i--) {
        let total="";
        for (let e = 0; e < nomera; e++) {
            if(i==etaji){
                total+=`L${i}${e} `;
            }
            else if(i%2!=0){
                total+=`A${i}${e} `;
            }
            else{
                total+=`O${i}${e} `;
            }
        }
        console.log(total);
    }
}