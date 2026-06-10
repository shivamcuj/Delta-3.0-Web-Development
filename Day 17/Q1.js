//Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example: if arr=[1,2,3,4,5,6,2,3] & num=2
//Result should be arr=[1,3,4,5,6,3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=0; i<arr.length; i++){
    if (arr[i]=== num){
        arr.splice(i,1);
        i--; //what if i will ignore this line and not decrement i? 
        //Explaination: If we ignore the line `i--;`, after removing the element at index `i`, the next element will shift to the left and take the place of the removed element. This means that the loop will skip checking the new element at index `i` in the next iteration, which could lead to missing occurrences of `num` in the array. By decrementing `i`, we ensure that we check the new element that has shifted into the current index in the next iteration.
    }
}

console.log(arr); // Output: [1, 3, 4, 5, 6, 3]