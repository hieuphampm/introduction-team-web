import React from 'react';
import './Khoa.css';
import avatar from '../avatar/Kho.jpg';
import { Link } from 'react-router-dom';

const MyInfo = () => {
  return (
    <div className="info-container slide-in">
      <div className="nav-bar">
        <Link to="/Teaminfo" className="nav-link">Quay lại</Link>
        <Link to="/" className="nav-link">Trang chủ</Link>
      </div>

      <div className="profile-section">
        <img src={avatar} alt="Profile" className="profile-pic" />
        <h1 className="name-title">Pham Minh Khoa</h1>
        <p className="role">Thành viên gà mờ của team</p>
        <p className="welcome-msg"> Chào mừng bạn đến với trang của tôi.</p>
      </div>


      <div className="introduction-section">
        <h2>Giới thiệu bản thân</h2>
        <p>
          Tôi là một lập trình viên đam mê công nghệ, luôn sẵn sàng học hỏi và phát triển các kỹ năng mới. Đặc biệt, tôi thích ẩn thân để các thành viên ra sức tìm kiếm trong bất lực .
        </p>
      </div>

      <div className="contact-email">
        <h2>Email Liên hệ</h2>
        <p>khoaphamminh1108@gmail.com</p>
      </div>
    </div>
  );
}

export default KhoaInfo;