import './Wallets.css';
import React from 'react';
import MetaMask from '../assets/images/metamask.png';
import BitKeep from '../assets/images/bitkeep.svg';
import UnstoppableLight from '../assets/images/ud-light.png';
import UnstoppableDark from '../assets/images/ud-dark.png';
import WalletConnect from '../assets/images/walletconnect-logo.svg';
import { RxCross2 } from 'react-icons/rx';
function Wallets({ walletScreen, setWalletScreen, darkMode }) {
  return (
    <section
      className="wallets"
      style={{
        color: darkMode ? 'white' : 'black',
        visibility: walletScreen ? 'visible' : 'hidden',
      }}
    >
      <section
        className="wallets-inner"
        style={{
          backgroundColor: darkMode ? '#121212' : 'white',
        }}
      >
        <RxCross2
          onClick={() => setWalletScreen(!walletScreen)}
          className="cross"
          style={{ color: darkMode ? 'white' : 'black' }}
        />
        <h2 style={{ textAlign: 'center' }}>Connect Wallet</h2>
        <section className="wallet-div">
          <section
            className="wallet-card"
            style={{ backgroundColor: darkMode ? '#1a1a1a' : '#ededed' }}
          >
            <img src={MetaMask} alt="MetaMask" />
            <p className="wallet-card-heading">
              <b>MetaMask</b>
            </p>
            <p className="wallet-card-subheading">Extension</p>
          </section>
          <section
            className="wallet-card"
            style={{ backgroundColor: darkMode ? '#1a1a1a' : '#ededed' }}
          >
            <img src={BitKeep} alt="BitKeep" />
            <p className="wallet-card-heading">
              <b>BitKeep</b>
            </p>
            <p className="wallet-card-subheading">Extension</p>
          </section>
          <section
            className="wallet-card"
            style={{ backgroundColor: darkMode ? '#1a1a1a' : '#ededed' }}
          >
            <img
              src={darkMode ? UnstoppableLight : UnstoppableDark}
              alt="Unstoppable"
            />
            <p className="wallet-card-heading2">
              <b>UnstoppableDomains</b>
            </p>
            <p className="wallet-card-subheading">Extension</p>
          </section>
          <section
            className="wallet-card"
            style={{ backgroundColor: darkMode ? '#1a1a1a' : '#ededed' }}
          >
            <img src={WalletConnect} alt="WalletConnect" />
            <p className="wallet-card-heading">
              <b>WalletConnect</b>
            </p>
            <p className="wallet-card-subheading">Extension</p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Wallets;
