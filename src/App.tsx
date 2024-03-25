import { useState, useEffect } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import SoundXYZIframe from './SoundXYZIframe';
import GridItem from './GridItem';
import ArtistHome from './artist/ArtistHome'; // Adjust the path as necessary

import './styles/GridStyles.css';
import danc3Logo from './assets/danc3-logo.png';
import tribesLogo from './assets/musictribes-tight.png';
import { Song } from './artist/types';
import tapeImage from './assets/casette-tight.png';

const appStyle = {
  backgroundColor: '#000000', // Replace with your desired background color or image
  color: '#ffffff', // Replace with your text color
  minHeight: '100vh', // Ensure it covers the full height of the viewport
  // Add other styles as needed
};

function GridAndRoutes() {
  const [items, setItems] = useState<Song[]>([]);
//  const [selectedIndex, setSelectedIndex] = useState(null);
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
      <div style={{padding: "20px"}}>
        <SoundXYZIframe src="https://embed.sound.xyz/v1/release/3853a5b1-5b5f-4390-82c6-1337924dbbab" />
      </div>
      <GridAndRoutes />
    </>
   </ThemeProvider>
   </div>
    </Router>
  )
}

export default App
