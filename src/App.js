import React, {useState} from "react";
import FileUpload from "./Components/file-upload.component";
import Objects from "./Components/Objects";
import TestRoot from "./Components/test-root";
import GlassBg from "./Components/glass/GlassBg";
import ErrorHandling from "./Components/errorHandling/ErrorHandling";
import ErrorHandlingFun from "./Components/errorHandling/ErrorHandlingFun";
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
        <ErrorHandlingFun/>
    );
}

export default App;