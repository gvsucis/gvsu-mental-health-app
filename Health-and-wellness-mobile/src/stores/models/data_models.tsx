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

export interface EmergencyInfo {
    title: string
    body: EmergencyContactInfo[]
}

export interface EmergencyContactInfo {
    body: string
}