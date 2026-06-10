let arr=[1,2,3,4,5,6,7,8,9,10];

let n=prompt("Enter the number of elements you want to print: ");

if(n>arr.length-1){
    console.log("Array length is less than the number of elements you want to print.");
}
else{
    // for(let i=0; i<n; i++){
    //     console.log(arr[i]);
    // }
    // The above code is commented out because we will be using splice method to remove the elements from the array.
    arr.splice(n, arr.length-n);
    // The above code will remove the elements from the array starting from index n to the end of the array.
    //Explaination: The splice method takes two parameters, the first parameter is the index from where we want to start removing the elements and the second parameter is the number of elements we want to remove. In this case, we want to remove the elements starting from index n to the end of the array, so we pass n as the first parameter and arr.length-n as the second parameter.
    console.log(arr);
}
