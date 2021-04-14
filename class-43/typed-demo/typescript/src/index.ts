let value: number = 10;

let myName: string = 'Jacob';

interface User {
  name: string,
  age: number
}

let user: User = {
  name: '',
  age: 0
}

let user2: any = {}

console.log(user, user2);


function sum(num: number): number {
  return 10 + num;
}

sum(10);
