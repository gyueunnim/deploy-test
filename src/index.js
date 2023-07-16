import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

// Firebase 구성 정보 가져오기
const firebaseConfig = {
  apiKey: "AIzaSyAsgj_iDkXgoipFY9AUbuYNKQ1O7BiLcho",
  authDomain: "react-push-test-58035.firebaseapp.com",
  projectId: "react-push-test-58035",
  storageBucket: "react-push-test-58035.appspot.com",
  messagingSenderId: "644484203614",
  appId: "1:644484203614:web:04b2927d12fdf1e592a0cf",
  measurementId: "G-KLHNKZPZ4K",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Messaging 초기화
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BI-_sWLOnaahPCqAvw8zFydQz1yR24QkOp817njCh_VWqLCGjdSbr3MtvjvHqbrz8D1cBXKdB8rab5O3hDoTTmk' }).then((currentToken) => {
  if(currentToken) {
    console.log('FCM 토큰: ', currentToken);
  } else {
    console.log('FCM 토큰이 없습니다.');
  }
}).catch((error) => {
  console.log('FCM 토큰 가져오기 오류 : ', error);
})

onMessage(messaging, (payload) => {
  console.log('Received foreground Message : ', payload.notification)
  const { title, body } = payload.notification;
  new Notification(title, { body })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
