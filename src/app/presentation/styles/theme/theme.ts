export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Lato, Montserrat, -apple-system, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '7.2rem'
    },
    lineHeight: {
      xxsmall: '0.8rem',
      xsmall: '1.4rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '8.8rem'
    }
  },
  colors: {
    blue: '#2C97D1',
    black: '#2B2B2B',
    yellow: '#FBFE63',
    white: '#FFFFFF'
  },
  spacings: {
    xxsmall: '0.35rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
