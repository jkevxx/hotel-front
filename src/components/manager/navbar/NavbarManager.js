import React from 'react'
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from '@mui/material'

import { NavLink } from 'react-router-dom'

import theme from '../../../theme'

import { admin } from './routesManager'

const drawerWidth = 240;

function NavbarManager() {
  return (
    <>
      <ThemeProvider theme={theme}>

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Hotel la Posada Real
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {admin.map((value, index) => (
                <ListItem button component={NavLink} to={value.route} key={index}>
                  <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText primary={value.nameRoute} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>


      </ThemeProvider>

    </>

  )
}

export default NavbarManager