import { computed } from 'mobx'

import * as SystemData from '../stores/data.json'
import { GuideTiles, HomeLinks } from './models/data_models'

export default class DataStore {

@computed
public get guideView() {
    return SystemData.guide
}

@computed 
public get guideTiles(): GuideTiles[] {
    return this.guideView.tiles
}

@computed
public get homeView() {
    return SystemData.home
}

@computed
public get homeTiles(): HomeLinks[] {
    return this.homeView.tiles
}

@computed
public get resourceView() {
    return SystemData.resource
}

@computed
public get faqView() {
    return SystemData.faq
}
}