import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../avatar/Baovjp.jpg';

const styles = {
  container: (isDarkMode) => ({
    background: isDarkMode
      ? 'linear-gradient(to right, #2a2a2a, #3a3a3a)'
      : 'linear-gradient(to right, #1e3c72, #2a5298)',
    color: isDarkMode ? 'white' : 'black',
    height: '0vh',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0',
  }),
  button: {
    backgroundColor: '#ff5722',
    padding: '10px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  sidebar: (isSidebarOpen) => ({
    width: isSidebarOpen ? '300px' : '0',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    transition: 'width 0.3s ease-in-out',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
  }),
  mainContent: {
    width: '100%',
    maxWidth: '1000px',
    padding: '16px 0',
    textAlign: 'center',
    marginTop: '0',
  },
  themeToggleButton: {
    marginBottom: '20px',
    backgroundColor: '#ff5722',
    border: 'none',
    padding: '8px',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
  },
  imageContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
};

const NavigationButton = ({ label, onClick }) => (
  <button onClick={onClick} style={styles.button}>
    {label}
  </button>
);

const Sidebar = ({ isOpen, toggleSidebar, scrollToSection, currentSection }) => (
  <nav style={styles.sidebar(isOpen)}>
    <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'white', fontSize: '2rem' }} aria-label="Close sidebar">
      &times;
    </button>
    <div style={{ marginTop: '10px', width: '100%' }}>
      {['home', 'portfolio', 'about', 'contact'].map((item) => (
        <NavigationButton
          key={item}
          label={item.charAt(0).toUpperCase() + item.slice(1)}
          onClick={() => {
            toggleSidebar();
            scrollToSection(item);
          }}
          style={{
            fontWeight: currentSection === item ? 'bold' : 'normal',
          }}
        />
      ))}
    </div>
  </nav>
);

const Header = () => (
  <header id="home" style={{ marginBottom: '10px', textAlign: 'center' }}>
    <img
      src={avatar}
      alt="Peter Bao"
      style={{
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover', 
        marginBottom: '10px',
      }}
    />
    <h1 className="w3-jumbo" style={{ fontSize: '2rem' }}>
      <b>Peter Bao</b>
    </h1>
    <p style={{ fontSize: '1rem' }}>The Best Coder in the World.</p>
    <button
      style={{
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '10px',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#4caf50')}
    >
      <i className="fa fa-download"></i> HBK' Team Member
    </button>
  </header>
);

const Portfolio = () => (
  <section id="portfolio" style={{ marginBottom: '20px' }}>
    <h2 style={{ fontSize: '1.5rem' }}>Portfolio</h2>
    <hr style={{ border: '1px solid #fff', width: '60%' }} />
    <p>A showcase of my work:</p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>🔧 Project 1: Mini Pixel Games</li>
      <li>📊 Project 2: Make a Small AI for Talking</li>
      <li>💻 Project 3: Mobile Application</li>
    </ul>

    <div style={{ marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.2rem' }}>Languages and Tools Used</h3>
      <hr style={{ border: '1px solid #fff', width: '40%' }} />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>⚙️ JavaScript, TypeScript, React, Node.js</li>
        <li>🛠️ Python, TensorFlow, OpenAI APIs</li>
        <li>📱 React Native, Flutter</li>
        <li>🌐 HTML, CSS, Tailwind, Bootstrap</li>
        <li>☁️ Firebase, MongoDB</li>
      </ul>
    </div>
  </section>
);

const About = () => (
  <section id="about" style={{ marginBottom: '20px' }}>
    <h2 style={{ fontSize: '1.5rem' }}>About</h2>
    <hr style={{ border: '1px solid #fff', width: '60%' }} />
    <p>
      I'm Vo Huynh Thai Bao. I entered the IT field because I frequently used my laptop for both work and gaming.
      My passion for web development comes from exploring new ways to leverage technology.
    </p>
  </section>
);

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nMessage: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" style={{ marginBottom: '20px' }}>
      <h2 style={{ fontSize: '1.5rem' }}>Contact Me</h2>
      <hr style={{ border: '1px solid #fff', width: '60%' }} />
      <p>
        <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Ho Chi Minh City, VN
      </p>
      <p>
        <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +84 945446761
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i> Email: vothaibao1508@gmail.com
      </p>
      <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          style={{ marginRight: '5px', padding: '5px' }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          rows="3"
          style={{ marginRight: '5px', padding: '5px' }}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </section>
  );
};

const BaoInfo = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sections = ['home', 'portfolio', 'about', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top >= 0 && top <= window.innerHeight) {
          setCurrentSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container(isDarkMode)}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} scrollToSection={scrollToSection} currentSection={currentSection} />
      <button onClick={toggleSidebar} style={styles.button}>
        ☰ Menu
      </button>
      <button onClick={() => setDarkMode((prev) => !prev)} style={styles.themeToggleButton}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <Header />
      <div style={styles.mainContent}>
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default BaoInfo;
