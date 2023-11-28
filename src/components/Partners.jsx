import './Partners.css';
import React from 'react';
import DAO from '../assets/images/DAO-maker.png';
import LD from '../assets/images/LD-capital.png';
import Animoca from '../assets/images/Animoca-Brands.png';
import D from '../assets/images/DWeb3-capital.png';
import Kyros from '../assets/images/kyros-ventures.png';
import ReBlock from '../assets/images/reblock.png';
import Raptor from '../assets/images/raptor-capital.png';
import Mintable from '../assets/images/mintable-app.png';
import Binance from '../assets/images/binance-nft.png';
import Crypto from '../assets/images/crypto-com.png';
import Baby from '../assets/images/baby-doge.png';
import Kucoin from '../assets/images/kucoin.png';
import cryptoNFT from '../assets/images/crypto-com-nft.png';
import polygon from '../assets/images/polygon-blockchain.png';
import BinanceCustody from '../assets/images/binance-custody.png';
import Orion from '../assets/images/orion.png';
import unstopable from '../assets/images/unstoppable-domains.png';

function Partners({ darkMode }) {
  const partnersData = [
    {
      image: DAO,
      alt: 'DAO',
    },
    {
      image: LD,
      alt: 'LD',
    },
    {
      image: Animoca,
      alt: 'Animoca',
    },
    {
      image: D,
      alt: 'D',
    },
    {
      image: Kyros,
      alt: 'Kyros',
    },
    {
      image: ReBlock,
      alt: 'ReBlock',
    },
    {
      image: Raptor,
      alt: 'Raptor',
    },
    {
      image: Mintable,
      alt: 'Mintable',
    },
    {
      image: Binance,
      alt: 'Binance',
    },
    {
      image: Crypto,
      alt: 'Crypto',
    },
    {
      image: Baby,
      alt: 'Baby',
    },
    {
      image: Kucoin,
      alt: 'Kucoin',
    },
    {
      image: cryptoNFT,
      alt: 'cryptoNFT',
    },
    {
      image: polygon,
      alt: 'polygon',
    },
    {
      image: BinanceCustody,
      alt: 'BinanceCustody',
    },
    {
      image: Orion,
      alt: 'Orion',
    },
    {
      image: unstopable,
      alt: 'unstopable',
    },
  ];
  const renderedImages = partnersData.map((data) => {
    return (
      <img src={data.image} alt={`${data.alt}`} className="partnersLogo" />
    );
  });
  return (
    <section
      className="partners"
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
      }}
    >
      <h2 className="headingPartners">Backers partners</h2>
      <section className="images">{renderedImages}</section>
    </section>
  );
}

export default Partners;
