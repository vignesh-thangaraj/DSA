let sortedArray = [1, 2, 2, 2, 3, 4, 5, 5, 6];
let target =2

let start=0, end = sortedArray.length-1
let result = -1

while(start <= end){
  mid = Math.round((start+end)/2)
  if(sortedArray[mid] === target){
    result = mid
    start = mid + 1
  }
  else if(sortedArray[mid] > target)
    end = mid +1
  else
    start = mid -1

console.log("found index", result);
}