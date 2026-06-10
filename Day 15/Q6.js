let num1 = prompt("enter a number");
let num2 = prompt("enter another number");

if(num1 % 10 === num2%10){
    console.log("both numbers have the same last digit");
} else {
    console.log("the numbers have different last digits");
}