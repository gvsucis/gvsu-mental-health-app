import React, { Component, Props, FormEvent } from 'react';
import {RouteComponentProps} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from '../firebase';
import { IonButton, IonInput } from '@ionic/react';



export interface SignInProps {
    email?: string,
    password?: string,
    error?: Error
    firebase: Firebase
}

interface SignInState {
    email: string,
    password: string,
    error: any
}

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


export default class SignInForm extends React.Component<SignInProps, SignInState> {
  
    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
  }

  onSubmit(event: any) {
    const { email, password } = this.state;
    this.props.firebase
      .signIn(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        console.log("Signed in");
       // this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange(event: CustomEvent) {
        this.setState({ [(event.target as HTMLIonInputElement).name]: (event.target as HTMLIonInputElement).value } as Pick<SignInState, keyof SignInState>);
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <IonInput
          name="email"
          value={email}
          onIonChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <IonInput
          name="password"
          value={password}
          onIonChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <IonButton type="submit">
          Sign In
        </IonButton>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

//const SignIn = withRouter(SignInForm);

const SignInPage = (firebase: Firebase) => (
  <div>
    <h1>SignIn</h1>
    <FirebaseContext.Consumer>
    {firebase => <SignInForm firebase={firebase}/>}
    </FirebaseContext.Consumer>
  </div>
);

export {SignInPage};
