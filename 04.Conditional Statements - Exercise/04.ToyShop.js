function numbersPrint(input) {
    let excursion=Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls= Number(input[2]);
    let bears= Number(input[3])
    let minions= Number(input[4]);
    let trucks= Number(input[5]);
    let countToys=puzzles+dolls+bears+minions+trucks;
    let sum=puzzles*2.60+dolls*3.00+bears*4.10+minions*8.20+trucks*2.00;
    if(countToys>=50){
        sum=0.75*sum;
    }
    sum=0.9*sum;
    if(sum>=excursion){
        console.log(`Yes! ${(sum-excursion).toFixed(2)} lv left.`);
    }
    else{
        console.log(`Not enough money! ${(excursion-sum).toFixed(2)} lv needed.`);
    }
}