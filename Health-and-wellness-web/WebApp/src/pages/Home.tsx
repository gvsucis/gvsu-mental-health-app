import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.scss';
import App from '../mobile_src/App'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Health and Wellness</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Health and Wellness</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='flex-container'>
                <div className='split left'>
                   Hello World!
                </div>
                <div>
                  <iframe src="http://localhost:8100/app" className='split right'></iframe>
                </div>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
