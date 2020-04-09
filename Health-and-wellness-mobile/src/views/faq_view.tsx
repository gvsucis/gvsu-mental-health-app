import React from 'react'
import View from './view_models/view'
import Card from '../components/card-view'
import { IonList } from '@ionic/react'
import ScrollTile from '../components/scroll-tile'
import Store from '../stores/store'
import { inject } from 'mobx-react'

export interface Props {
    store: Store
}

@inject("store")
export default class FAQView extends React.Component<Props> {

    public static defaultProps = {
        store: null
    }

    public render() {

        const tiles = this.props.store.data.faqTiles
        const body = (
            <IonList lines="none">
                <div className="view-body">
                    {tiles.map((tile) => {
                        return (
                            <ScrollTile label={tile.question} enableModal={true} >
                                <Card title={tile.answer} subtitle={tile.question} />
                            </ScrollTile>
                        );
                    })}
                </div>
            </IonList>

        );

        return (
            <View title="FAQ" route="/faq" body={body} />
        )
    }
}