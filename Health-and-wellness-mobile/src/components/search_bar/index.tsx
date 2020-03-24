import { observer, inject } from "mobx-react"
import React from "react"
import Store from "../../stores/store"
import { observable } from "mobx"
import { IonIcon, IonSearchbar, IonTitle } from "@ionic/react"
import Button from "../button"

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

    public static defaultProps = {
        store: null,
        pageTitle: "Mental Health Resource"
    }

    public render() {

        const { pageTitle } = this.props

        return (
            <>
                {
                    !this.searchOpen ?
                        <div className="search-bar">
                            <IonTitle>{pageTitle}</IonTitle>
                            <Button type="icon" fill="outline" onClick={this.handleClickSearch}>
                                <IonIcon name="search-outline" />
                            </Button>
                        </div> :
                        <div>
                            <IonSearchbar value={this.searchValue} onIonBlur={this.handleClickSearch} />
                        </div>
                }
            </>
        )
    }

    private handleClickSearch = () => {
        this.searchOpen = !this.searchOpen
    }
}