
import React from 'react'
import View from './view_models/view'
import { IonList, IonHeader } from '@ionic/react'
import InfiniteScroll from '../components/infinite-scroll'
import Slides from '../components/horizontal-slides'
import Store from '../stores/store'
import { ResourceTiles } from '../stores/models/data_models'
import { inject } from 'mobx-react'

export interface Props {
  store: Store  
}

@inject("store")
export default class ResourcesView extends React.Component<Props> {

  public static defaultProps = {
    store: null
  }

  public render() {
    const body = (
      <>
      <IonHeader>
        Do's
      </IonHeader>
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
    const tiles: ResourceTiles[] = this.props.store.data.resourceTiles

    return (
      <><IonList>
        <Slides slides={tiles} />
      </IonList>
        <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
      </>)

  }
  private onInfinite = (e: CustomEvent<void>) => {
    (e.target as HTMLIonInfiniteScrollElement).complete()
  }
}

