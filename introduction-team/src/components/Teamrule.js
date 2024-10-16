import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Main.css'

const Teamrule = () => {
  return (
    <div className='Teamrule fade-in'>
      <nav className="navbar-rule">
          <Link to="/" className='navbar-link-info'> 
            <button className="navbar-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg>
            </button>
          </Link>
      </nav>
      <div className='wrapper'>
        <div className='container-fluid'>
          <input type="radio" name="slide" id="c1" checked />
            <label for="c1" class="card-body">
                <div class="rowspan">
                    <div class="material-icons">1</div>
                    <div class="description-box">
                        <h4>Code Management</h4>
                        <p>Ensure each member commits with a meaningful message.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c2" checked />
            <label for="c2" class="card-body">
                <div class="rowspan">
                    <div class="material-icons">2</div>
                    <div class="description-box">
                        <h4>Feature Development</h4>
                        <p>Track the feature each member is responsible for.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c3" checked />
            <label for="c3" class="card-body">
                <div class="rowspan">
                    <div class="material-icons">3</div>
                    <div class="description-box">
                        <h4>Deadlines</h4>
                        <p>Monitor whether members meet deadlines or not.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c4" checked />
            <label for="c4" class="card-body">
                <div class="rowspan">
                    <div class="material-icons">4</div>
                    <div class="description-box">
                        <h4>Improvement</h4>
                        <p>Encourage learning and skill enhancement.</p>
                    </div>
                </div>
            </label>

        </div>
      </div>
    </div>
  )
}

export default Teamrule
