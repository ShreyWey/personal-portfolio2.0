import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/shrey2004"><BsLinkedin/></a>
            <a href="https://github.com/ShreyWey" /*target="_blank"*/><BsGithub/></a>
            <a href="https://www.instagram.com/shrey_2_good"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials