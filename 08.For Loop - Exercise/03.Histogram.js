function numbersPrint(input) {
    let count = Number(input[0]);
    let under200=0;
    let b200And399=0;
    let b400And599=0;
    let b600And799=0;
    let over800=0;

    for (let i = 1; i <=input.length-1 ; i++) {
        var curr=Number(input[i]);
        if(curr<200){
            under200++;
        }
        else if(curr>=200 && curr<=399){
            b200And399++;
        }
        else if(curr>=400 && curr<=599){
            b400And599++;
        }
        else if(curr>=600 && curr<=799){
            b600And799++;
        }
        else if(curr>=800){
            over800++;
        }
    }
    let erstre=Number((under200/count)*100);
    let zweite=Number((b200And399/count)*100);
    let dritte=Number((b400And599/count)*100);
    let vierte=Number((b600And799/count)*100);
    let fünfte=Number((over800/count)*100);
    console.log(erstre.toFixed(2)+"%");
    console.log(zweite.toFixed(2)+"%");
    console.log(dritte.toFixed(2)+"%");
    console.log(vierte.toFixed(2)+"%");
    console.log(fünfte.toFixed(2)+"%");
}