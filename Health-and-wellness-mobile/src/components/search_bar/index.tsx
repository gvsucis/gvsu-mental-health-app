import { observer, inject } from "mobx-react"
import React from "react"
import Store from "../../stores/store"
import { observable } from "mobx"
import { IonIcon, IonSearchbar, IonTitle } from "@ionic/react"
import Button from "../button"
import { search } from 'ionicons/icons'

import './index.scss'

export interface SearchBarProps {
    store: Store
    pageTitle: string
}

@inject('store')
@observer
export default class SearchBar extends React.Component<SearchBarProps> {
    @observable searchValue: string = ''
    @observable searchOpen: boolean = false

    private searchRef: React.RefObject<HTMLIonSearchbarElement> | null = null

    public static defaultProps = {
        store: null,
        pageTitle: "Mental Health Resource"
    }

    public componentDidMount() {
        this.searchRef = React.createRef()
    }

    public componentDidUpdate() {
        if (this.searchOpen) {
            this.searchRef?.current?.setFocus()
        }
    }

    public render() {

        const { pageTitle } = this.props

        return (
            <>
                {
                    !this.searchOpen ?
                        <div className="search-bar">
                            <IonTitle>{pageTitle}</IonTitle>
                            <Button type="icon" fill="clear" onClick={this.handleClickSearch} >
                                <IonIcon icon={search} />
                            </Button>
                        </div> :
                        <div>
                            <IonSearchbar onClick={this.handleClickSearch} value={this.searchValue} onIonBlur={this.handleClickSearch} ref={this.searchRef} />
                        </div>
                }
            </>
        )
    }

    private handleClickSearch = () => {
        this.searchOpen = !this.searchOpen
    }
}