import React, {useState} from "react";
import ExcleExport from './Components/ExcleExport/ExcleExport'
import AosAnimation from "./Components/Aos Animation/AosAnimation";
import CkEditorTest from "./Components/CkEditor/CkEditorTest";
import MultiSelect from "./Components/Multiselect/MultiSelect";
import ApexChart from "./Components/ApexChart/ApexChart";
// import ErrorHandlingFun from "./Components/errorHandling/ErrorHandlingFun";
// const [newUserInfo, setNewUserInfo] = useState({
//     profileImages: []
// });

// const updateUploadedFiles = (files) =>
//     setNewUserInfo({ ...newUserInfo, profileImages: files });
//
// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(newUserInfo?.profileImages)
//     //logic to create new user...
// };
function App() {


    return (
        <>
            {/*<ErrorHandlingFun/>*/}
            {/*<AgGrid/>*/}
            {/*<ErrorHandlingByPackage/>*/}
            {/*<ExcleExport/>*/}
            {/*<AosAnimation/>*/}
            {/*<CkEditorTest/>*/}
            {/*<MultiSelect/>*/}
            <ApexChart/>
        </>
    );
}

export default App;