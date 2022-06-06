import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/Head'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from './components/AppBar'

function Header(){
    return(
        <Head>
        <title>Silent Sins</title>
        <meta name="description" content="Website for Silent Sins clothing" />
        <link rel="icon" href="/redRose.ico" />
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Open+Sans:wght@300&family=Permanent+Marker&display=swap');
        </style>
      </Head>
    );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        SilentSins
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ProductAlbum() {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
      <CssBaseline />
        <ResponsiveAppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            mt: 4,
          }}
        >
          <Container>
            <Typography
              variant="h4"
              component="a"
              sx={{
              ml: 45,
              mb: 2,
              p: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monotone',
              textTransform: 'uppercase',
              fontWeight: 900,
              letterSpacing: '.7rem',
              lineheight: '14',
              color: '#9f3133',
            }}
            >
              Shop Products
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://items-images-production.s3.us-west-2.amazonaws.com/files/77ed235e9a52a0e184ff119a3eb03b8d93d2a328/original.jpeg"
                    alt="Red Tie-Dye/White Rose"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      White Rose Hoodie (Red Tie-Dye)
                    </Typography>
                    <Typography>
                      $38.00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button href="https://square.link/u/TV7L97xO?src=embed" >Buy Now</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={styles.footer2}>
            <Copyright />
      </footer>
      {/* End footer */}
    </ThemeProvider>
  );
}