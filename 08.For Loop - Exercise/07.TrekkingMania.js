function numbersPrint(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let sumPeople=0;
    for (let i = 1; i <= groups; i++) {
        sumPeople+=Number(input[i]);
        if (Number(input[i]) <= 5) {
            musala += Number(input[i]);
        }
        else if(Number(input[i])>=6 && Number(input[i])<=12){
            monblan+=Number(input[i]);
        }
        else if(Number(input[i])>=13 && Number(input[i])<=25){
            kilimandjaro+=Number(input[i]);
        }
        else if(Number(input[i])>=26 && Number(input[i])<=40){
            k2+=Number(input[i]);
        }
        else if(Number(input[i])>=41){
            everest+=Number(input[i]);
        }
    }
    console.log(`${((musala/sumPeople)*100).toFixed(2)}%`);
    console.log(`${((monblan/sumPeople)*100).toFixed(2)}%`);
    console.log(`${((kilimandjaro/sumPeople)*100).toFixed(2)}%`);
    console.log(`${((k2/sumPeople)*100).toFixed(2)}%`);
    console.log(`${((everest/sumPeople)*100).toFixed(2)}%`);
}