import PreferencesStore from "./preferences_store";

export default class Store {
    public readonly preferences: PreferencesStore

    public constructor(
        preferencesStore: PreferencesStore
    ) {
        this.preferences = preferencesStore
    }
}