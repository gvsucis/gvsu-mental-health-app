import { computed } from 'mobx'

import * as SystemData from '../stores/data.json'

export default class DataStore {

@computed
public get guideTiles() {
    return SystemData.guideTiles
}


}