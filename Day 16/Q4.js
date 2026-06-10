let value = prompt("Enter a String Value: ");

let position =prompt("Enter the position of the character you want to check: ");

if((value[position-1]).toLowerCase() === (value[position-1])){
    // The above code will check if the character at the position entered by the user is in lowercase or not. If it is in lowercase, then it will print "The character at the position you entered is in lowercase." otherwise it will print "The character at the position you entered is not in lowercase."
    console.log("The character at the position you entered is in lowercase.");
} else {
    console.log("The character at the position you entered is not in lowercase.");
}