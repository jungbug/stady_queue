class Queue {
  constructor() {
    this.items = [];
  }
  
  // 요소를 Queue에 추가하는 메소드
  enqueue(element) {
    this.items.push(element);
  }
  
  // Queue에서 요소를 제거하고 반환하는 메소드
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  
  // Queue의 첫 번째 요소를 반환하는 메소드
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  
  // Queue가 비어있는지 여부를 반환하는 메소드
  isEmpty() {
    return this.items.length == 0;
  }
  
  // Queue의 크기를 반환하는 메소드
  size() {
    return this.items.length;
  }
  
  // Queue의 모든 요소를 반환하는 메소드
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

let queue = new Queue();