import './NavBar.css';
import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { BsSun, BsMoonFill } from 'react-icons/bs';

function ToggleMenu({ darkMode, setDarkMode }) {
  const bordercolor = darkMode ? 'white' : 'black';
  return (
    <section
      className="toggle-menu"
      style={{ backgroundColor: darkMode ? '#1a1a1a' : '#ededed' }}
    >
      <section className="nav-links-toggle">
        <ul className={`list ${darkMode ? 'hover-dark' : 'hover-light'}`}>
          <li>
            <a href="/">RACES</a>
          </li>
          <li>
            <a href="/">NFT HORSES</a>
          </li>
          <li>
            <a href="/">$DERC</a>
          </li>
          <li>
            <a href="/">GAMEPLAY</a>
          </li>
          <li>
            <a href="/">ROADMAP</a>
          </li>
          <li>
            <a href="/">
              {' '}
              <RiLogoutBoxRLine /> LOGOUT
            </a>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <section className="bttnMode-toggle">
          <section
            className="bttnMode-inner"
            style={{
              backgroundColor: bordercolor,
              border: `2px solid ${bordercolor}`,
            }}
          >
            <button
              className="bttnMode-night-day"
              onClick={() => setDarkMode(!darkMode)}
            >
              <BsSun />
            </button>
            <button
              className="bttnMode-night-day bttnMode-night-day-bttn2"
              onClick={() => setDarkMode(!darkMode)}
            >
              <BsMoonFill />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ToggleMenu;
