import './CardsRow.css';
import './NavBar.css';
import React from 'react';
import horseCR from '../assets/images/DeRace-Metaverse-NFT-Racing-Horse.png';
import tokenCR from '../assets/images/DeRace-NFT-token-DERC.png';
import racesCR from '../assets/images/DeRace-Metaverse-Hippodromes-Races.png';
import useScreenSize from '../utils/Hooks/useScreenSize';

function CardsRow({ darkMode }) {
  const cardRowData = [
    {
      image: horseCR,
      heading: 'Own a racehorse',
      para: 'Have a one-of-a-kind NFT racehorse in your stables which you can race, breed, rent or trade with other players!',
      button: 'Explore NFT horses',
    },
    {
      image: tokenCR,
      heading: 'Hold $DERC',
      para: 'All in-game transactions are made exclusively in $DERC, so make sure to have enough $DERC tokens to enjoy the DeRace metaverse.',
      button: 'Acquire $DERC',
    },
    {
      image: racesCR,
      heading: 'Race',
      para: 'Compete in the hippodromes to prove that your NFT horse is the ultimate champion of the DeRace metaverse.',
      button: 'Join the races',
    },
  ];
  const screenSize = useScreenSize();
  const renderedData = cardRowData.map((cards, index) => {
    return (
      <section
        key={index}
        style={{
          backgroundColor: darkMode ? 'black' : 'white',
          color: darkMode ? 'white' : 'black',
        }}
        className="CARD_CLASS"
      >
        <section className="card-row">
          {/* condition checking for medium and large screen */}
          {screenSize.width > 1024 ? (
            <>
              {index === 1 ? (
                <>
                  <section className="card-body">
                    <h1>{cards.heading}</h1>
                    <p className="paragraph">{cards.para}</p>
                    <button className="bttn card-button">{cards.button}</button>
                  </section>
                  <img
                    src={cards.image}
                    alt="horseImage"
                    className="card-image"
                  />
                </>
              ) : (
                <>
                  <img
                    src={cards.image}
                    alt="horseImage"
                    className="card-image"
                  />
                  <section className="card-body">
                    <h1>{cards.heading}</h1>
                    <p className="paragraph">{cards.para}</p>
                    <button className="bttn card-button">{cards.button}</button>
                  </section>
                </>
              )}
            </>
          ) : (
            <>
              <img src={cards.image} alt="horseImage" className="card-image" />
              <section className="card-body">
                <h1>{cards.heading}</h1>
                <p className="paragraph">{cards.para}</p>
                <button className="bttn card-button">{cards.button}</button>
              </section>
            </>
          )}
        </section>
      </section>
    );
  });
  return <section className="medium-screen-onlyclass">{renderedData}</section>;
}

export default CardsRow;
