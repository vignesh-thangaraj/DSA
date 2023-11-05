let input = "abcde"
let longestSubString= "", currentChar = "", currentSubString

if(input.length === 0)
  console.log("String is empty!")

currentSubString = input[0]

for(let i=1; i< input.length; i++){
    currentChar= input[i]
    if(currentSubString[currentSubString.length-1] <= currentChar)
      currentSubString += currentChar
    else{
      longestSubString = currentSubString.length >= longestSubString.length ? currentSubString : longestSubString
      currentSubString = currentChar
    }
}
longestSubString = currentSubString.length >= longestSubString.length ? currentSubString : longestSubString

console.log(longestSubString)