import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type { ReactElement } from 'react'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from './/components/AppBar.js'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

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
    <div className={styles.container}>
      <Head>
        <title>Silent Sins</title>
        <meta name="description" content="Website for Silent Sins clothing" />
        <link rel="icon" href="/redRose.ico" />
      </Head>

      <main>
        <h1>
        <ResponsiveAppBar></ResponsiveAppBar>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer2}>
        <Copyright />
      </footer>
    </div>
  )
}

export default Home
