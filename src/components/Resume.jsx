import React from 'react'
import './Resume.css'
import Workexperience from './Workexperience'
import Skills from './Skills'
import Education from './Education'

const Resume = () => {
  return (
    <><div className="resume-container">
      <div className="resume-heading">
        <span className='word'>Resume</span> 
        <div className='low-width'>
        <a href="src\assets\pdf\HARSHVARDHAN_PANCHAL_resume.pdf" download={true}><p className="download-btn">Download Resume</p></a></div>
      </div>
      <Workexperience />
      <Skills />
      <Education/>
      </div>
    </>
  )
}

export default Resume
