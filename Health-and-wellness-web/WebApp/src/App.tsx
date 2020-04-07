import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { create } from "mobx-persist"

/* Theme variables */
import './theme/variables.css';
import { Provider } from 'mobx-react';

//stores
import Store from './mobile_src/stores/store'
import PreferencesStore from './mobile_src/stores/preferences_store'
import DataStore from './mobile_src//stores/data_store'
import App from './mobile_src/App';
import { FirebaseContext } from './components/firebase';
import SignInPage from './components/signin';

//create an instance of each store to add to the common store directory in the app
const preferencesStore = new PreferencesStore()
const dataStore = new DataStore()


const WebApp: React.FC<RouteProps> = () => {
  return (
    <FirebaseContext.Consumer>
      { firebase => 
    <IonApp>
      {firebase.auth.currentUser == null ? 
      <><SignInPage firebase={firebase}/></> :
    <IonReactRouter>
      <IonRouterOutlet>
          <>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/app" component={App} exact = {true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </>
      </IonRouterOutlet>
    </IonReactRouter>
}
  </IonApp>
}
  </FirebaseContext.Consumer>
  )};

export default WebApp;
