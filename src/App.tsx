import { useState, useEffect } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import GridItem from './GridItem';
import ArtistHome from './artist/ArtistHome'; // Adjust the path as necessary

import './styles/GridStyles.css';
import danc3Logo from './assets/danc3-logo.png';
import tribesLogo from './assets/musictribes-tight.png';
import { Song } from './artist/types';
import tapeImage from './assets/casette-tight.png';
import FuturetapeEmbed from './FuturetapeEmbed';

const appStyle = {
  backgroundColor: '#000000',
  color: '#ffffff',
  minHeight: '100vh', 
};

function GridAndRoutes() {
  const [items, setItems] = useState<Song[]>([]);
  const location = useLocation();
  const showGrid = location.pathname === "/";
  
  useEffect(() => {
    fetch('/songs.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.json();
      }
    })
      .then((data: Song[]) => setItems(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <>
      <p style={{ color: appTheme.palette.primary.main}}>
        Meet the artists behind the songs. Click on an artist to learn more.
      </p>
      <div className="fixed-grid-container">
        {items.map(item => (
          <Link to={`/artist/${item.artist}`} key={item.artist}>
            <div className="fixed-grid-item">
              <img src={item.avatar} alt={item.artist} width="60" height="60" style={{ borderRadius: "50%" }} />
            </div>
          </Link>
        ))}
      </div>
      <CSSTransition in={showGrid} timeout={300} classNames="fade" unmountOnExit>
        <div className="grid-container">
          {items.map(item => (
            <Link to={`/artist/${item.artist}`} key={item.artist}>
              <GridItem
                key={item.order} // Make sure each item has a unique identifier
                artist={item.artist}
                avatar={item.avatar}
                title={item.title}
                cover={item.cover}
                date={item.date}
                top_minter={item.top_minter}
                description={''}
                order={''} 
                comment={item.comment}              />
            </Link>
          ))}
        </div>
      </CSSTransition>
      <Routes>
        
        <Route path="/artist/:artist" element={<ArtistHome />} />
      </Routes>
    </>
  ); 
}

function Countdown() {
  const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-4-8');
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 style={{fontSize: '40px'}}>
      {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
    </h1>
  );
}


function App() {

  return (
    <Router>
    <div style={appStyle}>

    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
    <>
      <div className="image-container">
        <img src={danc3Logo} alt="Danc3" onClick={() => window.location.href = '/'}/>
        <div className='logo-casette'>
          <img src={tapeImage} alt="Danc3" style={{ width: '40px', height: '26px', margin: '0 20px'  }} onClick={() => window.location.href = '/'}/>
          <h1>x</h1>
        </div>
        <img src={tribesLogo} alt="MT" onClick={() => window.location.href = '/'}/>
      </div>
        <FuturetapeEmbed />
      <Countdown />
      <div className="button-container">
        <button className="button" style={{ width: '33%', backgroundColor: '#333'  }}>
          get FREE edition<br />
          (boooring)
        </button>
        <button className="button" style={{ width: '33%', backgroundColor: appTheme.palette.primary.main }}>
          get SUPERFAN edition<br />
          (I ❤️ you)
        </button>
        <button className="button" style={{ width: '33%' , backgroundColor: '#333' }}>
          see on sound.xyz
        </button>
      </div>
      <GridAndRoutes />
    </>
   </ThemeProvider>
   </div>
    </Router>
  )
}

export default App
