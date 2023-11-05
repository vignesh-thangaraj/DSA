let input1 = "SILENT"
let input2 = "LISTEN"

let dict = {}
let currentChar = ''
if(input1.length !== input2.length)
  console.log("not a Anagram")

for(let i=0; i< input1.length; i++){
  currentChar = input1[i]
  if(currentChar in dict){
    dict[currentChar] += 1
  }
  dict[currentChar] = 1
}

for(let j=0; j< input2.length; j++){
  currentChar = input2[j]
  if(currentChar in dict){
    if(dict[currentChar] === 1)
      delete dict[currentChar]
    dict[currentChar] -= 1
  }else{
    console.log("String is not Anagram");
    break;
  }
}

if(Object.keys(dict).length === 0){
  console.log("String is a Anagram")
}

console.log(dict)