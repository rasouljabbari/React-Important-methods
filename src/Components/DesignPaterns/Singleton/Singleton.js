class Process{
    constructor(state) {
        this.state = state
    }
}

const Singleton = (function (){
    let instance;

    function createInstance(){
        return new Process('New Object')
    }

    return{
        getInstance(){
            if(!instance){
                instance = createInstance();
            }
            return instance
        }
    }
}())

const processManage1 = Singleton.getInstance();
const processManage2 = Singleton.getInstance();

console.log(processManage1 === processManage2)