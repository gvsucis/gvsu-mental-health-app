import React from "react"
import ResourcesView from "./resources_view"
import SymptomsView from "./symptoms_view"
import LoginView from "./login_view"

export const Resources: React.FC = () => {
    return (
      <ResourcesView />
    )
}

export const Symptoms: React.FC = () => {
    return (
        <SymptomsView/>
    )
}

export const Login: React.FC = () => {
    return (
        <LoginView/>
    )
}