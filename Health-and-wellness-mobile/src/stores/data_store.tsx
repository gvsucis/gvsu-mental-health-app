import { computed } from 'mobx'
import { GuideTile, HomeLinks, EmergencyInfo } from './models/data_models'

import * as SystemData from '../stores/data.json'

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
    public get guideTiles(): GuideTile[] {
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

    //emergency modal elements
    @computed
    public get emergencyModal() {
        return SystemData.emergency
    }

    @computed
    public get emergencyBusinessHourInfo(): EmergencyInfo {
        return this.emergencyModal.businessHours
    }

    @computed
    public get emergencyAfterHourInfo(): EmergencyInfo {
        return this.emergencyModal.afterHours
    }

    @computed
    public get emergencyDescriptionHeader() {
        return this.emergencyModal["description-header"]
    }

    @computed
    public get emergencyDescriptionBullets() {
        return this.emergencyModal["description-bullets"]
    }

    @computed 
    public get emergencyDescriptionFooter() {
        return this.emergencyModal["description-footer"]
    }

    @computed
    public get emergencyConcernHeader() {
        return this.emergencyModal["concern-header"]
    }

    @computed
    public get emergencyConcernBullets() {
        return this.emergencyModal["concern-bullets"]
    }

    //technique view elements

    @computed
    public get techniqueView() {
        return SystemData.classRoomTechniques
    }

    @computed
    public get techniqueHeader() {
        return this.techniqueView.header
    }

    @computed
    public get techniqueBody() {
        return this.techniqueView.techniques
    }
}