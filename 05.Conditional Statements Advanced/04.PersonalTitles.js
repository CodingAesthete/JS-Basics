function numbersPrint(input) {
    let age = Number(input[0]);
    let gender=String(input[1]);
    if(gender==="m"){
        if(age<16){
            console.log("Master");
        }
        else if(age>=16){
            console.log("Mr.");
        }
    }
    else if(gender=="f"){
        if(age<16){
            console.log("Miss");
        }
        else if(age>=16){
            console.log("Ms.");
        }
    }
}