import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useFormik } from "formik";
import validationPrereservation from "./validations/validationPrereservation";

// Components
import {
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Grid,
  TextField,
  Button,
  CircularProgress
} from '@mui/material'

import CreditCard from "../../components/client/creditCard/CreditCard";


// Components Date
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


function Rooms() {
  const { TypeRoomId } = useParams();
  const [typeRoom, setTypeRoom] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

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
      PaymentMethodId: 1
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
    <Container>
      <Typography variant="h3">{typeRoom.name}</Typography>

      <ImageList sx={{ width: 900, height: 650 }} cols={3} rowHeight={204}>
        {photo.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.name}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.name}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
            <Grid item xs={4} >
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
            <Grid item xs={4} >
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


          <Grid item xs={4}>
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
          <Grid item xs={6}>
            <Button color="primary" variant="contained" fullWidth type="submit" >
              {loading ? <CircularProgress color="inherit" size={24} /> : 'Confirm'}
            </Button>
          </Grid>
        </Grid>
      </form>

      <CreditCard />

    </Container>
  )
}

export default Rooms