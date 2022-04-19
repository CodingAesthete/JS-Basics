function numbersPrint(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent= Number(input[3]);
    let volume=length*width*height;
    let netVolume= (1-percent/100)*volume;
    let netVolumeinLitres=netVolume/1000;
    console.log(netVolumeinLitres);
}     