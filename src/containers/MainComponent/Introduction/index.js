import React from 'react'
import { ContactInfo } from './ContactInfo'
import './index.css'
import { Overview } from './Overview'

export const Introduction = () => (
    <div className="main_intro">
        <Overview />
        <ContactInfo />
    </div>
)

