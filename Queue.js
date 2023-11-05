

class Queue {

  constructor() {
     this.stack1 = []
     this.stack2 = []
  }

  enqueue(data){
    while(this.stack1.length !== 0){
      this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(data);
    while(this.stack2.length !== 0){
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue(){
    if(this.stack1.length === 0){
      console.log("There is no data in the queue");
      return;
    }
    return this.stack1.pop()
  }
}

let queue = new Queue()
for(let data of [10,20,30,40])
  queue.enqueue(data)
queue.enqueue(25);
console.log(queue.dequeue());

