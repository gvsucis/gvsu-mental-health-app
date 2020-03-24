import { computed } from 'mobx'

import * as SystemData from '../stores/data.json'
import { GuideTiles, HomeLinks } from './models/data_models'

export default class DataStore {

//Home view elements
@computed
public get homeView() {
    return SystemData.home
}

@computed
public get homeTiles(): HomeLinks[] {
    return this.homeView.tiles
}

//guide view elements
@computed
public get guideView() {
    return SystemData.guide
}

@computed 
public get guideTiles(): GuideTiles[] {
    return this.guideView.tiles
}

//resource view elements
@computed
public get resourceView() {
    return SystemData.resource
}

@computed
public get resourceTiles() {
    return this.resourceView.tiles
}

//faq view elements
@computed
public get faqView() {
    return SystemData.faq
}

@computed
public get faqTiles() {
    return this.faqView.tiles
}
}