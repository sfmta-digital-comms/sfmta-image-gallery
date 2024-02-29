import React from 'react';
import Button from 'react-bootstrap/Button';

const Navbar = ({ onOpenModal }) => {
  const navbarStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures the left and right containers are pushed to the edges
    height: '50px',
    padding: '0 .5rem 0 0',
  };

  const leftContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // This style could be used if you have multiple buttons or elements on the right side in the future
  const rightContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    display: 'inline-flex',
    marginRight: 'initial',
    height: '100%',
    alignItems: 'stretch',
    color: '#fff',
    textDecoration: 'none',
  };

  const siteName = {
    backgroundColor: '#525657',
    lineHeight: '2.5rem',
    padding: '0.1rem 15px 0',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    textDecoration: 'none',
  };

  const cls1Style = {
    fill: '#fff',
  };

  const customColor = {
    backgroundColor: '#2b74b7',
    borderColor: '#2b74b7',
  };

  return (
    <nav style={navbarStyle}>
      <div style={leftContainerStyle}>
        <a href="https://sfmta.com" title="Home" rel="home" style={linkStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="50" height="50">
            <rect width="100%" height="100%" style={{ fill: '#2b74b7' }} />
            <g fill="#fff">
              <path style={cls1Style} d="M100.43,318H81c-.11-2.05-.3-3.82-.3-5.59,0-57.83.23-115.66-.13-173.49-.15-24.29,16.5-51.84,48-56.67,36.14-5.56,62.83,22.3,64.72,50.35.78,11.45.54,23,.59,34.47.08,18,0,36,0,54a31.94,31.94,0,0,0,.15,4.49c.45,3,2.08,4.41,5,4.47s4.84-1.28,5.48-4.08a20.2,20.2,0,0,0,.2-4.48c0-27.33.41-54.67-.11-82-.48-25.26,17.18-51.92,47-57.06,34.91-6,63.1,20.24,65.76,49.64.42,4.63.57,9.31.57,14q.06,82.48,0,165c0,2.28-.27,4.55-.43,7H298.11c-.12-2.34-.33-4.43-.33-6.52q0-77,0-154c0-13.71-5.63-24.56-17.24-31.9-22.84-14.45-52.79.27-55.46,27.16-.36,3.64-.54,7.31-.55,11,0,26.5,0,53,0,79.5,0,13-8.88,23.19-21.76,25.24-14.47,2.3-28.56-9.35-28.93-24.1-.2-8,0-16-.05-24,0-21.17.09-42.34,0-63.5-.1-18.06-11.77-32.26-29.35-36.08-20.51-4.46-41.15,10.35-43.24,31.12a123.63,123.63,0,0,0-.64,12.46q-.06,73.24,0,146.5Z" />
              <path style={cls1Style} d="M286.47,318H267.08c-.13-2.16-.36-4.24-.36-6.32q0-66.24,0-132.49a33.18,33.18,0,0,0-.12-5,5.43,5.43,0,0,0-5.7-4.58,5.23,5.23,0,0,0-4.85,4.83,39.72,39.72,0,0,0-.1,4.5c0,25.16.11,50.33-.08,75.49,0,6.79-.27,13.75-1.76,20.33-5.9,26.08-30.23,44.5-57.18,43.61-25-.83-48.07-20-53-45.08a60.49,60.49,0,0,1-1.09-11.4c-.08-27.5,0-55-.05-82.49a34.51,34.51,0,0,0-.13-5,5.6,5.6,0,0,0-5.56-4.8c-2.7,0-4.77,2.07-5.08,5.14a42.19,42.19,0,0,0-.08,4.5q0,65.49,0,131c0,2.46-.23,4.91-.37,7.68H112c-.11-1.95-.29-3.56-.29-5.18q0-77.49,0-155c0-13.43,8.24-23.65,20.81-26.2,13.65-2.76,27.71,7,29.74,20.79a65.06,65.06,0,0,1,.6,9.46q.07,40.5,0,81c0,12.57,4.74,22.79,14.95,30,12.06,8.54,25.17,9.5,38.26,2.76C228.8,269,235.51,258,235.64,243.65c.25-28.83,0-57.66.1-86.49,0-13.12,8.6-23.26,21.4-25.71,13.12-2.52,27,7.22,29.09,20.51a62.2,62.2,0,0,1,.66,9.45q.06,75,0,150C286.9,313.51,286.63,315.63,286.47,318Z" />

            </g>
          </svg>
          <span style={siteName}>SFMTA</span>
        </a>
      </div>

      <div style={rightContainerStyle}>
        <Button variant="primary" style={customColor} onClick={onOpenModal}>Welcome</Button>
      </div>
    </nav>
  );
};

export default Navbar;