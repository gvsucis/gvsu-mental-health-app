import React from 'react'
import View from './view_models/view'
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
                {tiles.map((tile, idx) => {
                    return (
                        <ScrollTile label={tile.question} enableDropdown={true} key={idx} >
                            {tile.answer}
                        </ScrollTile>
                    );
                })}
            </IonList>
        );

        return (
            <View title="FAQ" route="/faq" body={body} />
        )
    }
}