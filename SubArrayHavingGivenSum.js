let arr = [2,6,0,9,7,3,1,4]
let sum = 15

let pointer=0;
let currentSum = 0;

if(arr.length === 0)
  console.log("Array is empty! not able to proceed on it.")

let i;

for(i=0; i< arr.length; i++){

    if(currentSum === sum){
      console.log("Array Positions start & end index Positions are ", pointer, i-1);
      currentSum -= arr[pointer]
      pointer++;
    }

    currentSum += arr[i];
    while(currentSum > sum && pointer < i){
      currentSum -= arr[pointer]
      pointer++;
    }

}

if(currentSum === sum){
  console.log("Array Positions start & end index Positions are ", pointer, i-1);
}