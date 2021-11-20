export class Person{
    firstname: string;
    lastname: string;

    constructor(f: string , l: string) {
        this.firstname = f;
        this.lastname = l;
    }
    fullname(){
        return (`${this.firstname} ${this.lastname}`)
    }
}

let person = new Person('Rasoul' , 'Jabbari');
console.log(person.fullname())