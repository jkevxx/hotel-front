import React, { useState, useEffect } from 'react'
// Styles
import './BodyUserStyle.css';

// Routes
import { Link } from 'react-router-dom';

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
} from '@mui/material';

// Components Date
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// Components
import CardUser from './CardUser'


import imgAbout from '../../../img/about-img-1.jpg'

import theme from '../../../theme'

const initialForm = {
  TypeRoom: '',
  numPeople: '',
}


function BodyUser() {

  const [typeRoom, setTypeRoom] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [form, setForm] = useState(initialForm);


  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })

    console.log(form)
  }

  const getTypeRooms = async () => {
    let res = await fetch("http://localhost:5000/api/v1/typeRoom");
    const data = await res.json();
    // console.log(data)
    setTypeRoom(data);
  }

  const getPhoto = async () => {
    let res = await fetch("http://localhost:5000/api/v1/photo");
    const data = await res.json();
    // console.log(data);
    setPhoto(data)
  }

  useEffect(() => {
    getTypeRooms();
    getPhoto();
  }, [])



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
                    name='TypeRoom'
                    label="Type"
                    defaultValue=""
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {typeRoom.map((type, index) => (
                      <MenuItem value={type.id} key={index}>{type.name}</MenuItem>
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
                    name='numPeople'
                    label="People"
                    defaultValue=""
                    onChange={handleChange}
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
                    id="checkin"
                    name="checkin"
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
                    id="checkout"
                    name="checkout"
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

                  <IconButton component={Link} to={`/rooms/${form.TypeRoom}`}>
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
              {typeRoom.map((item, index) => (
                <Grid item xs={4} sx={{ marginTop: '20px' }} key={index}>
                  <CardUser key={index} img={item.Photo} name={item.name} description={item.description} price={item.price} TypeRoomId={item.id} />
                </Grid>
                // console.log(item.Photo.name)
              ))}
              {/* {photo.map((item, index) => (
                <Grid item xs={4} sx={{ marginTop: '20px' }} key={index}>
                  <CardUser key={index} img={item.name} name={item.TypeRoom.name} description={item.TypeRoom.description} price={item.TypeRoom.price} />
                </Grid>
                // console.log(item.Photo.name)
              ))} */}
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
        <Box component='section' id='about'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '200px',
          }}
        >
          <Box component='div'
            sx={{
              width: '80vw',
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

      <Box component='footer' id='footer'
        sx={{
          height: "380px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '400px',
          bgcolor: '#673ab7',
          color: '#fff'
        }}
      >
        <Box component='div'
          sx={{
            width: '80vw',
            height: '80%',
            // border: '1px black solid'
            // marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'end',
          }}
        >
          <Typography variant="h4" component="div">
            Hotel la Posada Real
          </Typography>
          <Box component='div'>
            <FacebookIcon sx={{ marginRight: '20px' }} />
            <InstagramIcon sx={{ marginRight: '20px' }} />
            <TwitterIcon sx={{ marginRight: '20px' }} />
          </Box>

          <Typography variant='body1' component="div">
            © 2022 posadaReal.com is an Expedia Group company. All rights reserved.
          </Typography>
        </Box>

      </Box>
    </>

  )
}

export default BodyUser