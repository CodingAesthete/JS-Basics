function numbersPrint(input) {
    let num = Number(input[0]);
    let ar=1;
    let check=false;
    for (let i = 1; i <= num; i++) {
        let curr = ""
        if(check){
            return;
        }
        for (let e = 1; e <= i; e++) {
            
            curr += ar + " ";
            ar++;
            if (ar == num+1) {
                check=true;
                 break;
            }
        }
        console.log(curr);
    }
}