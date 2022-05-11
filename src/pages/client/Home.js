import React from 'react'
import { ThemeProvider } from '@mui/material'
import theme from '../../theme'

// Components
import NavBarUser from '../../components/client/navBar/NavBarUser'
import BodyUser from '../../components/client/container/BodyUser'

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Typography color="primary">This is the page home</Typography>
        <Button color="success">Hola Mundo</Button>
        <Typography sx={{ color: "#a21" }} >This is the page home</Typography> */}
        <NavBarUser />
        <BodyUser />
      </ThemeProvider>
    </>
  )
}

export default Home