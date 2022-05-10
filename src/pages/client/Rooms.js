import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useFormik } from "formik";
import validationPrereservation from "./validations/validationPrereservation";

// Components
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Box,
  Divider
} from '@mui/material'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PoolIcon from '@mui/icons-material/Pool';
import SignalWifi3BarIcon from '@mui/icons-material/SignalWifi3Bar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import LocalBarIcon from '@mui/icons-material/LocalBar';


// Components Date
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ModalConfirmation from '../../components/client/modal/ModalConfirmation';


function Rooms() {
  const { TypeRoomId } = useParams();
  const [typeRoom, setTypeRoom] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTypeRooms = async () => {
    const res = await fetch("http://localhost:5000/api/v1/typeRoom/" + TypeRoomId);
    const data = await res.json();
    // console.log(data);
    setTypeRoom(data);
    setPhoto(data.Photo)
  }

  useEffect(() => {
    getTypeRooms();
  }, [])




  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      cellphone: '',
      email: '',
      dateReservation: new Date(),
      checkin: '',
      checkout: '',
      numRooms: 1,
      totalPayment: 0,
      PaymentMethodId: 1,
      cardNumber: '',
      nameOnCard: '',
      expDate: '',
      cvc: ''
    },
    validationSchema: validationPrereservation,
    onSubmit: async (values) => {
      // console.log(values)
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/v1/prereservation", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        // console.log(data)
        handleOpen()
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const diffDays = (date, otherDate) => {
    if (date === '' || otherDate === '') return 0;
    const cant = Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))
    const total = typeRoom.price * cant
    return total;
  }

  const total = diffDays(formik.values.checkin, formik.values.checkout)
  if (total !== 0) formik.values.totalPayment = total;


  return (
    <>
      <Container>

        <Box component='div' sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '40px 0 30px 0'
        }}>
          <Typography variant="h4">{typeRoom.name}</Typography>
          <Typography variant="h5">MXN ${typeRoom.price}</Typography>

        </Box>

        <Divider sx={{ marginBottom: '30px' }} />


        <Carousel width={'50%'} dynamicHeight={true} centerSlidePercentage={true}>
          {photo.map((item, index) => (
            <div key={index}>
              <img src={`${item.name}`} alt={item.id} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          ))}
        </Carousel>

        <Divider sx={{ marginBottom: '20px' }} />

        <Grid container>
          <Grid item xs={12} sx={{
            margin: '20px 0'
          }}>
            <Typography variant="h6">Description</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in inventore perferendis vero quia excepturi delectus iusto rem dolorum reiciendis tempore, omnis expedita error modi voluptate eum ratione aut obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab modi itaque omnis ratione facere odit beatae vel! Quibusdam, nisi cupiditate magnam asperiores odio ipsum saepe vitae voluptatibus quia debitis.
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{
            margin: '40px 0 20px 0'
          }}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Services</Typography>
          </Grid>

          <Grid item xs={12} >
            <Box component='div' sx={{ margin: '20px 0 20px 0', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Typography variant="caption" component="div" >
                <DirectionsCarIcon sx={{ width: '100%', margin: '0 auto' }} />
                <p>Free Parking</p>
              </Typography>
              <Typography variant="caption" component="div" >
                <PoolIcon sx={{ width: '100%', margin: '0 auto' }} />
                <p>Pool</p>
              </Typography>
              <Typography variant="caption" component="div" >
                <SignalWifi3BarIcon sx={{ width: '100%', margin: '0 auto' }} />
                <p>Free WiFi</p>
              </Typography>
              <Typography variant="caption" component="div" >
                <FitnessCenterIcon sx={{ width: '100%', margin: '0 auto' }} />
                <p>Free WiFi</p>
              </Typography>
              <Typography variant="caption" component="div" >
                <SpaIcon sx={{ width: '100%', margin: '0 auto' }} />
                <p>Spa</p>
              </Typography>
              <Typography variant="caption" component="div" >
                <LocalBarIcon sx={{ width: '100%', margin: '0 auto' }} />
                <p>Bar</p>
              </Typography>
            </Box>
          </Grid>



        </Grid>

        <Divider sx={{ margin: '70px 0 70px 0' }} />


        <form onSubmit={formik.handleSubmit}>
          <Box component='div'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >

            <Grid container spacing={2}
              sx={{
                width: '500px',
                border: '1px solid #d2d2d2',
                padding: '20px 35px 20px 20px',
                boxShadow: '15px 13px 13px -18px rgba(0,0,0,0.75)',
                borderRadius: '10px'
              }}
            >
              <Grid item xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <Typography variant="body1">Reservation</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  id="name"
                  name="name"
                  label="name"
                  type="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  id="lastName"
                  name="lastName"
                  label="lastName"
                  type="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  id="cellphone"
                  name="cellphone"
                  label="cellphone"
                  type="cellphone"
                  value={formik.values.cellphone}
                  onChange={formik.handleChange}
                  error={formik.touched.cellphone && Boolean(formik.errors.cellphone)}
                  helperText={formik.touched.cellphone && formik.errors.cellphone}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item xs={6} >
                  <DatePicker
                    id="checkin"
                    name="checkin"
                    label="Check-in"
                    value={formik.values.checkin}
                    minDate={new Date()}
                    onChange={(newValue) => {
                      formik.setFieldValue("checkin", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        size="small"
                        {...params}
                        error={formik.touched.checkin && Boolean(formik.errors.checkin)}
                        helperText={formik.touched.checkin && formik.errors.checkin}
                      />
                    )}
                  />
                </Grid>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item xs={6} >
                  <DatePicker
                    id="checkout"
                    name="checkout"
                    label="Check-out"
                    value={formik.values.checkout}
                    minDate={formik.values.checkin !== '' ? formik.values.checkin : ''}
                    onChange={(newValue) => {
                      formik.setFieldValue("checkout", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        size="small"
                        {...params}
                        error={formik.touched.checkout && Boolean(formik.errors.checkout)}
                        helperText={formik.touched.checkout && formik.errors.checkout}
                      />
                    )}
                  />
                </Grid>
              </LocalizationProvider>


              <Grid item xs={12}>
                <TextField
                  fullWidth
                  disabled
                  size="small"
                  id="totalPayment"
                  name="totalPayment"
                  label="Total Payment"
                  value={formik.values.totalPayment}
                  onChange={formik.handleChange}
                  error={formik.touched.totalPayment && Boolean(formik.errors.totalPayment)}
                  helperText={formik.touched.totalPayment && formik.errors.totalPayment}
                />
              </Grid>

              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <Typography variant="body1">Credit Card Details</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="cardNumber"
                  name="cardNumber"
                  label="Card Number"
                  type='number'
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                  helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="nameOnCard"
                  name="nameOnCard"
                  label="Name"
                  value={formik.values.nameOnCard}
                  onChange={formik.handleChange}
                  error={formik.touched.nameOnCard && Boolean(formik.errors.nameOnCard)}
                  helperText={formik.touched.nameOnCard && formik.errors.nameOnCard}
                />
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item xs={6}>

                  <DatePicker
                    views={['year', 'month']}
                    id="expDate"
                    name="expDate"
                    label="Year and Month"
                    value={formik.values.expDate}
                    onChange={(newValue) => {
                      formik.setFieldValue("expDate", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        size="small"
                        {...params}
                        error={formik.touched.expDate && Boolean(formik.errors.expDate)}
                        helperText={formik.touched.expDate && formik.errors.expDate}
                      />
                    )}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  id="cvc"
                  name="cvc"
                  label="CVC"
                  value={formik.values.cvc}
                  onChange={formik.handleChange}
                  error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                  helperText={formik.touched.cvc && formik.errors.cvc}
                />
              </Grid>

              <Grid item xs={6}>
                <Button color="primary" variant="contained" fullWidth type="submit" >
                  {loading ? <CircularProgress color="inherit" size={24} /> : 'Confirm'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>

      </Container>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <ModalConfirmation
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>

  )
}

export default Rooms