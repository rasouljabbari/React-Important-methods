import React, {useState , useEffect} from 'react'
import MobContainer from './Components/MobContainer'
import {Provider} from "react-redux";
import store from "./redux/store";
import {Form} from "./Components/Form";
import AddRemoveUser from "./Components/AddRemoveUser";
function App() {

    return (
        <Provider store={store}>
           {/*<MobContainer/>*/}
           {/* <Form/>*/}
            <AddRemoveUser/>
        </Provider>
    )
}
export default App