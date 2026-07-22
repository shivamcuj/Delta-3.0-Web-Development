//WriteaJSprogramtofindthesumofdigitsinanumber.
//Example: ifnumber=287152,sum=25

let number = 287152;
let sum = 0;

for(let i=0; i<number.toString().length; i++){
    let digit= number.toString()[i];
    sum += parseInt(digit);
}
console.log(sum);