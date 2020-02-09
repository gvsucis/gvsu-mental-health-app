import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { apps, flash, send } from 'ionicons/icons'
import { Resources, Symptoms, Login } from './views/tabs'
import Details from './views/Details'

import { Provider } from "mobx-react"
import { create } from "mobx-persist"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.scss'

//stores
import Store from './stores/store'
import PreferencesStore from './stores/preferences_store'

//create an instance of each store to add to the common store directory in the app
const preferenecesStore = new PreferencesStore()

const App: React.FC = () => {

  //create a store to hold all store directories
  const hydrate = create({});
  const store = new Store(preferenecesStore);

  hydrate("moodStore", store);

  return (
    <Provider store={store} >
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/resources" component={Resources} exact={true} />
              <Route path="/symptoms" component={Symptoms} />
              <Route path="/login" component={Login}exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="Resources" href="/resources">
                <IonIcon icon={flash} />
                <IonLabel>Resources</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Symptoms" href="/symptoms">
                <IonIcon icon={apps} />
                <IonLabel>Symptoms</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Login" href="/login">
                <IonIcon icon={send} />
                <IonLabel>Login</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </Provider>
  )
}

export default App;
