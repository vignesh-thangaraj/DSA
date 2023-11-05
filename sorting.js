// Bubble sort
// insertion sort

let nums = [7,6,3,27,4,1,2,3]

for(let i=0; i< nums.length; i++){
  for(let j=i; j < nums.length; j++){
    if(nums[i] > nums[j])
      [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
console.log(nums)


