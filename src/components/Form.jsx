import './Form.css';
import {
  BiLogoMediumSquare,
  BiLogoDiscord,
  BiLogoTelegram,
} from 'react-icons/bi';
import { SiTiktok } from 'react-icons/si';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import React, { useState } from 'react';

function Form({ darkMode }) {
  const [click, setClick] = useState(false);
  const inputClicked = () => {
    setClick(true);
  };
  return (
    <section style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
      <section
        className="form"
        style={{
          backgroundImage: darkMode
            ? `
        linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.73)
    ), url(https://derace.com/assets/images/DeRace-Racing-Metaverse-World-Map.png)
      `
            : ' url(https://derace.com/assets/images/DeRace-Racing-Metaverse-World-Map.png)',
        }}
      >
        <h1 className="headingForm">Join DeRace Community</h1>
        <form className="form-input">
          <input
            placeholder="Enter your email address"
            style={{
              border: `3px solid ${click ? '#fd115c' : 'rgba(0,0,0,0)'} `,
            }}
            className="formInputField"
            type="email"
            onClick={inputClicked}
            onBlur={() => setClick(false)}
          />
          <button className="formButton">
            <HiOutlineArrowLongRight style={{ fontSize: '25px' }} />
          </button>
        </form>
        <div className="socialMediaLogos">
          <BiLogoTelegram />
          <BsTwitter />
          <BiLogoMediumSquare />
          <BiLogoDiscord />
          <BsInstagram />
          <SiTiktok />
        </div>
      </section>
    </section>
  );
}

export default Form;
