import React, {useState} from "react";
import GoogleAuth from "./Components/GoogleAuth/GoogleAuth";
import StreamCreate from "./Components/Streams/StreamCreate";
import {Route, Routes} from "react-router-dom";

function App() {


    return (
        <>
            <GoogleAuth/>
            <Routes>
                <Route path={'/'} element={<StreamCreate/>} exact/>
                <Route path={'/stream/new'} element={<StreamCreate/>} exact/>
            </Routes>
        </>
    );
    // return <Spinner message={'اطلاعات در حال بارگزاری است، لطفا منتظر بمانید'}/>
}

export default App;