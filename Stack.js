class Stack {
  constructor() {
    this.stackArray = []
  }


  push(data){
    this.stackArray.push(data);
  }

  pop(data){
    if(this.stackArray.length === 0)
      console.log("No elements in the stack to Pop");
      return;
    return this.stackArray.pop()
  }

  peek(){
    if(this.stackArray.length === 0)
      console.log("No elements in the stack to peek");
      return;
    return this.stackArray[this.stackArray.length-1]
  }
}