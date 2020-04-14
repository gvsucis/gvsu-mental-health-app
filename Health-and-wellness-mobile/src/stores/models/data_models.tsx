export interface GuideTile {
    subscript: string
    label: string
    description: string
    resourcesRelevant: string[]
    videoLink: string
    warningSigns: string[]
    dosDonts: DosDonts[]
}

export interface DosDonts {
    do: string
    doBullets: string[]
    dont: string
    dontBullets: string[]
}

export interface HomeLinks {
    label: string
    link: string
}

export interface FaqTile {
    question: string
    answer: string
    bullets?: string[]
}

export interface ResourceTile {
    department: string
    link: string
    phone: string
    email?: string
    picture: string
}

export interface EmergencyInfo {
    title: string
    body: EmergencyContactInfo[]
}

export interface EmergencyContactInfo {
    body: string
}
