import React from 'react'
import './index.css'
import email_light from '../../../../images/day/email.png'
import email_dark from '../../../../images/night/email.png'
import phone_light from '../../../../images/day/phone.png'
import phone_dark from '../../../../images/night/phone.png'
import { COMPANY, CONTACT_DETAILS, CONTACT_NUMBER, EMAIL, PROFESSION } from '../../../../utils/constants.js'

import { useThemeContext } from '../../../../hooks/useThemeContext'

export const ContactInfo = () => {

  const theme = useThemeContext()

  return (
    <div className={`contactInfo_container overview_${theme.theme}`}>
      <h4 className={`content_${theme.theme}`}>
        {CONTACT_DETAILS} {' '}
        <span className={`highlight_${theme.theme} rainbow`}>
          {PROFESSION}
        </span>
        {' '} at {COMPANY}
      </h4>
      <p className={`content_${theme.theme}`}>
        <img src={theme.theme === "dark" ? email_dark : email_light} width={20} height={14} />
        {' '}{' '}{EMAIL}
      </p>
      <p className={`content_${theme.theme}`}>
        <img src={theme.theme === "dark" ? phone_dark : phone_light} width={20} height={20} />
        {' '}{' '}{CONTACT_NUMBER}
      </p>
    </div>
  )
}
