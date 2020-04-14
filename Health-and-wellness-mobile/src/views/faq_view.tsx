import React from 'react'
import View from './view_models/view'
import { IonList } from '@ionic/react'
import ScrollTile from '../components/scroll_tile'
import Store from '../stores/store'
import { inject } from 'mobx-react'

import './views.scss'
import { FaqTile } from '../stores/models/data_models'
import { classNames } from '../utils/system'

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
                                {this.renderAnswerText(tile)}
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

    private renderAnswerText(tile: FaqTile) {
        const sections = []
        let index = 0
        const curr = tile.answer
        for (let i = 0; i < curr.length; i++) {
            if (curr[i] === '\n') {
                sections.push(curr.substr(index, (i - index)))
                index = i + 1
            }
        }

        if (sections.length === 0) {
            sections.push(curr)
        }
        else {
            sections.push(curr.substr(index))
        }

        return sections.map((sec, idx) => {
            let tabbed = false
            let link = null
            let dest = null

            if (sec[0] === '-') {
                console.log("tabbed: ", sec)
                tabbed = true
            }

            if (sec.includes("[link")) {
                dest = sec.substr(sec.indexOf('[') + 5, sec.indexOf(']') - (sec.indexOf('[') + 5))
                link = (
                    <a href={dest}>
                        {dest.substr(13)}
                    </a>
                )
            }
            let output = link && dest ? sec.substr(0, sec.length - (dest.length + 6)) : sec
            const outputClasses = classNames("faq-view__dropdown-section", [
                {name: "faq-view__dropdown-section--tabbed", include: tabbed}
            ])
            return (
                <div className={outputClasses} key={idx}>
                    {output}
                    {link}
                </div>
            )
        }
        )
    }
}