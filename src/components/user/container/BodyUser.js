import React from 'react'
import './BodyUserStyle.css'
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import CardUser from './CardUser'


const images = {
  room1: 'https://www.hotellastrojes.com.mx/images/galerias/habitacion-sencilla-1533165647.jpg',
  room2: 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg'
}

const newWord = {
  first: 'hi world'
}

function BodyUser() {

  console.log(images.room1)
  return (
    <main className='container'>
      <section className='container__img'>
        <div className="content">
          <div className="content__option">
            <h2 className="content__option-title">
              Enjoy your Dream Vacation
            </h2>
            <p className='content__option-subtitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae pariatur nostrum doloribus itaque sint inventore voluptatibus
            </p>
          </div>
        </div>
      </section>

      <Box component='section'
        sx={{
          // width: '90vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '200px',
          // textAlign: 'center'
        }}
      >
        <Box component='div'
          sx={{
            width: '70vw',
            padding: '20px',
            // border: '1px solid',
            boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.75)'
          }}
        >
          <Grid container>
            <Grid item xs={3}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Type</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={age}
                  label="Age"
                // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Junior'}>Junior</MenuItem>
                  <MenuItem value={'Jumbo'}>Jumbo</MenuItem>
                  <MenuItem value={'Imperial'}>Imperial</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                <InputLabel id="demo-select-small">People</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={age}
                  label="Age"
                // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small" >
                {/* <InputLabel id="demo-select-small">Type</InputLabel> */}
                <TextField
                  label="Size"
                  id="outlined-size-small"
                  size="small" />
              </FormControl>
            </Grid>

          </Grid>
        </Box>


      </Box>
      <Box component='section'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // flexDirection: 'column',
          height: '200px',
        }}
      >
        <CardUser imgUrl={newWord.first} />
        {/* <CardUser imgUrl='https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg' /> */}
      </Box>
    </main>
  )
}

export default BodyUser