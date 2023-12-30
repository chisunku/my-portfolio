import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <h3>Contact Me at</h3>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/chinmayi-sunku/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
          <a href="https://github.com/chisunku" target="_blank" rel='noreferrer'><BsGithub/></a>
          <a href="mailto:chinmayi.sunku@sjsu.edu" target="_blank" rel='noreferrer'><MdEmail/></a>
        </div>
    </footer>
  )
}

export default Footer