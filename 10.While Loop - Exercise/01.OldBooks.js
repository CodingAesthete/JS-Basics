function numbersPrint(input) {
    let nameBook = String(input[0]);
    let index=1;
    let counter=0;
    while(String(input[index])!="No More Books"){
        if(String(input[index])==nameBook){
            console.log(`You checked ${counter} books and found it.`)
            return;
        }
        counter++;
        index++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
}