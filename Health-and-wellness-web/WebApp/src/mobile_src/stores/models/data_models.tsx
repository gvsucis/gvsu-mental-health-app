export interface GuideTiles {
    subscript: string
    label: string
    description: string
    resourcesRelevant: string[]
    videoLink: string
    warningSigns: string
    whatToDo: string
}

export interface HomeLinks {
    label: string
    link: string
}

export interface Faq {
    question: string
    answer: string
}

export interface ResourceTiles {
    label: string
    body: string
}

export interface Guide {
    tiles: GuideTiles[]
}

export interface Resource {
    tiles: ResourceTiles[]
}

export interface Home {
    tiles: HomeLinks[]
}

export interface FAQ {
    tiles: Faq[]
}

export interface SystemData {
    guide: Guide
    resource: Resource
    home: Home
    faq: FAQ
    emergency: any
}