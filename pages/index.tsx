import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type { ReactElement } from 'react'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from './/components/AppBar.js'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import FrontVideo from './Dashboard'

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

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Silent Sins</title>
        <meta name="description" content="Website for Silent Sins clothing" />
        <link rel="icon" href="/redRose.ico" />
      </Head>

      <main>
        <h1>
        <ResponsiveAppBar></ResponsiveAppBar>
        </h1>

        <FrontVideo/>
      </main>
    
      <footer className={styles.footer2}>
        <Copyright />
      </footer>
    </div>
  )
}

export default Home
