import * as React from 'react'
import { IonToolbar, IonHeader, IonTitle, IonPage, IonContent } from '@ionic/react'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import Store from '../../stores/store'
import EmergencyButton from '../../components/emergency-button'
import Modal from '../../components/modal'
import LoginView from '../login_view'
import SearchBar from '../../components/search_bar'

import "./view.scss"

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
        const { title, body, store } = this.props
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
                <div className="view-footer">
                    <EmergencyButton />
                </div>
                {!store.preferences.hasLoggedin ?
                    <Modal showModal={!store.preferences.hasLoggedin} forceModal={true}>
                        <LoginView toggleVisible={this.toggleLoginModal} />
                    </Modal> : null
                }
            </IonPage>
        )
    }

    private toggleLoginModal = () => {
        const {store} = this.props
        store.preferences.toggleLoggedIn()
        console.log("logged in state: ", store.preferences.hasLoggedin)
    }
}