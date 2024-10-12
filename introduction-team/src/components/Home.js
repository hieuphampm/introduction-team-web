import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Teaminfo from './Teaminfo'

const Home = () => {
  return (
    <div>
      <h2>Welcome to my team</h2>
      <div className='card'>
        <img src='https://initiatesgroup.com/wp-content/uploads/who-we-are.png'className='card-image-top' alt='card-img'/>
        <div className='card-body'>
          <h5 className='card-title'>Team information</h5>
          <p className='card-text'>Know more about us</p>
          <Link to={Teaminfo} class="btn btn-primary"> Click here </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
