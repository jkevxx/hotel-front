import React from 'react'
import { ThemeProvider, Typography, Button } from '@mui/material'
import theme from '../../theme'

// Components
import NavBarUser from '../../components/user/navBar/NavBarUser'

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Typography color="primary">This is the page home</Typography>
        <Button color="success">Hola Mundo</Button>
        <Typography sx={{ color: "#a21" }} >This is the page home</Typography> */}
      </ThemeProvider>
      <NavBarUser />
    </>
  )
}

export default Home