
import React from 'react'
import { inject } from 'mobx-react'
import Store from '../stores/store'
import View from './view_models/view'
import { IonList } from '@ionic/react'
import ResourceSlideDock from '../components/resource_slider_dock'

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

    return (
      <ResourceSlideDock resources={data.resourceTiles} />
    )
  }
}

