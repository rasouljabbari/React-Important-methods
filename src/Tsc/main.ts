// install node

// cmd => npm install typescript -g

// create tsc folder =>{
//     create main.ts file
// }

// in main.ts file in first line type : export {}

// this code showed mudole

// if i want to run project i should in terminal type : tsc main --watch
// this code create main.js file.

// and after : node main.js

// type in typescript :

// let/const {var name}: {var type => boolean , string,number , number[], Array<number>,
// string[], Array<string>, [string,number], any, unknown, boolean|number,
// } = {var value}

// let title: string = 'welcome';
//
// let array1: number[] = [1, 2, 3];
// let array2: Array<number> = [5, 6, 7];
// let array3: [string, number, boolean] = ['Rasoul', 20, false];

// enum type =>
// enum Cars {ford = 10,pride,mazda}
// let c: Cars = Cars.mazda
// console.log(c) // 2


// let test1: any = 'false'  // any type : i can type any type
// console.log(test1)

// unknown type => i can just add any value;
//
// let test2 :unknown  = '50'
// test2 = 'rasoul' // this is ok
// console.log(test2)
//
// let test3: string = (test2 as string).toUpperCase()
//
// console.log(test3)
//
// agar be motagayeri megdar avalie bedahim by defualt type initial value ra barmidarad.
//     /*******************************************************/
//
//     mlti type =>
//
// let multi_type: boolean | number | string = true
// multi_type = 10 + 'SSs'
// console.log(multi_type)
//
// /************************************* Functions ******************/
//
// in function i can add type to function export and paramters

// function add( val1: number , val2?: number): number{
//     if(val2){
//         return val1 + val2
//     }else{
//         return val1
//     }
// }
// console.log(add(3,5)) // 8
// console.log(5,'gio') // error
//
// if i want parametr is optional is just add ? before : => example : val2?: number
//
// function add( val1: number , val2?: number2): number{
//     if(val2){
//         return val1 + val2
//     }else{
//         return val1
//     }
// }
// console.log(3) // 3
//
// notic1 : first paramettr cant optional
// notic2 : in typescript for call function always use ()
// notic3 : if function not return anything function type is void =>
//
// function add( val1: number , val2: number): void{
//     console.log(val1 , val2) // 8
// }
// add(20,30)
//
// /************************************* Interface ******************/
//
// interface Person {
//     firstname?: string,
//     lastname?: string,
//     age?: number
// }
// function user(person: Person){
//     console.log(`my full name is ${person.firstname} ${person.lastname} and my age is ${person.age}`)
// }
// function user_age(info: Person) {
//     return info.age
// }
// let me = {
//     firstname : 'Rasoul',
//     lastname : 'Jabbari',
//     age : 23
// }
// user(me)
// console.log(user_age(me))

// /************************************* Class ******************/
//
// class User {
//     3 model access modifier darim : public , private, protected
//     public => can use all section of code
//     private => can use just main class
//     protected => can use in main class and extended class
//
//     userName: Person
//     constractor(name: string){
//         this.userName.firstname = name
//     }
//     show(){
//         console.log(`My name is : ${this.userName.firstname}`)
//     }
// }
//
// class Model extends User{
//     constructor(name: string) {
//         super();
//     }
//
//     show_details(){
//         console.log(`user details are ... ${this.userName.firstname} ${this.userName.lastname} , age is : ${this.userName.age}`)
//     }
// }
//
// let model = new Model('gio')
//
// model.userName = me
// console.log(model.userName)
// model.show()
// model.show_details()

// import {Person} from "./classes";
//
// class Teacher extends Person{
//
// }
// class Student extends Person{
//
// }
// let person = new Person('Rasoul' , 'Jabbari2')
// let teacher: string = person.firstname
// console.log(teacher)

// let teacher = new Teacher('a','b')
//
// function test<T extends Person>(person: T):T{
//     return person
// }
// let t1 = test(teacher)

let t1 = Symbol('sda');
let t2 = Symbol('sda');

console.log(t1 === t2)

let s3 = Symbol.for('id1');
let s4 = Symbol.for('id1');

console.log(s3 === s4);
console.log(Symbol.keyFor(s4))

let firstname = Symbol('FirstName')
let person = {
    [firstname]: "Rasoul"
};

console.log(Object.getOwnPropertyNames(person))
console.log(Object.getOwnPropertySymbols(person))