import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFillEnvelopeAtFill} from 'react-icons/bs'

function Contact() {
  return (
    <>
    <footer className='footer'>
        <h1>Contact Me</h1>
        <div className='contact-link'>
            <a href="https://www.linkedin.com/in/chakshursharma/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/Chakshursharma" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.instagram.com/im_chakshu/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="mailto:chakshursharma@gmail.com" target="_blank" rel="noopener noreferrer"><BsFillEnvelopeAtFill /></a>
      </div>
    </footer>
    </>
  )
}

export default Contact
