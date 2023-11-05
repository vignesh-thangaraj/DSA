let inputArray = [1,6,5,6,18,10]
let sum=16;

let fPointer= 0;
let rPointer = inputArray.length-1


while( fPointer !== rPointer ){
  if(inputArray[fPointer]+inputArray[rPointer] === sum){
    console.log(inputArray[fPointer],inputArray[rPointer])
    fPointer++;
    rPointer--;
  }
  else if(inputArray[fPointer]+inputArray[rPointer] > sum)
    rPointer--;
  else if(inputArray[fPointer]+inputArray[rPointer] < sum)
    fPointer++;
}
