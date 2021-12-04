import React, {useState} from "react";
import ExcleExport from './Components/ExcleExport/ExcleExport'
import AosAnimation from "./Components/Aos Animation/AosAnimation";
import CkEditorTest from "./Components/CkEditor/CkEditorTest";
import MultiSelect from "./Components/Multiselect/MultiSelect";
import ApexChart from "./Components/ApexChart/ApexChart";
import Rating from "./Components/StarRate";
import StarRate from "./Components/StarRate";
import { getToken, onMessageListener } from './firebase';
import {Button, Row, Col, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "./Components/Spinner/Spinner";

function App() {

    // const [show, setShow] = useState(false);
    // const [notification, setNotification] = useState({title: '', body: ''});
    // const [isTokenFound, setTokenFound] = useState(false);
    // getToken(setTokenFound);
    //
    // onMessageListener().then(payload => {
    //     setShow(true);
    //     setNotification({title: payload.notification.title, body: payload.notification.body})
    //     // console.log(payload);
    // }).catch(err => console.log('failed: ', err));

    const text = '';

    if(text){
        return (
            <>
                {/*<ErrorHandlingFun/>*/}
                {/*<AgGrid/>*/}
                {/*<ErrorHandlingByPackage/>*/}
                {/*<ExcleExport/>*/}
                {/*<AosAnimation/>*/}
                {/*<CkEditorTest/>*/}
                {/*<MultiSelect/>*/}
                {/*<ApexChart/>*/}
                {/*<StarRate rating={2.25}/>*/}
                {/*<div className="App">*/}
                {/*    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{*/}
                {/*        position: 'absolute',*/}
                {/*        top: 20,*/}
                {/*        right: 20,*/}
                {/*        minWidth: 200*/}
                {/*    }}>*/}
                {/*        <Toast.Header>*/}
                {/*            <img*/}
                {/*                src="../public/logo512.png"*/}
                {/*                className="rounded mr-2"*/}
                {/*                alt=""*/}
                {/*            />*/}
                {/*            <strong className="mr-auto">{notification.title}</strong>*/}

                {/*        </Toast.Header>*/}
                {/*        <Toast.Body>{notification.body}</Toast.Body>*/}
                {/*    </Toast>*/}
                {/*    <header className="App-header">*/}
                {/*        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}*/}
                {/*        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}*/}
                {/*        <Button onClick={() => setShow(true)}>Show Toast</Button>*/}
                {/*    </header>*/}


                {/*</div>*/}

                { text }
            </>
        );
    }


    return <Spinner message={'اطلاعات در حال بارگزاری است، لطفا منتظر بمانید'}/>
}

export default App;