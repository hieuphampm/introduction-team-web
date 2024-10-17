import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Main.css'

const Teaminfo = () => {
  return (
    <div className='row fade-in'>
      <nav className="navbar-info">
          <Link to="/" className='navbar-link'> 
            <button className="navbar-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg>
            </button>
          </Link>
      </nav>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card-info">
          <div className="card-info-body">
            <h4 className="card-title">Phạm Phước Minh Hiếu</h4>
            <p className="card-text">The leader of HBK Team</p>
            <Link to="/HieuInfo"> 
              <button type="button" className="btn btn-custom btn-lg">About Hieu</button>
            </Link>   
          </div>
        </div>

        <div className="card-info">
          <div className="card-info-body">
            <h4 className="card-title">Võ Huỳnh Thái Bảo</h4>
            <p className="card-text">Team member</p>
            <Link to="/BaoInfo"> 
              <button type="button" className="btn btn-custom btn-lg">About Bao</button>
            </Link>   
          </div>
        </div>

        <div className="card-info">
          <div className="card-info-body">
            <h4 className="card-title">Phạm Minh Khoa</h4>
            <p className="card-text">Team member</p>
            <Link to="/KhoaInfo"> 
              <button type="button" className="btn btn-custom btn-lg">About Khoa</button>
            </Link>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teaminfo
