let arr=[1,2,3,4,5,6,7,8,9,10];

let n=prompt("Enter the number of elements you want to print: ");

if(n>arr.length-1){
    console.log("Array length is less than the number of elements you want to print.");
}
else{
    arr.splice(0,arr.length-n);
    // The above code will remove the elements from the array starting from index 0 to the index n-1. This will leave us with the last n elements of the array.
    console.log(arr);
}
