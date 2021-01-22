import { createMuiTheme } from '@material-ui/core/styles'

/* For use in material-ui/src/styles/colors.js */
export const primary = {
  50: '#4196CB',
  100: '#4196CB',
  200: '#4196CB',
  300: '#4196CB',
  400: '#4196CB',
  500: '#4196CB',
  600: '#4196CB',
  700: '#4196CB',
  800: '#4196CB',
  900: '#4196CB',
  A100: '#4196CB',
  A200: '#4196CB',
  A400: '#4196CB',
  A700: '#4196CB',
  contrastDefaultColor: 'dark',
}

export const secondary = {
  50: '#EBE2BC  ',
  100: '#EBE2BC',
  200: '#EBE2BC',
  300: '#EBE2BC',
  400: '#EBE2BC',
  500: '#EBE2BC',
  600: '#EBE2BC',
  700: '#EBE2BC',
  800: '#EBE2BC',
  900: '#EBE2BC',
  A100: '#EBE2BC',
  A200: '#EBE2BC',
  A400: '#EBE2BC',
  A700: '#EBE2BC',
  contrastDefaultColor: 'dark',
}

const defaultTheme = createMuiTheme({})

const { breakpoints } = defaultTheme

const theme = createMuiTheme({
  ...defaultTheme,
  typography: {
    fontFamily: 'Poppins',
    letterSpacing: 2
  },
  palette: {
    primary,
    secondary,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Poppins',
          backgroundColor: '#fff',
        },
        h1: {
          fontFamily: 'Poppins',
          fontSize: 48
        },
        h2: {
          fontFamily: 'Poppins',
          fontSize: 31
        },
        h4: {
          fontFamily: 'Poppins',
          fontSize: 3
        },
        p: {
          fontFamily: 'Poppins',
          fontSize: 18,
        },
        textarea: {
          height: 60,
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: 48,
        fontWeight: 900,
        [breakpoints.down('xs')]: {
          fontSize: 26,
        },
      },
      h2: {
        fontSize: 42,
        fontWeight: 900,
        [breakpoints.down('xs')]: {
          fontSize: 24,
        },
      },
      h3: {
        fontSize: 36,
        fontWeight: 900,
        [breakpoints.down('xs')]: {
          fontSize: 22,
        },
      },
      h4: {
        fontSize: 28,
        fontWeight: 900,
        lineHeight: 1.75,
        [breakpoints.down('xs')]: {
          fontSize: 20,
        },
      },
      h5: {
        fontSize: 24,
        fontWeight: 900,
        lineHeight: 1.75,
        [breakpoints.down('xs')]: {
          fontSize: 20,
        },
      },
      subtitle1: {
        fontSize: 22,
        fontWeight: 900,
        letterSpacing: 1.24,
      },
      subtitle2: {
        fontSize: 16,
        fontWeight: 900,
        letterSpacing: 1.1,
      }
    },
    MuiButton: {
      root: {
        borderRadius: 6,
        fontSize: 16,
        fontWeight: 900,
        boxShadow: 'none',
        textAlign: 'center',
        padding: '14px 25px',
        lineHeight: 'initial',
        textTransform: 'uppercase',
        minWidth: 170,
      },
      contained: {
        backgroundColor: '#fff',
        height: 48,
        width: 'fit-content',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#282843',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      containedPrimary: {
        backgroundColor: primary[500],
        height: 48,
        width: 'fit-content',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        color: '#fff',
        '&:hover': {
          backgroundColor: primary[500],
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      containedSecondary: {
        backgroundColor: secondary[500],
        height: 48,
        width: 'fit-content',
        color: '#fff',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        '&:hover': {
          transition: 'all 0.2s ease-in-out',
          backgroundColor: secondary[500],
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      containedSizeSmall: {
        padding: '0px 24px',
        height: 30
      },
      outlined: {
        backgroundColor: 'transparent',
        border: `2px solid #ffffff`,
        height: 48,
        width: 'fit-content',
        color: '#fff',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        '&:hover': {
          transition: 'all 0.2s ease-in-out',
          color: '#fff',
          border: `2px solid #ffffff`,
          backgroundColor: 'transparent',
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      outlinedPrimary: {
        color: primary[500],
        border: `2px solid ${primary[500]}`,
        boxShadow: 'none',
        '&:hover': {
          color: primary[500],
          border: `2px solid ${primary[500]}`,
          boxShadow: 'none'
        },
      },
      outlinedSecondary: {
        color: secondary[500],
        border: `2px solid ${secondary[500]}`,
        '&:hover': {
          color: secondary[500],
          border: `2px solid ${secondary[500]}`,
        },
      }
    },
  },
})

export default theme
