
import React from 'react'
import View from './view_models/view'
import { IonList } from '@ionic/react'
import InfiniteScroll from '../components/infinite-scroll'
import Slides from '../components/horizontal-slides'

export default class ResourcesView extends React.Component {

  public render() {
    const body = (
      <>
        <IonList lines="none">
          <div className="view-body">
            {this.renderBody()}
          </div>
        </IonList>
      </>
    )
    return (
      <View title="Resources" route="/resources" body={body} />
    )
  }

  private renderBody() {

    let arr = [
      {
        label: "Resource 1",
        element: (
          <div>
            this is a short explanation
        </div>)
      }, {
        label: "Resource 2",
        element: (
          <div>
            this is a short explanation
        </div>)
      }, {
        label: "Resource 3",
        element: (
          <div>
            this is a short explanation
        </div>)
      }, {
        label: "Resource 4",
        element: (
          <div>
            this is a short explanation
        </div>)
      }]

    return (
      <><IonList>
        <Slides slides={arr} />
      </IonList>
        <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
      </>)

  }
  private onInfinite = (e: CustomEvent<void>) => {
    (e.target as HTMLIonInfiniteScrollElement).complete()
  }
}

