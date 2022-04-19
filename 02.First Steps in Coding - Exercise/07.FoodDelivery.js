function numbersPrint(input){
    let chikenMenu= Number(input[0]);
    let fishMenu=Number(input[1]);
    let vegetarianMenu= Number(input[2]);
    let mealsSum=chikenMenu*10.35+fishMenu*12.40+vegetarianMenu*8.15;
    let desertPrice= 0.2*mealsSum;
    let totalSum=mealsSum+desertPrice+2.50;
    console.log(totalSum);
}