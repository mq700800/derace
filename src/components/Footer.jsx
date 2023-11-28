import './Footer.css';
import './NavBar.css';
import React from 'react';
import logoDark from '../assets/images/DeRace-logo-dark.png';
import logoLight from '../assets/images/DeRace-logo-light.png';
import coinMarket from '../assets/images/coinmarket.png';
import coinGeco from '../assets/images/coingecko.png';
import gecoTerminal from '../assets/images/geckoterminal.png';
import { BiLogoTelegram } from 'react-icons/bi';
import { AiOutlineMedium } from 'react-icons/ai';
import { BsTwitter, BsDiscord, BsInstagram, BsTiktok } from 'react-icons/bs';

function Footer({ darkMode }) {
  return (
    <footer
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
      }}
      className="FooterContainer"
    >
      <section className="footer">
        <section className="logoFooterSection">
          <a href="/">
            {darkMode ? (
              <img
                src={logoLight}
                alt="DeRace logo light"
                className="logoFooter"
              />
            ) : (
              <img
                src={logoDark}
                alt="DeRace logo dark"
                className="logoFooter"
              />
            )}
          </a>
          <p className="logoFooterPara">
            NFT horse racing metaverse based on blockchain and powered by $DERC
          </p>

          <img src={coinMarket} alt="coinMarket" className="imagesFooter" />
          <img src={coinGeco} alt="coinGeco" className="imagesFooter mrlf" />
          <img
            src={gecoTerminal}
            alt="gecoTerminal"
            className="imagesFooter mrlf"
          />
        </section>
        <section className="SectionList">
          <p>About us</p>
          <ul
            className={`lists-footer ${
              darkMode ? 'hover-dark' : 'hover-light'
            }`}
          >
            <li>
              <a href="/">White Paper (GitBook)</a>
            </li>
            <li>
              <a href="/">$DERC</a>
            </li>
            <li>
              <a href="/">Meet the Team</a>
            </li>
            <li>
              <a href="/">Ticket Exchange</a>
            </li>
          </ul>
        </section>
        <section className="SectionList">
          <p>Learn More</p>
          <ul
            className={`lists-footer ${
              darkMode ? 'hover-dark' : 'hover-light'
            }`}
          >
            <li>
              <a href="/">Gameplay</a>
            </li>
            <li>
              <a href="/">Stacking</a>
            </li>
            <li>
              <a href="/">How to Play</a>
            </li>
            <li>
              <a href="/">Roadmap</a>
            </li>
            <li>
              <a href="/">Content Creator Form</a>
            </li>
          </ul>
        </section>
        <section className="SectionList">
          <p>Legal</p>
          <ul
            className={`lists-footer ${
              darkMode ? 'hover-dark' : 'hover-light'
            }`}
          >
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms And Conditions</a>
            </li>
            <li>
              <a href="/">Risk Disclaimer</a>
            </li>
            <li>
              <a href="/">Change log</a>
            </li>
          </ul>
        </section>
        <section className="SectionList">
          <p>Social</p>
          <ul
            className={`lists-footer ${
              darkMode ? 'hover-dark' : 'hover-light'
            }`}
          >
            <li>
              <a href="/">
                <BiLogoTelegram /> Telegram
              </a>
            </li>
            <li>
              <a href="/">
                <BiLogoTelegram /> Announcements
              </a>
            </li>
            <li>
              <a href="/">
                <BsTwitter /> Twitter
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineMedium /> Medium
              </a>
            </li>
            <li>
              <a href="/">
                <BsDiscord /> Discord
              </a>
            </li>
            <li>
              <a href="/">
                <BsInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="/">
                <BsTiktok /> TikTok
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
