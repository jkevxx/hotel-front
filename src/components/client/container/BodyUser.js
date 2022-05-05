import React, { useState } from 'react'
import './BodyUserStyle.css'
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import CardUser from './CardUser'

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const images = {
  room1: 'https://www.hotellastrojes.com.mx/images/galerias/habitacion-sencilla-1533165647.jpg',
  room2: 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg',
  room3: 'https://www.ggrasia.com/wp-content/uploads/2015/05/JW-Marriot-hotel-room-Galaxy-Macau-Phase-2-e1432637852679.jpg'
}

const typeRooms = [
  { id: 1, name: 'Basic', },
  { id: 2, name: 'Junior' },
  { id: 3, name: 'Suit' }
]

function BodyUser() {

  const [room, setRom] = useState(images)
  const [typeRoom, setTypeRoom] = useState(typeRooms)
  const [value, setValue] = useState(null);

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
                  defaultValue=""
                // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {typeRoom.map((type, index) => (
                    <MenuItem value={type.name} key={index}>{type.name}</MenuItem>
                  ))}
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
                  defaultValue=""
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

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid item xs={4}>
                <DatePicker
                  id="birthday"
                  name="birthday"
                  label="Birthday"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      {...params}
                    // {...register("birthday")}
                    // error={!!errors.birthday}
                    // helperText={errors.birthday ? errors.birthday.message : ""}
                    />
                  )}
                />
              </Grid>
            </LocalizationProvider>

            {/* <Grid item xs={2}>
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small" >
                <TextField
                  label="Size"
                  id="outlined-size-small"
                  size="small" />
              </FormControl>
            </Grid> */}

          </Grid>
        </Box>


      </Box>
      <Box component='section'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // flexDirection: 'column',
          // height: '200px',
        }}
      >
        <Box component='div'
          sx={{
            width: '70vw',
            marginTop: '50px',
            // display: 'flex',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <CardUser img={room.room1} />
            </Grid>
            <Grid item xs={4}>
              <CardUser img={room.room2} />
            </Grid>
            <Grid item xs={4}>
              <CardUser img={room.room3} />
            </Grid>

          </Grid>

        </Box>
      </Box>
    </main>
  )
}

export default BodyUser