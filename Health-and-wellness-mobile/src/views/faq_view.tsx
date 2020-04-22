import React from 'react'
import { inject } from 'mobx-react'
import View from './view_models/view'
import { IonList } from '@ionic/react'
import ScrollTile from '../components/scroll_tile'
import Store from '../stores/store'
import { FaqInfo } from '../stores/models/data_models'
import TextBlock from '../components/text_block'

import './views.scss'

export interface Props {
    store: Store
}

export interface FaqTile {
    info: FaqInfo
    open: boolean
}

@inject("store")
export default class FAQView extends React.Component<Props> {

    private tiles: FaqTile[] = this.props.store.data.faqTiles.map((item) => {
        return (
            {
                info: item,
                open: false
            }
        )
    })

    public static defaultProps = {
        store: null
    }

    public render() {

        const body = (
            <IonList lines="none">
                {this.tiles.map((tile, idx) => {
                    return (
                        <ScrollTile open={tile.open} label={tile.info.question} enableDropdown={true} key={idx} >
                            <div className="faq-view__dropdown">
                                <TextBlock input={tile.info.answer}/>
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