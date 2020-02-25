import * as React from 'react'
import { IonToolbar, IonHeader, IonTitle, IonPage, IonContent } from '@ionic/react'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import Store from '../../stores/store'
import EmergencyButton from '../../components/emergency-button'
import Modal from '../../components/modal'
import LoginView from '../login_view'

import "./view.scss"
import SearchBar from '../../components/search_bar'

export interface ViewProps {
    title: string
    route: string
    body: React.ReactElement
    homePage: boolean
    store: Store
}

@inject('store')
@observer
export default class View extends React.Component<ViewProps> {

    @observable private isLoggedIn: boolean = false

    public static defaultProps = {
        store: null,
        homePage: false
    }

    public render() {
        const { title, body, homePage } = this.props
        return (
            <IonPage>
                <IonHeader >
                    <IonToolbar >
                        <IonTitle className="view-header">{title}</IonTitle>
                        {/* <SearchBar /> */}
                    </IonToolbar>
                </IonHeader>
                <IonContent className="view-body">
                    {body}
                </IonContent>
                {!this.isLoggedIn && homePage ?
                    <Modal showModal={!this.isLoggedIn} forceModal={true}>
                        <LoginView toggleVisible={this.toggleLoginModal} />
                    </Modal> : null
                }
                <div className="view-footer">
                    <EmergencyButton />
                </div>
            </IonPage>
        )
    }

    private toggleLoginModal = () => {
        this.isLoggedIn = !this.isLoggedIn
    }
}