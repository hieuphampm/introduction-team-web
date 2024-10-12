import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Teaminfo.css'

const Teaminfo = () => {
  return (
    <div className='row'>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Phạm Phước Minh Hiếu</h4>
            <p className="card-text">The leader of HBK Team</p>
            <Link to="/HieuInfo"> 
              <button type="button" className="btn btn-custom btn-lg">About Hieu</button>
            </Link>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teaminfo
