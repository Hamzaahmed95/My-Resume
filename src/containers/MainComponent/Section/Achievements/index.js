import React from 'react'
import './index.css'
import { Achievements_Main_Heading ,achievements} from '../../../../utils/constants'
import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Achievements = () => {

    const theme = useThemeContext()
    return (
        <div className="achievements_container">
            <h1 className={`about_me_heading_${theme.theme}`}>{Achievements_Main_Heading}</h1>
            <div className="achievements_content">
                {achievements.map((achievement, index) => (
                    <div key={index} align="left" className={`block_background_${theme.theme} blog1`} >
                        <img src={achievement.img_url} />
                        <div>
                            <h2 className={`about_me_heading_${theme.theme}`} >{achievement.heading}</h2>
                            <p className={`about_me_content_${theme.theme}`}>{achievement.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
