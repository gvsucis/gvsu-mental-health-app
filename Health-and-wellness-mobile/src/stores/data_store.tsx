import { computed, observable } from 'mobx'
import {SystemData, getData} from '../utils/client'


export default class DataStore {
    @observable data: SystemData = {guideTiles: [{
            "subscript": "failed",
            "label": "failed",
            "description": "failed",
            "resourcesRelevant": [""],
            "videoLink": "",
            "warningSigns": "",
            "whatToDo": ""
        }]}
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
    public get guideTiles() {
        return this.data.guideTiles
    }


}