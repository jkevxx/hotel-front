import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ThemeProvider
} from '@mui/material'
import { Link } from 'react-router-dom'
// import {  } from '@mui/material'
import theme from '../../../theme'


function CardUser({ img }) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="Hotel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Junior
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
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