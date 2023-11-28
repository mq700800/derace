import './NavBar.css';
import React from 'react';
import logoDark from '../assets/images/DeRace-logo-dark.png';
import logoLight from '../assets/images/DeRace-logo-light.png';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

function NavBar({
  darkMode,
  setDarkMode,
  walletScreen,
  setWalletScreen,
  istoggle,
  setIsToggle,
}) {
  const bordercolor = darkMode ? 'white' : 'black';
  return (
    <>
      <nav className="flex-display">
        <a href="/" className="nav-logo">
          {darkMode ? (
            <img src={logoLight} alt="DeRace logo light" />
          ) : (
            <img src={logoDark} alt="DeRace logo dark" />
          )}
        </a>
        <section className="nav-navigation">
          <section className="nav-links">
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
            </ul>
          </section>
        </section>

        <section className="bttnMode">
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

        <section className="btn-group">
          <button
            className="bttn btn-group-bttn1"
            onClick={() => setWalletScreen(!walletScreen)}
          >
            CONNECT WALLET
          </button>
          <button className="bttn btn-group-bttn2">BUY DERC</button>
        </section>
        <section
          className="toggle-menu-button"
          onClick={() => setIsToggle(!istoggle)}
          style={{ color: darkMode ? 'white' : 'black' }}
        >
          {!istoggle ? <FiMenu /> : <RxCross1 />}
        </section>
      </nav>
    </>
  );
}

export default NavBar;
