import React from 'react'
import './index.css'
import email_light from '../../../../images/email_light.png'
import email_dark from '../../../../images/email_dark.png'
import phone_light from '../../../../images/phone_light.png'
import phone_dark from '../../../../images/phone_dark.png'
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
        <img src={theme.theme === "dark" ? email_dark : email_light} width={20} height={20} />
        <span>{' '}{' '}{EMAIL}</span>
      </p>
      <p className={`content_${theme.theme}`}>
        <img src={theme.theme === "dark" ? phone_dark : phone_light} width={20} height={20} />
        <span>{' '}{' '}{CONTACT_NUMBER}</span>
      </p>
    </div>
  )
}
