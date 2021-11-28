import firebase from "firebase/compat";
import 'firebase/messaging'
import {toast} from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCfBbr55GuXnWt8-mONUURCCAOe1JyPb-8",
    authDomain: "bedmal-5d9b7.firebaseapp.com",
    projectId: "bedmal-5d9b7",
    storageBucket: "bedmal-5d9b7.appspot.com",
    messagingSenderId: "194965942455",
    appId: "1:194965942455:web:327f125a57b312de53dd32",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BK_QNjzoFEJh5fnUfPYF54ZEtLVme8-kB31HFTtNfXmrp39dLbcc5WTL8yiBGiZFdYMz5eQ-AwgLEoWBxfCKkcY'}).then((currentToken) => {
        console.log(currentToken)
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
        }
        else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });