let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let element = prompt("Enter the element you want to check: ");

if (arr.includes(parseInt(element))) {  
    // The above code will check if the element entered by the user is present in the array or not. If it is present, then it will print "Element is present in the array." otherwise it will print "Element is not present in the array."
    console.log("Element is present in the array.");
} else {
    console.log("Element is not present in the array.");
}