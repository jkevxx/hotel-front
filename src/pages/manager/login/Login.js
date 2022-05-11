import React, { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography
} from '@mui/material'

import { useFormik } from 'formik';
import validationLogin from "./validationLogin";
import { useNavigate } from 'react-router-dom';

import theme from '../../../theme'


function Login() {
  const [loading, setLoading] = useState(false);
  const [validateLogin, setValidateLogin] = useState(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validationLogin,
    onSubmit: async (values) => {
      // console.log(values)
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/v1/login', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        if (data.msg) {
          // console.log(data.msg)
          setValidateLogin(true)
        } else {
          navigate('/dashboard')
        }
        // console.log(data)
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    },
  });


  return (
    <Box component='div' sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      // minWidth: "100vw",
    }}>
      <ThemeProvider theme={theme}>

        <form onSubmit={formik.handleSubmit} >
          <Grid container spacing={2}
            sx={{
              flexDirection: "column",
              width: '30vw',
              border: '1px solid #d2d2d2',
              padding: '20px 35px 20px 20px',
              boxShadow: '15px 13px 13px -18px rgba(0,0,0,0.75)',
              borderRadius: '10px'
            }}
          >
            <Grid item xs={12}>
              <Typography gutterBottom variant='h5' >
                Control Panel
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="username"
                name="username"
                label="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            {validateLogin ?
              <Grid item xs={12}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="warning">Username or password invalid</Alert>
                </Stack>
              </Grid>
              :
              <></>}
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit" >
                {loading ? <CircularProgress color="inherit" size={24} /> : 'Login'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>

    </Box>
  )
}

export default Login