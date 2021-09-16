import React , {useState} from "react";

export default function Objects(){
    const [toggled, setToggled] = useState(false);
    let myObj = {
        name: 'Ross',
        writing: true,
        enjoyment: 10,
        last_name : 'Jabbari',
        meta: {
            minutesWriting: 20,
            minutesProcrastinating: 0,
        }
    };
    // set New Value :
    myObj.name = 'Rasoul';
    myObj['meta'].minutesProcrastinating = 'Hello world';
    myObj['writing'] = !myObj.writing;

    // Getting object properties
    let name = myObj.name;
    let minutesWriting = myObj['meta']['minutesWriting']
    let procrastinating = myObj['meta'].minutesProcrastinating
    const { writing, enjoyment } = myObj

    let key = 'completed'
    let value = false;

    let myObj2 = {[key]: value};

    myObj2['key'] = true;

    let keyValue = myObj2['key'];

    const { meta: { minutesProcrastinating } } = myObj;

    const { last_name, ...rest } = myObj;
    return(
        <>
        <h1 style={{textAlign: 'center'}}>Work With Object</h1>
            <div>Name : {name}</div>
            <div>minutesWriting : {minutesWriting}</div>
            <div>procrastinating : {procrastinating}</div>
            <div>writing : {writing ? 1 : 0}</div>
            <div>enjoyment : {enjoyment}</div>
            <div>keyValue : {keyValue ? 1 : 0}</div>
            <div>minutesProcrastinating : {minutesProcrastinating}</div>
            <div>last_name : {last_name}</div>
            </>
    )
}