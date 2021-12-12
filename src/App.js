import React, {useState} from "react";
import GoogleAuth from "./Components/GoogleAuth/GoogleAuth";
import StreamCreate from "./Components/Streams/StreamCreate";
import {Route, Routes} from "react-router-dom";
import StreamList from "./Components/Streams/StreamList";

function App() {


    return (
        <>
            <GoogleAuth/>
            <hr/>
            <br/>
            <Routes>
                <Route path={'/'} element={<StreamCreate/>} exact/>
                <Route path={'/streams'} element={<StreamList/>} exact/>
                <Route path={'/stream/new'} element={<StreamCreate/>} exact/>
            </Routes>
        </>
    );
    // return <Spinner message={'اطلاعات در حال بارگزاری است، لطفا منتظر بمانید'}/>
}

export default App;