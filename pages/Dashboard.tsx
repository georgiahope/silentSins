import * as React from 'react'
import Box from '@mui/material/Box'
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { fontFamily, fontSize } from '@mui/system'


const FrontVideo = () => {

    return(
        <Box
        sx={{
          width: 'window',
          height: 'window',
          mt: 8,
          px: 0,
          pr:0,
          mr:0,
          backgroundColor: 'black',
          alignSelf: 'stretch',
        }}>
        <Button 
        sx={{color: '#ffff',
            outlineColor:"#9f3133",
            fontFamily:'monotone',
            fontSize:25,
            letterSpacing:3,
            ml: 70,
            }}
            href="../Products"> 
            Click to Enter </Button>
        <a href='../Products'>
         <ReactPlayer url="/videos/thunderstorm.mp4" 
         playing={true} 
         loop={true}
         muted={true}
         width="100"
         height= "100"
         href="../Products"> 
         
         </ReactPlayer> 
         </a>
        </Box>

    

 );
}

export default FrontVideo;