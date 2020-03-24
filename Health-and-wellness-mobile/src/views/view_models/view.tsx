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
    enableEmergencyModal: boolean
    store: Store
}

@inject('store')
@observer
export default class View extends React.Component<ViewProps> {

    @observable private isLoggedIn: boolean = false

    public static defaultProps = {
        store: null,
        homePage: false,
        enableEmergencyModal: true
    }

    public render() {
        const { title, body, homePage, enableEmergencyModal, store } = this.props
        console.log(store.preferences.hasLoggedin)
        return (
            <IonPage>
                <IonHeader >
                    <IonToolbar >
                        <SearchBar pageTitle={title}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="view-body">
                    {body}
                </IonContent>
                {store.preferences.hasLoggedin === false ?
                    <Modal showModal={!store.preferences.hasLoggedin} forceModal={true}>
                        <LoginView toggleVisible={this.toggleLoginModal} />
                    </Modal> : null
                }
                {enableEmergencyModal ?
                    <div className="view-emergency">
                        <EmergencyButton />
                    </div> : null
                }
                <div className="view-footer">
                    <span>University Counseling <br /> Center Information</span>
                </div>
            </IonPage>
        )
    }

    private toggleLoginModal = () => {
        const { store } = this.props
        store.preferences.toggleLoggedIn()
    }
}