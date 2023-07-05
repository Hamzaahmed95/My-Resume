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
    <div className={`contact_info_container overview_${theme.theme}`}>
      <div className={`contact_info_header_${theme.theme}`}>
        {CONTACT_DETAILS} {' '}
        <span className={`highlight_${theme.theme} rainbow`}>
          {PROFESSION}
        </span>
        {' '} at {COMPANY}
      </div>
      <div className='contact_info_content_container'>
        <div className={`contact_info_content_${theme.theme}`}>
          <img className="contact_info_email_image" src={theme.theme === "dark" ? email_dark : email_light} />
          <span style={{ paddingLeft: "8px", paddingTop: "2px" }} >{' '}{' '}{EMAIL}</span>
        </div>
        <div className={`contact_info_content_${theme.theme}`}>
          <img className="contact_info_phone_image" src={theme.theme === "dark" ? phone_dark : phone_light} />
          <span style={{ paddingLeft: "8px", paddingTop: "2px" }}>{' '}{' '}{CONTACT_NUMBER}</span>
        </div>
      </div>
    </div >
  )
}
