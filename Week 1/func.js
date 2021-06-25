// let coffeeIsGrinding = false;
// const pressGrindBeans1 = () => {
// if (coffeeIsGrinding) {
// console.log("Stopping the grind");
// coffeeIsGrinding = false;
// }
// else {
// console.log("Grinding is about to begin");
// coffeeIsGrinding = true;
// }
// }
// pressGrindBeans1();


// const cashWithdrawal=(amount, accnum) = {
//     console.log("Withdrawing ${amount} from account ${accnum}");
// }
// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921);


let accnum = 50449921
let amount = 50

const cashWithdrawal = (amount, accnum) => {
console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(amount, accnum);

accnum = 30990031
amount = 35
cashWithdrawal(amount, accnum);

accnum = 99902928
amount = 250
cashWithdrawal(amount, accnum);