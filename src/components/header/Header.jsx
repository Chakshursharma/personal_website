import React from 'react'
import './header.css'
// import BG from '../../assets/bg2.png'
import Resume from '../../assets/resume.pdf'
import Img from '../../assets/img3.jpg'

function Header() {
  return (
   <>
  <nav id='Home'>
        <div className='navbar'>
          {/* <img src={BG} className='bg' alt='bg'></img> */}
            <div className='nav-links'>
              <div>
                <a href='#Home' className='home'>Home</a>
              </div>
                <div>
                    <a href='#About'>About</a>
                </div>
                <div>
                    <a href='#Skills'>Skills</a>
                </div>
                <div>
                    <a href='#Projects'>Projects</a>
                </div>
            </div>
        </div>
    </nav>
    {/* <hr className='hline'/> */}
    <div className='main-container'>
        <div className='text'> 
        <h5>
            Hello, I'm
        </h5>
        <h2>
            Chakshu Sharma
        </h2>
        <h3>
          I'm a <span className='span-text'>Computer Science Student</span>
        </h3>
        <div>
          <a href={Resume} className='btn'>Download Resume</a>
        </div>
        </div>
        <div className='image-container'>
          <img src={Img} className='img' alt='img'></img>
        </div>
    </div>
   </>
  )
}

export default Header
