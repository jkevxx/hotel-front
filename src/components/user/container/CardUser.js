import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'


function CardUser(props) {
  console.log(props.imgURL)
  return (
    <Box component='div'
      sx={{
        width: '70vw',
        marginTop: '100px'
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.imgURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>

  )
}

export default CardUser