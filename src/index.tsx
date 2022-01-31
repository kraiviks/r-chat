import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

initializeApp({
	apiKey: "AIzaSyC9m1iaJWGUE1ubUxrHPbTBr61OOQobIME",
	authDomain: "r-chat-17150.firebaseapp.com",
	projectId: "r-chat-17150",
	storageBucket: "r-chat-17150.appspot.com",
	messagingSenderId: "373910609355",
	appId: "1:373910609355:web:d69f9bae0b2c9c2c5eea4e"

})


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
