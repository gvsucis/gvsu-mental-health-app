import React from 'react'
import { inject } from 'mobx-react'
import View from './view_models/view'
import { IonList } from '@ionic/react'
import ScrollTile from '../components/scroll_tile'
import Store from '../stores/store'
import { FaqTile } from '../stores/models/data_models'
import TextBlock from '../components/text_block'

import './views.scss'

export interface Props {
    store: Store
}

@inject("store")
export default class FAQView extends React.Component<Props> {

    public static defaultProps = {
        store: null
    }

    public render() {

        const tiles: FaqTile[] = this.props.store.data.faqTiles
        const body = (
            <IonList lines="none">
                {tiles.map((tile, idx) => {
                    return (
                        <ScrollTile label={tile.question} enableDropdown={true} key={idx} >
                            <div className="faq-view__dropdown">
                                <TextBlock input={tile.answer}/>
                            </div>
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