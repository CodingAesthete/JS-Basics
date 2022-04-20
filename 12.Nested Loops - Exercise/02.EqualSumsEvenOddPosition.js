function numbersPrint(input) {
    let firstNum = Number(input[0]);
    let secondNum=Number(input[1]);
    let result="";
    for(let i=firstNum; i<=secondNum; i++){
        let curr=i.toString();
        let even=0;
        let odd=0;
        for(let n=0;n<curr.length;n++){
            if(n%2==0){
                even+=Number(curr[n]);
            }
            else{
                odd+=Number(curr[n]);
            }
        }
        if(even===odd){
            result+= i+" ";
        }
    }
    console.log(result)
}