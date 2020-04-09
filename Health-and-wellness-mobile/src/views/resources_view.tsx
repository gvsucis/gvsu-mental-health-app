
import React from 'react'
import View from './view_models/view'
import { IonList, IonHeader } from '@ionic/react'
import InfiniteScroll from '../components/infinite-scroll'
import Slides from '../components/horizontal-slides'
import Store from '../stores/store'
import { inject } from 'mobx-react'
import { ResourceTiles } from '../stores/models/data_models'

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
    const data = this.props.store.data
    const tiles: ResourceTiles[] = data.resourceTiles

    const slides = tiles.map((tile, idx) => {
      return (
        {
          title: tile.label,
          body: (
            <div key={idx}>
            {tile.body}
            </div>
          )
        }
      )
    })
    return (
      <>
        <IonList>
          <Slides slides={slides} />
        </IonList>
        <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
      </>)
  }

  private onInfinite = (e: CustomEvent<void>) => {
    (e.target as HTMLIonInfiniteScrollElement).complete()
  }
}

