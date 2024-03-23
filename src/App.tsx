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

const appStyle = {
  backgroundColor: '#000000', // Replace with your desired background color or image
  color: '#ffffff', // Replace with your text color
  minHeight: '100vh', // Ensure it covers the full height of the viewport
  // Add other styles as needed
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
        console.log(response);
        return response.json();
      }
    })
      .then((data: Song[]) => setItems(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <>
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
                order={''}              />
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
        <img src={danc3Logo} alt="Danc3" />
        <img src={tribesLogo} alt="MT" />
      </div>
      <div style={{padding: "20px"}}>
        <SoundXYZIframe src="https://embed.sound.xyz/v1/release/796a1542-8fe7-437a-88b7-cebdcad91421?referral=0x54c3283577c40eaa637d35106b7c5c6b387c5ab0&referral_source=embed-sound" />
      </div>
      <GridAndRoutes />
    </>
   </ThemeProvider>
   </div>
    </Router>
  )
}

export default App
