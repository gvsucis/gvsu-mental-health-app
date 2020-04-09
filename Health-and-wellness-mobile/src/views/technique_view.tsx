import React from 'react'
import View from './view_models/view'
import { IonList } from '@ionic/react'
import ScrollTile from '../components/scroll_tile'
import Store from '../stores/store'
import { inject } from 'mobx-react'

export interface Props {
    store: Store
}

@inject("store")
export default class TechniqueView extends React.Component<Props> {

    public static defaultProps = {
        store: null
    }

    public render() {

        const header = this.props.store.data.techniqueHeader
        const body = (
            <IonList lines="none">
                <div>
                    <div>
                        {header}
                    </div>
                    {this.renderBody()}
                </div>
            </IonList>
        );

        return (
            <View title="In the Classroom" route="/technique" body={body} />
        )
    }

    private renderBody() {
        const techniques = this.props.store.data.techniqueBody
        return techniques.map((item, idx) => {
            const bullets = item.bullets.map((bullet, num) => {
                return (
                    <div key={num} className="views__bullets">
                        {bullet}
                    </div>
                )
            })
            return (
                <ScrollTile label={item.header} enableModal={true} key={idx}>
                    <div className="views__modal">
                        {item.body}
                        {bullets}
                    </div>
                </ScrollTile>
            )
        })
    }
}