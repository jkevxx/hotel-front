import React from 'react'
import { ThemeProvider, AppBar, Button, Toolbar, Typography } from '@mui/material'
// import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import theme from '../../../theme'


// const Options = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   marginLeft: theme.spacing(4),
//   width: "400px",
//   color: "#121",
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-around',

// }))

function NavBarUser() {

  return (
    <>
      <AppBar sx={{ backgroundColor: "#fff" }} position="static">
        <Toolbar>
          <Box component="div"
            sx={{
              width: "250px",
              flexGrow: 1,
            }}
          >
            <Typography sx={{ color: "#000", fontSize: "20px" }}>
              Hotel La Posada Real
            </Typography>
          </Box>
          <ThemeProvider theme={theme}>
            <Box component="div"
              sx={{
                // backgroundColor: "#123"
                // width: "100vw",
                display: "flex",
                justifyContent: "space-evenly",
                // marginLeft: "80px",
                // position: "relative",
                // right: -1,
                flexGrow: 1,

              }}
            >
              <Button color="dark">
                About us
              </Button>
              <Button color="dark">
                Gallery
              </Button >
              <Button color="dark">
                Contact Us
              </Button >

            </Box>
          </ThemeProvider>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBarUser