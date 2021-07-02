//private variables and functions

// const FactoryFunction = string => {
//     const capitalizeString = () => string.toUpperCase();
//     const printString = () => console.log(`----${capitalizeString()}----`);
//     return { printString };
// };
// const taco = FactoryFunction('taco');
// printString(); // ERROR!!
// capitalizeString(); // ERROR!!
// taco.capitalizeString(); // ERROR!!
// taco.printString(); // this prints "----TACO----"

//?

const counterCreator = (str) => {
    let count = 0;
    return () => {
    console.log(`${str} : ${count}`);
    count++;
    };
};
const counter = counterCreator("Mikey");
const lolidk = counterCreator("Sam");
counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
amountToRun = 0;
while(amountToRun < 10){
    console.log();
    lolidk();
    amountToRun++;
}