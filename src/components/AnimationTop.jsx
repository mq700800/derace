import useScreenSize from '../utils/Hooks/useScreenSize';
import './AnimationTop.css';
import './NavBar.css';

function AnimationTop({ darkMode }) {
  const screenSize = useScreenSize();
  console.log(screenSize.width);
  return (
    <section
      className="top-screen"
      style={{
        boxShadow:
          screenSize.width > 1024
            ? `0 0 0 100px ${darkMode ? 'black' : 'white'}`
            : screenSize.width < 480
            ? `0 0 0 20px ${darkMode ? 'black' : 'white'}`
            : `0 0 0 36px ${darkMode ? 'black' : 'white'}`,
        // boxShadow: `0 0 0 36px ${darkMode ? 'black' : 'white'}`,
      }}
    >
      <section
        className="top-screen-mini"
        style={{
          backgroundColor: darkMode ? 'rgba(0,0,0,.2)' : 'rgba(0,0,0,0)',
          padding: darkMode ? '0px 55px' : '0px',
        }}
      >
        <h3 className="top-screen-mini-heading">Introducing</h3>
        <h1 className="top-screen-main-heading">DeRace</h1>
        <button className="bttn-explore">EXPLORE DERACE</button>
        {/* <p>{screenSize.width}</p>
        <p>{screenSize.height}</p> */}
      </section>
    </section>
  );
}

export default AnimationTop;
