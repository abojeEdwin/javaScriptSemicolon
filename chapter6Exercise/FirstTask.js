function getPentagonalNumber(number){

    const prompt=require("prompt-sync")({sigint:true}); 
    let value = prompt("Enter a number :");
    console.log(value * (3 * value - 1) / 2 )
};

let finalResut = getPentagonalNumber();
