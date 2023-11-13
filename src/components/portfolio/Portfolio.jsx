import React from 'react'
import './portfolio.css'
import car from '../../assets/car_lane.jpg'
import file from '../../assets/file_management.png'
import attendance from '../../assets/attendance_app.jpg'
import fastag from '../../assets/fastag.jpg'
import weatherify from '../../assets/weatherify.png'
import hanuman from '../../assets/hanuman.jpg'

function Portfolio() {
  return (
    <>
    <div id='Projects' className='portfolio-container'>
            <h1>Portfolio</h1>
    <div className='porfolio-list'>
        <article>
                <h3>Car Lane Detection</h3>
                <img src={car} alt='car-logo' className='portfolio-img'></img>
                  <a href='https://github.com/amithck/car-lane-detector' className='port-btn' target='blank'>Github</a>
        </article>
        <article>
                <h3>File Management System with Search Engine</h3>
                <img src={file} alt='car-logo' className='portfolio-img'></img>
                <div>
                    <a href='https://github.com/amithck/file_storage' className='port-btn' target='blank'>Github</a>
                </div>
        </article>
        <article>
                <h3>Attendance On-the-Go</h3>
                <img src={attendance} alt='car-logo' className='portfolio-img'></img>
                <div>
                    <a href='https://github.com/Chakshursharma/Attendance_App' className='port-btn' target='blank'>Github</a>
                </div>
        </article>
    </div>
    <br/>
    <div className='porfolio-list'>
        <article>
                <h3>Fastag Management System</h3>
                <img src={fastag} alt='car-logo' className='portfolio-img'></img>
                    <a href='https://github.com/Chakshursharma/DBMS-PROJECT' className='port-btn' target='blank'>Github</a>
        </article>
        <article>
                <h3>Weatherify</h3>
                <img src={weatherify} alt='car-logo' className='portfolio-img'></img>
                <div>
                    <a href='https://github.com/Chakshursharma/WeatherApp' className='port-btn' target='blank'>Github</a>
                </div>
        </article>
        <article>
                <h3>Hanuman Chalisa</h3>
                <img src={hanuman} alt='car-logo' className='portfolio-img'></img>
                <div>
                    <a href='https://github.com/Chakshursharma/HanumanChalisa' className='port-btn' target='blank'>Github</a>
                </div>
        </article>
    </div>
    </div>
    </>
  )
}

export default Portfolio
