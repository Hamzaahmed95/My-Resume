import React from "react"
import Profile from '../images/profile.jpg'

export const DisplayProfilePicture = () => (
  <div align="center">
    <img className="profile_picture" src={Profile} width="200" height="250" />
  </div>
)