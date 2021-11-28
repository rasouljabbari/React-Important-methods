// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCfBbr55GuXnWt8-mONUURCCAOe1JyPb-8",
    authDomain: "bedmal-5d9b7.firebaseapp.com",
    projectId: "bedmal-5d9b7",
    storageBucket: "bedmal-5d9b7.appspot.com",
    messagingSenderId: "194965942455",
    appId: "1:194965942455:web:327f125a57b312de53dd32",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});