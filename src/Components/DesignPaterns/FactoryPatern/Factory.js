class Developer {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Tester {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class EmployeeFactory {
    static create(name, type) {
        switch (type) {
            case 'developer' :
                return new Developer(name, type)

            case 'tester' :
                return new Tester(name, type)
        }
    }
}

const employees = []

employees.push(EmployeeFactory.create('Rasoul', 'developer'))
employees.push(EmployeeFactory.create('Amir', 'developer'))
employees.push(EmployeeFactory.create('Sara', 'tester'))
employees.push(EmployeeFactory.create('Omid', 'tester'))

for (const employee of employees){
    console.log(employee)
}

