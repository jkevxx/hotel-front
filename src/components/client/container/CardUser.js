import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'
// import {  } from '@mui/material'
import theme from '../../../theme'

import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';
import BathtubIcon from '@mui/icons-material/Bathtub';

function CardUser({ img }) {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Junior
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Box component='div'
              sx={{
                display: 'flex',
                // justifyContent: 'space-between'
                marginTop: '5px'
              }}
            >
              {/* <Box component='div'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
              </Box> */}
              <SignalWifi2BarIcon fontSize="small" sx={{ color: '#767A83', margin: '-1px 4px 0 0' }} />
              <Typography>Wifi</Typography>

              <BathtubIcon fontSize="small" sx={{ color: '#767A83', margin: '-1px 4px 0 6px' }} />
              <Typography>2</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to='/room'>Learn More</Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>


  )
}

export default CardUser