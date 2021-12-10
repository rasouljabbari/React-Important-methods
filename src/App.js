import React, {useState} from "react";
import GoogleAuth from "./Components/GoogleAuth/GoogleAuth";

function App() {

    // Client id : 182202868499-3r4j1tf0d8c6dcvtobif7qeikeqfhgpe.apps.googleusercontent.com
    // Client Secret id :  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


    return (
        <>
            <GoogleAuth/>
        </>
    );


    // return <Spinner message={'اطلاعات در حال بارگزاری است، لطفا منتظر بمانید'}/>
}

export default App;