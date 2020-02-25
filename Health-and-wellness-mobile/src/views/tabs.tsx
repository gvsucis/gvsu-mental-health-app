import React from "react"
import ResourcesView from "./resources_view"
import HomeView from "./home_view"
import GuideView from "./guide_view"

export const Resources: React.FC = () => {
    return (
      <ResourcesView />
    )
}

export const Home: React.FC = () => {
    return (
        <HomeView/>
    )
}

export const Guide: React.FC = () => {
    return (
        <GuideView />
    )
}