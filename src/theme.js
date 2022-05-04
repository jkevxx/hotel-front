import { createTheme } from '@mui/material/styles';
import { deepPurple, orange, lightGreen } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      light: deepPurple[100],
      contrastText: '#fff',
    },
    secondary: {
      main: orange[500],
    },
    success: {
      main: lightGreen[500],
    },
    grey: {
      main: deepPurple[500]
    },
    dark: {
      main: '#000'
    }
  }
});


export default theme
