function numbersPrint(input){
    let figure = String(input[0]);
    if(figure=="square"){
        let side=Number(input[1]);
        console.log((side*side).toFixed(3));
    }
    else if(figure=="rectangle"){
        let firstSide=Number(input[1]);
        let secondSide=Number(input[2]);
        console.log((firstSide*secondSide).toFixed(3));
    }
    else if(figure=="circle"){
        let radius=Number(input[1]);
        console.log((Math.PI*radius*radius).toFixed(3));
    }
    else if (figure=="triangle"){
        let lengthSide=Number(input[1]);
        let heightSide=Number(input[2]);
        console.log((lengthSide*heightSide/2).toFixed(3));
    }
}      