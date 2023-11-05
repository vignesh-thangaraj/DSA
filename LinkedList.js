class SimpleLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


let head = null, curr = null;

function createLinkedList(arr){
  head = new SimpleLinkedList(arr[0]);
  curr = head;
  for(let i=1; i < arr.length; i++){
    curr.next = new SimpleLinkedList(arr[i]);
    curr = curr.next
  }
}

function traverseLinkedList(){
   curr = head;
   while(curr !== null){
     console.log(curr.value)
     curr = curr.next
   }
}

function insertAtBeginning(value) {
  let node = new SimpleLinkedList(value);
  node.next = head;
  head = node
}

function insertAtPosition(value, position){
  curr = head;
  if(position < 0)
    return;
  if(position === 0)
    insertAtBeginning(value)
  while(--position){
    if(curr === null)
      return;
    curr = curr.next
  }
  let newNode = new SimpleLinkedList(value);
  newNode.next = curr.next;
  curr.next = newNode
}

function insertAtEnd(value){
  curr = head;
  while(curr.next !== null){
    curr = curr.next
  }
  let newNode = new SimpleLinkedList(value)
  curr.next = newNode
}

function deleteAtPosition(position){
  if (position < 0)
    return;
  let prev = null
  curr = head
  while(--position){
    if(curr.next == null)
      return;
    prev = curr
    curr = curr.next
  }
  prev.next = curr.next
  curr.next = null
  delete curr
}

function updateAtPosition(position, value){
  if(position < 0)
    return;
  curr = head
  while(--position){
    if(curr.next === null)
      return;
    curr = curr.next
  }
  curr.value = value
}



createLinkedList([3,4,5,6])
insertAtBeginning(1)
insertAtPosition(2, 1)
insertAtEnd(7)
deleteAtPosition(6)
updateAtPosition(6, 6)
traverseLinkedList()