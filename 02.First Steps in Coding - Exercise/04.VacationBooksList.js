function numbersPrint(input){
    let pagesCount= Number(input[0]);
    let pagesPerHour=Number(input[1]);
    let daysForBook= Number(input[2]);
    let hoursPerDay=(pagesCount/pagesPerHour)/daysForBook;
    console.log(hoursPerDay);
}   