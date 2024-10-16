import React from 'react'
import '../css/Hieu.css'
import avatar from '../avatar/HieuAvatar.jpg'
import { Link } from 'react-router-dom'

const HieuInfo = () => {
  return (
    <div className="intro-container fade-in">
      <nav className="navbar">
          <Link to="/Teaminfo" className='navbar-link'> 
            <button className="navbar-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg>
            </button>
          </Link>

          <Link to="/" className='navbar-link'>
            <button className="navbar-btn"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
              </svg>
            </button>
          </Link>
      </nav>

      <img src={avatar} alt="Avatar" className="avatar" />
      <h1>Hi, my name is Pham Phuoc Minh Hieu</h1>
      <p>I'm the HBK'team leader.</p>
      <p>Welcome to my portfolio!</p>
      <div className='skills'>
        <h2>Languages and Tools</h2>
          <a href='https://getbootstrap.com/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://git-scm.com/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://www.javascript.com/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://ubuntu.com/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://www.python.org/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://react.dev/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://pytorch.org/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://www.android.com/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://firebase.google.com/' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className='icon' alt='icon'/>
          </a>
          <a href='https://azure.microsoft.com/en-us' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" className='icon' alt='icon'/>
          </a>
      </div>
      <div className='contact'>
        <h3>Contact me at: </h3>
          <a href='https://github.com/hieuphampm' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className='icon' alt='icon' />
          </a>
          <a href='https://linkedin.com/in/hieupham976' target='_blank' rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className='icon' alt='icon' />
          </a>
      </div>
    </div>
  )
}

export default HieuInfo
