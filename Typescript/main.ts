export {}
let message = 'Hello world';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Burhan";
sum = x+y;

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Burhan'

let sentence: string = `My name is ${name};
I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let person1: [string, number] = ['Burhan', 22];

enum Color {Red= 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 123;
randomValue = true;
randomValue = 'Burhan';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj
}

if(hasName(myVariable)) {
  console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

// type inference
let b = 10;

// union type
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;
anyType = 'String'

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);

// optional parameters
function mult(num1: number, num2?: number): number {
  return num1 * num2;
}

mult(2);

// default parameters
function sub(num1: number, num2: number = 10): number {
  return num1 - num2;
}
sub(5);

// interface
interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: {firstName: string, lastName: string}) {
  console.log(`${person.firstName} ${person.lastName}`)
}

function fullName2(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
  firstName: 'Burhan',
  lastName: 'Bharmal'
};

fullName(p);

// Classes & access modifier
class Employee {
  public employeeName: string;
  // private employeeName: string;
  // protected employeeName: string;

  constructor(name: string){
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let employee1 = new Employee('Burhan')
console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

let m1 = new Manager("Burhan");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

