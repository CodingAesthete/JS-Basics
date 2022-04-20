function numbersPrint(input) {
    let hour = Number(input[0]);
    let day=String(input[1]);
    if(hour>=10 && hour<=18 && day!="Sunday"){
        console.log("open");
    }
    else{
        console.log("closed");
    }
}