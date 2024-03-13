import React, { useState, useEffect } from 'react'
import './App.css'
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import SoundXYZIframe from './SoundXYZIframe';
import GridItem from './GridItem';
import './styles/GridStyles.css';

interface Song {
  cover: string;
  artist: string;
  title: string;
}

const appStyle = {
  backgroundColor: '#000000', // Replace with your desired background color or image
  color: '#ffffff', // Replace with your text color
  minHeight: '100vh', // Ensure it covers the full height of the viewport
  // Add other styles as needed
};

function App() {
  const [count, setCount] = useState(0)

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
    <div style={{ margin: "1em" }}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
      </div>
      <div>
        <SoundXYZIframe />
      </div>
      <div className="grid-container">
      {items.map((item, index) => (
        <GridItem 
          key={index} 
          imageUrl={item.cover} 
          labelTop={item.artist} 
          labelBottom={item.title} 
        />
      ))}
    </div>
    </>
   </ThemeProvider>
   </div>
  )
}

export default App
