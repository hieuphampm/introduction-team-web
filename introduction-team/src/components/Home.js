import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="Home fade-in">
      <h1>Welcome To HBK Team</h1>
      <h2>Discover more!</h2>
      <div className="btn-functions">
        <Link to="/Teaminfo"> 
          <button type="button" className="btn btn-custom btn-lg">About Us</button>
        </Link>     

        <Link to="/Teamrule"> 
          <button type="button" className="btn btn-custom btn-lg">Team Rule</button>
        </Link>    
      </div>
    </div>
  );
};

export default Home;
