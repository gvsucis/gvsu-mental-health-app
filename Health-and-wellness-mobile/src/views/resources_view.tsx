
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import View from './view_models/view';
import { IonList, IonLabel, IonItem, IonIcon } from '@ionic/react';


export default class ResourcesView extends React.Component {
  public render() {
    const body = (
      <>
        <IonList lines="none">
          {this.renderBody()}
        </IonList>
      </>
    )
    return (
      <View title="Resources" route="/resources" body={body} />
    )
  }

  private renderBody() {
      return (
      <>
        <IonItem href="https://ionicframework.com/docs/" target="_blank">
          <IonIcon slot="start" color="medium" icon={book} />
          <IonLabel>Ionic</IonLabel>
          <IonLabel>Documentation</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
          <IonIcon slot="start" color="medium" icon={build} />
          <IonLabel>Scaffold Out Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
          <IonIcon slot="start" color="medium" icon={grid} />
          <IonLabel>Change Your App Layout</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
          <IonIcon slot="start" color="medium" icon={colorFill} />
          <IonLabel>Theme Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/" target="_blank">
          <IonIcon slot="start" color="medium" icon={book} />
          <IonLabel>Ionic</IonLabel>
          <IonLabel>Documentation</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
          <IonIcon slot="start" color="medium" icon={build} />
          <IonLabel>Scaffold Out Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
          <IonIcon slot="start" color="medium" icon={grid} />
          <IonLabel>Change Your App Layout</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
          <IonIcon slot="start" color="medium" icon={colorFill} />
          <IonLabel>Theme Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/" target="_blank">
          <IonIcon slot="start" color="medium" icon={book} />
          <IonLabel>Ionic</IonLabel>
          <IonLabel>Documentation</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
          <IonIcon slot="start" color="medium" icon={build} />
          <IonLabel>Scaffold Out Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
          <IonIcon slot="start" color="medium" icon={grid} />
          <IonLabel>Change Your App Layout</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
          <IonIcon slot="start" color="medium" icon={colorFill} />
          <IonLabel>Theme Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/" target="_blank">
          <IonIcon slot="start" color="medium" icon={book} />
          <IonLabel>Ionic</IonLabel>
          <IonLabel>Documentation</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
          <IonIcon slot="start" color="medium" icon={build} />
          <IonLabel>Scaffold Out Your App</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
          <IonIcon slot="start" color="medium" icon={grid} />
          <IonLabel>Change Your App Layout</IonLabel>
        </IonItem>
        <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
          <IonIcon slot="start" color="medium" icon={colorFill} />
          <IonLabel>Theme Your App</IonLabel>
        </IonItem>
      </>)
    }
}

