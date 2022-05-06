import React, { useState } from 'react'
// Styles
import './BodyUserStyle.css'

// Components
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Typography,
  Button,
  ThemeProvider
} from '@mui/material'
// Components Date
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// Components
import CardUser from './CardUser'

import imgAbout from '../../../img/about-img-1.jpg'

import theme from '../../../theme'


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
  const [checkin, setCheckin] = useState(null)
  const [checkout, setCheckout] = useState(null)

  return (
    <>
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

        {/* Bar search */}
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
              width: '80vw',
              padding: '20px',
              boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.75)',
              borderRadius: '10px'
            }}
          >
            <Grid container>
              <Grid item xs={2} sx={{ marginLeft: '10px' }}>
                <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
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

              <Grid item xs={2}>
                <FormControl sx={{ m: 1, minWidth: 140 }} size="small" >
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
                <Grid item xs={3} sx={{ margin: '0 30px 0 20px ' }}>
                  <DatePicker
                    id="chekin"
                    name="chekin"
                    label="Check-in"
                    value={checkin}
                    minDate={new Date()}
                    // shouldDisableDate={(date) => date.getTime() === new Date('2022-05-03T00:00').getTime()}
                    onChange={(newValue) => {
                      setCheckin(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        // fullWidth
                        {...params}
                      // {...register("birthday")}
                      // error={!!errors.birthday}
                      // helperText={errors.birthday ? errors.birthday.message : ""}
                      />
                    )}
                  />
                </Grid>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item xs={3} >
                  <DatePicker
                    id="chekout"
                    name="chekout"
                    label="Check-out"
                    value={checkout}
                    minDate={checkin !== null ? checkin : ''}
                    onChange={(newValue) => {
                      setCheckout(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        // fullWidth
                        {...params}
                      // {...register("birthday")}
                      // error={!!errors.birthday}
                      // helperText={errors.birthday ? errors.birthday.message : ""}
                      />
                    )}
                  />
                </Grid>
              </LocalizationProvider>
              <Grid item xs={1} sx={{ marginLeft: '10px', padding: '2px 0 0 20px' }} >
                <Box sx={{
                  backgroundColor: '#673ab7',
                  width: '48px',
                  borderRadius: '10px'

                }}>

                  <IconButton onClick={(e) => { console.log("search") }}>
                    <SearchOutlinedIcon fontSize="large" sx={{ color: '#fff' }} />
                  </IconButton>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>

        {/* Rooms */}
        <Box component='section'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box component='div'
            sx={{
              width: '80vw',
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={4} sx={{ marginTop: '20px' }}>
                <CardUser img={room.room1} />
              </Grid>
              <Grid item xs={4} sx={{ marginTop: '20px' }}>
                <CardUser img={room.room2} />
              </Grid>
              <Grid item xs={4} sx={{ marginTop: '20px' }}>
                <CardUser img={room.room3} />
              </Grid>
              <ThemeProvider theme={theme}>

                <Grid item xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px'
                  }}
                >
                  <Button variant="contained" color='primary'>See more Rooms</Button>
                </Grid>
              </ThemeProvider>
            </Grid>

          </Box>
        </Box>

        {/* About Us */}
        <Box component='section'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // flexDirection: 'column',
            // height: '200px',
            marginTop: '100px',
          }}
        >
          <Box component='div'
            sx={{
              width: '80vw',
              // border: '1px black solid'
              // marginTop: '10px',
              // display: 'flex',
            }}
          >
            <Typography variant="h4" component="div">About us</Typography>
            <Box component="div"
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  paddingRight: '30px',
                  width: '40%',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ullam, dolorum delectus architecto qui, vero nam nisi, est culpa vel temporibus esse alias voluptatem non officiis quos cupiditate ut minus.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eaque odit voluptatem praesentium qui. Sequi eligendi repudiandae accusamus ipsa! Aliquam deserunt commodi perspiciatis necessitatibus aperiam modi laudantium blanditiis optio repellat.
              </Typography>
              <img src={imgAbout} alt="about us" />
            </Box>
          </Box>
        </Box>

      </main>

      <Box component='footer'
        sx={{
          height: "80px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box component='div'
          sx={{
            width: '80vw',
            // border: '1px black solid'
            // marginTop: '10px',
            // display: 'flex',
          }}
        >
          <Typography variant="h4" component="div">
            Footer
          </Typography>
        </Box>

      </Box>
    </>

  )
}

export default BodyUser