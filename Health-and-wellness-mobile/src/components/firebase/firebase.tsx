import * as firebase from "firebase/app"
import "firebase/auth"
import {User} from '@firebase/auth-types'
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  }
  


export default class Firebase {
    public auth: any;
    public provider: firebase.auth.GoogleAuthProvider;
    public constructor(){
        firebase.initializeApp(firebaseConfig);
        
        this.auth = firebase.auth();
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.provider.setCustomParameters({
            "hd": "mail.gvsu.edu"
        });
    }

    public signIn = async (): Promise<firebase.auth.UserCredential> =>{
        return this.auth.signInWithPopup(this.provider);
    }

    public getResult = async (): Promise<firebase.auth.UserCredential> => {
        return this.auth.getRedirectResult();
    }
}