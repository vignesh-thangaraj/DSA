let arr1 = [1,2,3,5,6,7]
let arr2 = [5,6]

let i=0,j =0
let finalArray = []

if(arr1.length === 0)
  finalArray = arr2
if(arr2.length === 0)
  finalArray = arr1

while(arr1.length > i && arr2.length > j){
  if(arr1[i] > arr2[j])
    finalArray.push(arr2[j++])
  else
    finalArray.push(arr1[i++])
}

while(i!== 0 && i < arr1.length){
  finalArray.push(arr1[i++])
}

while(j!==0 && j < arr2.length){
  finalArray.push(arr2[j++])
}

console.log(finalArray)

