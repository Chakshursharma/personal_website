import React from 'react'
import './about.css'
import {BsBook} from 'react-icons/bs'
import {MdOutlineComputer} from 'react-icons/md'
import {GiSportMedal} from 'react-icons/gi'
function about() {
  return (
    <>
    <div className='about-container' id='About'>
    <h1>About Me!</h1>
    <div className='abt-text'>
    I'm a fourth-year computer science student at Bangalore Institute of Technology, skilled in Java, C, and Python. I'm also a dedicated badminton player, creative photographer, and enthusiastic traveler who enjoys experiencing and learning about new cultures.
    </div>
    <div className='abt-box'>
      <article>
        <div id='logo'>
          <BsBook/>
        </div>
        <div id='logo-txt'>
          Education
        </div>
        <div id='logo-txt-main'>
          Studied Computer Science and Engineering at Bangalore Institute of Technology 
        </div>
      </article>
      <article>
        <div id='logo'>
          <MdOutlineComputer/>
        </div>
        <div id='logo-txt'>
          Programming
        </div>
        <div id='logo-txt-main'>
          Developer with projects in Java and Python 
        </div>
      </article>
      <article>
        <div id='logo'>
          <GiSportMedal/>
        </div>
        <div id='logo-txt'>
          Hobbies
        </div>
        <div id='logo-txt-main'>
          Passionate badminton player, creative photographer and avid traveler 
        </div>
      </article>
    </div>
    <br/>
    </div>
    </>
  )
}

export default about
