// input - egg
// output - add

let input = "paper", output = "title";
let inputChar, outputChar;
let stringMapping = {}

if(input.length !== output.length)
  console.log("Not Isomorphic string!")

for(let i=0; i<input.length ; i++){
  inputChar = input[i]
  outputChar = output[i]
  if(!Object.keys(stringMapping).includes(inputChar)){
    if(Object.values(stringMapping).includes(outputChar))
      console.log("Not Isomorphic String!")
    stringMapping[inputChar] = outputChar
  }
  else
    if(stringMapping[inputChar] !== outputChar)
      console.log("Not Isomorphic String!")
}

