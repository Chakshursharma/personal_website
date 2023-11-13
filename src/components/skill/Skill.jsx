import React from 'react'
import './skill.css'

function Skill() {
  return (
    <>
    <div id='Skills' className='skill-container'>
        <h1>
            Skills
        </h1>
        <div className='skill-list'>
        <article>
                <h1>Frontend Development</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
            </ul>
            </article>
            <article>
                <h1>Backend Development</h1>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Android</li>
            </ul>
            </article>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    </>
  )
}

export default Skill
