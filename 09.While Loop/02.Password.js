function numbersPrint(input) {
    let username = String(input[0]);
    let pass = String(input[1]);
    let i=2;
    let curr= input[i];
    while(input[i]!=pass){
        i++;
        pass=input[i];
    }
    console.log(`Welcome ${username}!`)
}