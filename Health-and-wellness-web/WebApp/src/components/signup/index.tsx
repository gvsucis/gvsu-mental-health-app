import { ReactComponent } from "*.svg";
import React, { Props } from "react";
import {Link, withRouter } from 'react-router-dom'
import { IonContent, IonInput, IonButton } from "@ionic/react";
import { stringify } from "querystring";
import Firebase, { FirebaseContext} from "../firebase";

export interface SignUpProps {
    username?: string
    email?: string
    passwordOne?: string
    passwordTwo?: string
    error?: Error
    firebase: Firebase
}

interface SignUpState {
    username: string
    email: string
    passwordOne: string
    passwordTwo: string
    error: any
}

const INIT_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null
}

class SignUpForm extends React.Component<SignUpProps, SignUpState>{
    
    
    constructor(props: any){
        super(props);

        this.state = {... INIT_STATE}
    }

    onSubmit(event: any){
        const { username, email, passwordOne } = this.state;
        this.props.firebase
          .createUser(email, passwordOne)
          .then(authUser => {
            this.setState({ ...INIT_STATE });
          })
          .catch(error => {
            this.setState({ error });
          });
        event.preventDefault();
    }

    onChange(event: CustomEvent){
        if (event == null){
            return;
        } else {
            this.setState({[(event.target as HTMLIonInputElement).name]: (event.target as HTMLIonInputElement).value } as Pick<SignUpState, keyof SignUpState>);
        }
    }


    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

          const isInvalid =
          passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' ||
          username === '';

        return(
            <IonContent>
                <form onSubmit={this.onSubmit}>
                    <IonInput
                        name="username"
                        value={username}
                        onIonChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    <IonInput
                        name="email"
                        value={email}
                        onIonChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <IonInput
                        name="passwordOne"
                        value={passwordOne}
                        onIonChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <IonInput
                        name="passwordTwo"
                        value={passwordTwo}
                        onIonChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <IonButton disabled={isInvalid} type="submit">Sign Up</IonButton>
                    {error && <p>{error.message}</p>}
                </form>
            </IonContent>

        );
    }
}

const SignUpPage = () => (
    <div>
      <h1>SignUp</h1>
      <FirebaseContext.Consumer>
        {firebase => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  );


 export default SignUpPage;
 export { SignUpForm };