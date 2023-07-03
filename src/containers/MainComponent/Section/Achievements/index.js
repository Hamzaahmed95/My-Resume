import React from 'react'
import './index.css'
import { Achievements_Main_Heading, achievements } from '../../../../utils/constants'
import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Achievements = () => {

    const theme = useThemeContext()
    return (
        <div className="achievements_container">
            <div style={{ paddingBottom: "10px" }}>
                <h1 className={`about_me_heading_${theme.theme}`}>{Achievements_Main_Heading}</h1>
                <hr className={`line_general_${theme.theme} achievements`} />
            </div>
            <div className="achievements_content">
                {achievements.map((achievement, index) => (
                    <div key={index} align="left" className={`block_background_${theme.theme} blog1`} >
                        <img src={achievement.img_url} />
                        <div>
                            <h3 className={`about_me_heading_${theme.theme}`} >{achievement.heading}</h3>
                            <p className={`about_me_content_${theme.theme}`}>{achievement.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
