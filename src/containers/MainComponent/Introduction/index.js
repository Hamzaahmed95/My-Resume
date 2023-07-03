import React, { useState, useEffect } from 'react'
import { ContactInfo } from './ContactInfo'
import './index.css'
import { Overview } from './Overview'

export const Introduction = () => {
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        // When the component mounts, set the showIntro state to true after a short delay
        const timer = setTimeout(() => {
            setShowIntro(true);
        }, 100); // Delay in milliseconds (adjust as needed)

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (<div className={`main_intro ${showIntro ? 'show' : ''}`}>
        <Overview />
        <ContactInfo />
    </div>
    )
}

