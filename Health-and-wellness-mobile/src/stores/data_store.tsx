import { computed, observable } from 'mobx'
import { getData } from '../utils/client'
import { SystemData, GuideTiles, HomeLinks, ResourceTiles, Home, Guide, Resource} from './models/data_models'
import { backupData } from '../App'

export default class DataStore {
    @observable data: SystemData = backupData
    public updateData() {
        getData()
        .then((x) => {
            this.data = x.data;
            console.log(this.data);
        })
        .catch((err) =>{
            console.error(err)
            this.data = backupData
        })
    }
    
    @computed
    public get guideTiles(): GuideTiles[] {
        return this.guideView.tiles
    }//Home view elements
@computed
public get homeView(): Home {
    return this.data.home
}

@computed
public get homeTiles(): HomeLinks[] {
    return this.homeView.tiles
}

//guide view elements
@computed
public get guideView(): Guide {
    return this.data.guide
}


//resource view elements
@computed
public get resourceView(): Resource {
    return this.data.resource
}

@computed
public get resourceTiles(): ResourceTiles[] {
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