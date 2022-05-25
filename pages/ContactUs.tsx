import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ContactForm } from './components/ContactForm';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import ResponsiveAppBar from './components/AppBar'; 
import styles from '../styles/Home.module.css'

function Header(){
    return(
        <Head>
        <title>Silent Sins</title>
        <meta name="description" content="Website for Silent Sins clothing" />
        <link rel="icon" href="/redRose.ico" />
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

const ContactUs = () => {

    return(
    <ThemeProvider theme={theme}>
            <Header/>
        <CssBaseline />
    <AppBar>
        <ResponsiveAppBar></ResponsiveAppBar>
    </AppBar>
      
    <Container component="main" maxWidth="sm" sx={{ mb: 4 , my: 8}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 16 }, p: { xs: 2, md: 3 }, pt: 3 }}>

            <ContactForm/>


        </Paper>

        <footer className={styles.footer2}>
            <Copyright />
      </footer>
    </Container>
    
    </ThemeProvider>
    );
};
export default ContactUs;