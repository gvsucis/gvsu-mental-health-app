import { computed, observable } from 'mobx'
import {SystemData, getData} from '../utils/client'
import { GuideTiles, HomeLinks } from './models/data_models'
import * as LocalData from '../stores/data.json'

export default class DataStore {
    @observable data: SystemData = LocalData
    public updateData() {
        getData()
        .then((x) => {
            this.data = x.data;
            console.log(this.data);
        })
        .catch((err) =>{
            console.error(err);
        })
    }
    
    @computed
    public get guideTiles(): GuideTiles[] {
        return this.guideView.tiles
    }//Home view elements
@computed
public get homeView() {
    return this.data.home
}

@computed
public get homeTiles(): HomeLinks[] {
    return this.homeView.tiles
}

//guide view elements
@computed
public get guideView() {
    return this.data.guide
}


//resource view elements
@computed
public get resourceView() {
    return this.data.resource
}

@computed
public get resourceTiles() {
    return this.resourceView.tiles
}

//faq view elements
@computed
public get faqView() {
    return this.data.faq
}

@computed
public get faqTiles() {
    return this.faqView.tiles
}
}