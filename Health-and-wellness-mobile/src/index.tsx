import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import * as serviceWorker from './serviceWorker'
import Firebase, { FirebaseContext } from './components/firebase'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
