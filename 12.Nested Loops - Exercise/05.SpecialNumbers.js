function numbersPrint(input) {
    let num = Number(input[0]);
    let result="";
    for(let i=1111; i<=9999; i++){
        let current=i.toString();
        let check=true;
        for(let n=0; n<current.length;n++ ){
            let numero=current[n];
            if(num%numero!=0){
                check=false;
                break;
            }
        }
        if(check==false){
            continue;
        }
        else{
            result+=i+ " ";
        }
    }
    console.log(result);
}