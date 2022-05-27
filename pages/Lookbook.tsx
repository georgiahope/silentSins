import * as React from 'react';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';


const theme = createTheme({
    palette: {
      primary: {
        main: '#9f3133',
      },
      secondary: {
        main: '#ffff',
      },
    },
  });

  function Header(){
    return(
        <Head>
        <title>Silent Sins</title>
        <meta name="description" content="Website for Silent Sins clothing" />
        <link rel="icon" href="/redRose.ico" />
      </Head>
    );
}



const BasicLookbook = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
      <CssBaseline />
      <AppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
      </AppBar>

      <ImageList sx={{mt: 8, py:3, px:4, ml: 4, width: 1300, height: 1170, backgroundColor:'#9f3133' }} cols={3} rowHeight={426.4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </ThemeProvider>
  );
}

export default BasicLookbook;


const itemData = [
    {
      img: '/silentsins_model(1).jpg',
      title: 'Breakfast',
    },
    {
      img: '/silentsins_model(2).jpg',
      title: 'Burger',
    },
    {
      img: '/silentsins_model(3).jpg',
      title: 'Camera',
    },
    {
      img: '/silentsins_model(4).jpg',
      title: 'Coffee',
    },
    {
      img: '/silentsins_model(5).jpg',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
