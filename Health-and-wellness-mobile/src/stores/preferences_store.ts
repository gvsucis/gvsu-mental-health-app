import { observable, action } from "mobx"

export default class PreferencesStore {
    @observable public hasLoggedin: boolean = false

    @action
    public toggleLoggedIn() {
        this.hasLoggedin = !this.hasLoggedin
    }
}