import React, { useState, useEffect } from 'react'
import './App.css'
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import SoundXYZIframe from './SoundXYZIframe';
import GridItem from './GridItem';
import './styles/GridStyles.css';
import danc3Logo from './assets/danc3-logo.png';
import tribesLogo from './assets/musictribes-tight.png';

interface Song {
  artist: string;
  avatar: string;
  title: string;
  cover: string;
  order: string;
  date: string;
  top_minter: string;
}

const appStyle = {
  backgroundColor: '#000000', // Replace with your desired background color or image
  color: '#ffffff', // Replace with your text color
  minHeight: '100vh', // Ensure it covers the full height of the viewport
  // Add other styles as needed
};

function App() {
  const [items, setItems] = useState<Song[]>([]);

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
    <div style={appStyle}>

    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
    <>
      <div className="image-container">
        <img src={danc3Logo} alt="Danc3" />
        <img src={tribesLogo} alt="MT" />
      </div>
      <div style={{padding: "20px"}}>
        <SoundXYZIframe />
      </div>
      <div className="grid-container">
      {items.map(item => (
        <GridItem
          key={item.order} // Make sure each item has a unique identifier
          mainImage={item.cover}
          smallImage1={item.avatar}
          smallImage2={item.top_minter}
          label1={item.title}
          label2={item.artist}
          label3={item.date}
          label4={"Top minter:"}
        />
      ))}
    </div>
    </>
   </ThemeProvider>
   </div>
  )
}

export default App
