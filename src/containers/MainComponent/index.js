import React from 'react'
import { Introduction } from './Introduction'
import { useThemeContext } from '../../hooks/useThemeContext'
import { Sections } from './Section'
export const MainComponent = () => {

    return (
        <div className="main_component">
            <Introduction />
            <Sections />
        </div>
    )
}
