// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAsgj_iDkXgoipFY9AUbuYNKQ1O7BiLcho",
    authDomain: "react-push-test-58035.firebaseapp.com",
    projectId: "react-push-test-58035",
    storageBucket: "react-push-test-58035.appspot.com",
    messagingSenderId: "644484203614",
    appId: "1:644484203614:web:04b2927d12fdf1e592a0cf",
    measurementId: "G-KLHNKZPZ4K",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload.notification);
    const notificationTitle = '삐용삐용';
    const notificationOptions = {
      body: '[중대본] 테스트 해보자~',
      icon: './testlogo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
})

self.addEventListener('notificationclick', (event) => {
  // default: 알림 클릭 시 pwa 앱으로 이동
  event.notification.close();
});