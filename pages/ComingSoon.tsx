import * as React from 'react';
import Head from 'next/head';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';

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



export default function Coming() {
    return (
      
        <img height={'100%'}
        width={'100%'} 
        src="/ComingSoon.jpg"/>
        
    );
  }