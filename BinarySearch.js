let nums = [-1,0,3,5,9,12], target = 0;

let start=0
let end=nums.length -1
let mid = 0

while(start <= end){
  mid = Math.floor((start + end) / 2);

  if(nums[mid] === target){
    console.log("element found in the index of ", mid);
    break;
  }

  else if(nums[mid] < target)
    start = mid+1
  else
    end = mid -1
}