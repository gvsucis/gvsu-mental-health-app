import { observer, inject } from "mobx-react"
import React from "react"
import Store from "../../stores/store"
import { observable } from "mobx"
import { IonIcon, IonSearchbar } from "@ionic/react"
import Button from "../button"

export interface SearchBarProps {
    store: Store
}

@inject('store')
@observer
export default class SearchBar extends React.Component<SearchBarProps> {
    @observable searchValue: string = ''
    @observable searchOpen: boolean = true

    public static defaultProps = {
        store: null
    }

    public render() {

        return (
            <>
                {
                    !this.searchOpen ?
                        <div>
                            <Button type="icon" onClick={this.handleClickSearch}>
                                <IonIcon name="search-outline" />
                            </Button>
                        </div> :
                        <div>
                            <IonSearchbar value={this.searchValue} onBlur={this.handleClickSearch}/>
                        </div>
                }
            </>
        )
    }

    private handleClickSearch = () => {
        this.searchOpen = !this.searchOpen
    }
}