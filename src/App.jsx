// import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';
// import Three from './components/three';
// import './App.css';

// function App() {
//   return (
//     <Canvas id="three-canvas-container" shadows>
//       <Suspense fallback={null}>
//         <Three />
//       </Suspense>
//     </Canvas>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CardsRow from './components/CardsRow';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './components/three';
import Wallets from './components/Wallets';
import AnimationTop from './components/AnimationTop';
import Form from './components/Form';
import ToggleMenu from './components/ToggleMenu';
import Carousel from './components/Carousel';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [walletScreen, setWalletScreen] = useState(false);
  const [istoggle, setIsToggle] = useState(false);

  return (
    <>
      <header
        className={darkMode ? 'app-darkMode' : 'app-lightMode'}
        style={{ zIndex: '0' }}
      >
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          walletScreen={walletScreen}
          setWalletScreen={setWalletScreen}
          istoggle={istoggle}
          setIsToggle={setIsToggle}
        />
      </header>
      <section>
        <Canvas id="three-canvas-container" shadows>
          <Suspense fallback={null}>
            <Three />
          </Suspense>
        </Canvas>
      </section>
      <section
        className="section-heading"
        style={{
          backgroundColor: darkMode ? 'black' : 'white',
          color: darkMode ? 'white' : 'black',
        }}
      >
        <h1 className="heading">
          <b style={{ color: '#fd115c' }}>DeRace</b> is a complete NFT horse{' '}
          <br /> racing ecosystem based on <br /> blockchain and powered by
          $DERC <br /> token
        </h1>
        <h2 className="heading-mediumAndsmall-screen">
          <b style={{ color: '#fd115c' }}>DeRace</b> is a complete NFT horse{' '}
          racing ecosystem based on blockchain and powered by $DERC token
        </h2>
      </section>
      <CardsRow darkMode={darkMode} />
      <h1
        style={{
          color: darkMode ? 'white' : 'black',
          backgroundColor: darkMode ? 'black' : 'white',
        }}
        className="heading-news"
      >
        News
      </h1>
      <Carousel darkMode={darkMode} />
      <Partners darkMode={darkMode} />
      <Form darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <Wallets
        walletScreen={walletScreen}
        setWalletScreen={setWalletScreen}
        darkMode={darkMode}
      />
      <AnimationTop darkMode={darkMode} />
      {istoggle ? (
        <ToggleMenu darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        ''
      )}
    </>
  );
}

export default App;
