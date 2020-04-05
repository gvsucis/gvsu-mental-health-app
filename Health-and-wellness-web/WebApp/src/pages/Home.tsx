import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemDivider, IonItem, IonLabel, IonInput, IonModal, IonListHeader } from '@ionic/react';
import React, {useState} from 'react';
import './Home.scss';
import { SystemData, GuideTiles } from '../mobile_src/stores/models/data_models';
import { dataStore } from '../mobile_src/App'
import { getData } from '../mobile_src/utils/client';
import axios from 'axios'
import Button from '../mobile_src/components/button';
import InfiniteScroll from '../mobile_src/components/infinite-scroll';

const patchData = async(_data: SystemData) => {
  axios.patch('http://localhost:2600', _data)
}

const Home: React.FC = () => {
  let data = dataStore.data
  getData()
  .then((x) => {
    data = x.data;
  })
  const [refresh, setRefresh] = useState<number>(0)
  const [openGuide, setOpenGuide] = useState<boolean>(false)
  const [openFAQ, setOpenFAQ] = useState<boolean>(false)
  const [openHome, setOpenHome] = useState<boolean>(false)

  const updateApp = () => {
    patchData(data);
    setTimeout(() => {
      setRefresh(refresh + 1)
    }, 100)
  }
  const renderGuideTiles = () =>{
    return (
      data.guide.tiles.map((tile, i)=>{
        return (
        <IonList>
        <IonListHeader>Tile {i+1}</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">Subtitle</IonLabel>
          <IonInput onIonChange={(e)=>{
            data.guide.tiles[i].subscript = e.detail.value!
          }}></IonInput>
        </IonItem>
          
        <IonItem>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput onIonChange={(e)=>{data.guide.tiles[i].label=e.detail.value!}}></IonInput>
        </IonItem>
        </IonList>
        )
      })
    )
  }

  const renderFAQ = () => {
    return (
      data.faq.tiles.map((tile, i)=>{
        return (
          <IonList>
            <IonListHeader>Question {i+1}</IonListHeader>
            <IonItem>
              <IonLabel position="stacked">Question</IonLabel>
              <IonInput onIonChange={(e)=>{
                data.faq.tiles[i].question = e.detail.value!
              }}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Answer</IonLabel>
              <IonInput onIonChange={(e)=>{
                data.faq.tiles[i].answer = e.detail.value!
              }}></IonInput>
            </IonItem>
          </IonList>
        )
      })
    )
  }

  const renderHome = () => {
    return (
      data.home.tiles.map((tile,i)=>{
        return (
          <IonList>
            <IonListHeader>Tile {i+1}</IonListHeader>
            <IonItem>
              <IonLabel position="stacked">Page Name</IonLabel>
              <IonInput onIonChange={(e)=>{
                data.home.tiles[i].label = e.detail.value!
              }}></IonInput>
            </IonItem>
          </IonList>
        )
      })
    )
  }

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
                <IonItem button onClick={()=>{
                  setOpenHome(true);
                }}>Edit Home Page</IonItem>
                <IonModal isOpen={openHome} backdropDismiss={false}>
                  <IonContent>
                    <IonLabel>Home Page</IonLabel>
                    {renderHome()}
                  </IonContent>
                  <IonItem>
                    <Button onClick={updateApp}>Update</Button>
                    <Button onClick={()=>{setOpenHome(false)}}>Close</Button>
                  </IonItem>
                </IonModal>
                <IonItem button onClick={() => {
                  setOpenGuide(true);
                }}>Edit Guide Page</IonItem>
                <IonModal isOpen={openGuide} backdropDismiss={false}>
                <IonContent>
                    <IonLabel>Guide Page</IonLabel>
                    
                    <IonList>
                      {renderGuideTiles()}
                    </IonList>
                    <InfiniteScroll threshold={'100px'} infinite={(e)=>{(e.target as HTMLIonInfiniteScrollElement).complete()}}></InfiniteScroll>
                  </IonContent>
                  <IonItem>
                      <Button onClick={updateApp}>Update</Button>
                      <Button onClick={()=>{setOpenGuide(false)}}>Close</Button>
                    </IonItem>
                  </IonModal>
                  <IonItem button onClick={() => {setOpenFAQ(true)}}>Edit FAQ</IonItem>
                  <IonModal isOpen={openFAQ} backdropDismiss={false}>
                  <IonContent>
                    <IonLabel>FAQ Page</IonLabel>
                    {renderFAQ()}
                    
                  </IonContent>
                  <IonItem>
                      <Button onClick={updateApp}>Update</Button>
                      <Button onClick={()=>{setOpenFAQ(false)}}>Close</Button>
                    </IonItem>
                  </IonModal>
                </div>
                <div>
                  <iframe key={refresh} src="http://localhost:8100/app" className='split right'></iframe>
                </div>
            </div>
      </IonContent>
    </IonPage>
  );
};
export default Home;
