import React from 'react'
import { Route, Redirect } from 'react-router-dom'
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
import { apps, flash } from 'ionicons/icons'
import { Resources, Home, Guide, FAQ } from './views/tabs'

import { Provider } from "mobx-react"
import { create } from "mobx-persist"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
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
import DataStore from './stores/data_store'

//create an instance of each store to add to the common store directory in the app
const preferencesStore = new PreferencesStore()
export const dataStore = new DataStore()

// a first release backup of all data
export let backupData = {
  "home": {
  "tiles": [
      {
          "label": "I have a student I'm concerned about",
          "link": "/guide"
      },
      {
          "label": "FAQ",
          "link": "/faq"
      },
      {
          "label": "I have an emergency",
          "link": ""
      },
      {
          "label": "Classroom Techniques",
          "link": "/techniques"
      },
      {
          "label": "Campus Resources",
          "link": "/resources"
      }
  ]
},
"guide": {
  "tiles": [
      {
          "subscript": "is feeling",
          "label": "Anxious",
          "description": "Anxiety is defined as..... but may be also be related to (synonyms)",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      },
      {
          "subscript": "may be",
          "label": "Depressed",
          "description": "",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      },
      {
          "subscript": "may be",
          "label": "Suicidal",
          "description": "",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      },
      {
          "subscript": "may",
          "label": "Harm Others",
          "description": "",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      },
      {
          "subscript": "has",
          "label": "Unusual/Disruptive Behavior",
          "description": "",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      },
      {
          "subscript": "is otherwise a",
          "label": "Student of Concern",
          "description": "",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      },
      {
          "subscript": "says they have a",
          "label": "Disability",
          "description": "",
          "resourcesRelevant": [],
          "videoLink": "",
          "warningSigns": "",
          "whatToDo": ""
      }
  ]
},
"resource": {
  "tiles": [
      {
          "label": "",
          "body": ""
      }
  ]
},
"faq": {
  "tiles": [
      {
          "question": "Will I be breaking confidentiality if I share my concerns about a student with someone else?",
          "answer": ""
      },
      {
          "question": "I want to make sure the student I reffered is safe/got help. Is this possible?",
          "answer": ""
      },
      {
          "question": "What if I'm worried about someone who is not a student (myself, a faculty or staff member, etc.)?",
          "answer": ""
      },
      {
          "question": "What does UCC do?",
          "answer": ""
      },
      {
          "question": "What is my role in student mental health",
          "answer": ""
      }
  ]
},
"emergency": {
  
}
}

const App: React.FC = () => {
  //create a store to hold all store directories

  dataStore.updateData()
  
  
  const hydrate = create({})
  const store = new Store(preferencesStore, dataStore)

  hydrate("store", store)

  return (
    <Provider store={store} >
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} />
              <Route path="/guide" component={Guide}/>
              <Route path="/faq" component={FAQ} />
              <Route path="/resources" component={Resources} exact={true} />
              <Redirect exact from="/" to="/home" />
            </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="Home" href="/home">
                  <IonIcon icon={apps} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Guide" href="/guide">
                  <IonIcon icon={apps} />
                  <IonLabel>Guide</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Resources" href="/resources">
                  <IonIcon icon={flash} />
                  <IonLabel>Resources</IonLabel>
                </IonTabButton>
                <IonTabButton tab="FAQ" href="/faq">
                  <IonIcon icon={apps} />
                  <IonLabel>FAQ</IonLabel>
                </IonTabButton>
              </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </Provider>
  )
}

export default App
