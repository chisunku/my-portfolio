import React from 'react'
import './header.css'
import me from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header id='home'>
        <div className="container header__container">
          <h4>Hello there 👋🏻</h4>
          <h1> I'm Chinmayi Sunku</h1>
          <h5 className="text-light">Software Engineer</h5>
          <HeaderSocials/>
          <div className="me">
            <img src={me} alt='me'/>
          </div>
        </div>
      </header>
  )
}

export default Header