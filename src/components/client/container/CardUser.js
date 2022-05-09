import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ThemeProvider,
} from '@mui/material'
import { Link } from 'react-router-dom'
// import {  } from '@mui/material'
import theme from '../../../theme'


function CardUser({ img, name, description, price, TypeRoomId }) {
  // console.log(img)
  // const newimg = img.map(item => (item.name))
  // console.log(img[0].name)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 400, maxHeight: 900 }}>
          <CardMedia
            component="img"
            height="140"
            image={img[0].name}
            alt="Hotel"
          />
          <CardContent>
            {/* <Box component='div'
              sx={{
                display: 'flex',
                justifyContent: 'space-around'
              }}>
            </Box> */}
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              MXN ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to={`/rooms/${TypeRoomId}`}>Learn More</Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>


  )
}

export default CardUser