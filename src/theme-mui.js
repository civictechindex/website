/* eslint-disable sort-keys */
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import deepmerge from '@material-ui/utils/deepmerge';

// Colors - Primary
const DARK_BLUE = '#0F1D2F';
const TEAL = '#004364';
const LIGHT_BLUE = '#0D99C6';
const LIGHT_BLUE_VARIANT = '#5FCAF9';
const YELLOW = '#FFE06D';
const WHITE = '#FEFEFE';
// Colors - Secondary
const DARK_GRAY = '#6D6E74';
const LIGHT_GRAY = '#F2F2F2';
const RED = '#D20E0E';
const PURPLE = '#551A8B';
// Colors - Grey
const GREY100 = '#F4F4F4'; // default = #f5f5f5
const GREY200 = '#E9E9E9'; // default = #eeeeee
const GREY300 = '#D8D8D8'; // default = #e0e0e0
const GREY900 = '#242424'; // default = #212121

const breakpoints = createBreakpoints({});

const defaultButtonSettings = {
  backgroundColor: LIGHT_BLUE,
  color: WHITE,
  '&$disabled': {
    backgroundColor: LIGHT_BLUE,
    color: WHITE,
    opacity: '0.50',
  },
  '&:hover': {
    backgroundColor: LIGHT_BLUE,
    opacity: '0.92',
  },
  '&:focus': {
    backgroundColor: LIGHT_BLUE,
    opacity: '0.76',
  },
  '&:active': {
    backgroundColor: LIGHT_BLUE,
    opacity: '0.68',
  },
};

// themeSettings - modify Material-UI baseline theme
const themeSettings = {
  overrides: {
    MuiAccordion: {
      root: {
        padding: 0,
      },
    },
    MuiAccordionSummary: {
      root: {
        minHeight: 32,
        padding: 0,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 24,
        height: 48,
        [breakpoints.down('sm')]: {
          height: 42,
        },
        ...defaultButtonSettings,
      },
      label: {
        fontWeight: 700,
        marginLeft: 12,
        marginRight: 12,
        minWidth: 128,
        paddingLeft: 12,
        paddingRight: 12,
        textTransform: 'none',
        whiteSpace: 'nowrap',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: WHITE,
        color: WHITE,
        '&$disabled': {
          backgroundColor: 'transparent',
          borderColor: WHITE,
          color: WHITE,
          opacity: '0.50',
        },
        '&:hover': {
          backgroundColor: 'transparent',
          color: WHITE,
          opacity: '0.92',
        },
        '&:focus': {
          backgroundColor: 'transparent',
          color: WHITE,
          opacity: '0.76',
        },
        '&:active': {
          backgroundColor: 'transparent',
          color: WHITE,
          opacity: '0.68',
        },
      },
      textPrimary: {
        ...defaultButtonSettings,
      },
      textSecondary: {
        backgroundColor: WHITE,
        color: DARK_BLUE,
        '&$disabled': {
          backgroundColor: WHITE,
          color: DARK_BLUE,
          opacity: '0.50',
        },
        '&:hover': {
          backgroundColor: WHITE,
          color: DARK_BLUE,
          opacity: '0.92',
        },
        '&:focus': {
          backgroundColor: WHITE,
          color: DARK_BLUE,
          opacity: '0.76',
        },
        '&:active': {
          backgroundColor: WHITE,
          color: DARK_BLUE,
          opacity: '0.68',
        },
      },
    },
    MuiCardContent: {
      root: {
        padding: 0,
        '&:last-child': {
          paddingBottom: 0,
        },
      },
    },
    MuiChip: {
      root: {
        borderRadius: 24,
        cursor: 'pointer',
        height: 48,
        [breakpoints.down('sm')]: {
          height: 42,
        },
        margin: '0 8px 8px 0',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          fontStyle: 'normal',
          fontWeight: 400,
          margin: 0,
        },
      },
    },
    MuiDialogActions: {
      root: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    MuiInputLabel: {
      root: {
        color: DARK_GRAY,
      },
      formControl: {
        color: DARK_GRAY,
      },
    },
    MuiListItem: {
      root: {
        padding: 0,
      },
    },
    MuiPaper: {
      root: {
        padding: 16,
      },
    },
    MuiRadio: {
      root: {
        color: DARK_BLUE,
      },
      colorSecondary: {
        '&$checked': {
          color: DARK_BLUE,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: WHITE,
      },
    },
    MuiTextField: {
      root: {
        width: '100%',
      },
    },
    MuiTypography: {
      root: {
        '& a': {
          fontWeight: 700,
        },
        '& a:active': {
          color: LIGHT_BLUE_VARIANT,
        },
        '& a:link': {
          color: LIGHT_BLUE,
        },
        '& a:hover': {
          color: LIGHT_BLUE_VARIANT,
        },
        '& a:visited': {
          color: PURPLE,
        },
      },
      colorPrimary: {
        color: DARK_BLUE,
      },
      colorSecondary: {
        color: LIGHT_BLUE,
      },
      colorTextPrimary: {
        color: YELLOW,
      },
      colorTextSecondary: {
        color: WHITE,
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiCard: {
      elevation: 0,
    },
    MuiContainer: {
      maxWidth: 'lg',
    },
    MuiInputAdornment: {
      disableTypography: true, // this changes startAdornment text color to primary
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
  palette: {
    primary: {
      main: DARK_BLUE,
    },
    secondary: {
      light: LIGHT_BLUE_VARIANT,
      main: LIGHT_BLUE,
      dark: TEAL,
    },
    error: {
      main: RED,
    },
    warning: {
      main: YELLOW,
    },
    info: {
      main: LIGHT_BLUE,
    },
    grey: {
      100: GREY100,
      200: GREY200,
      300: GREY300,
      900: GREY900,
    },
    text: {
      primary: DARK_BLUE,
      secondary: WHITE,
      disabled: DARK_GRAY,
    },
    background: {
      default: WHITE,
    },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
    fontSize: 16,
    h1: {
      color: DARK_BLUE,
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h2: {
      color: DARK_BLUE,
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      color: DARK_BLUE,
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h4: {
      color: DARK_BLUE,
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h5: {
      color: DARK_BLUE,
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h6: {
      color: DARK_BLUE,
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      // paragraph
      color: DARK_BLUE,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.35,
    },
    body2: {
      color: DARK_GRAY,
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.35,
    },
    button: {
      // unused
      color: DARK_BLUE,
      fontWeight: 400,
    },
    caption: {
      color: DARK_BLUE,
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.35,
    },
    overline: {
      // unused
      color: DARK_BLUE,
      fontWeight: 400,
    },
    subtitle1: {
      // unused
      color: DARK_BLUE,
      fontWeight: 400,
    },
    subtitle2: {
      // unused
      color: DARK_BLUE,
      fontWeight: 400,
    },
  },
};

// customThemeSettings - extend Material-UI theming
const customThemeSettings = {
  button: {
    blue: LIGHT_BLUE_VARIANT,
    borderRadius: 24,
  },
  font: {
    paragraph: {
      fontSize: '1rem',
    },
    small: {
      fontSize: 'clamp(14px, 0.875rem, 0.875rem)',
    },
  },
  palette: {
    background: {
      primary: TEAL,
      secondary: LIGHT_GRAY,
      dark: DARK_BLUE,
    },
    outline: {
      gray: DARK_GRAY,
    },
    text: {
      bright: YELLOW,
      dark: DARK_BLUE,
      light: LIGHT_BLUE_VARIANT,
    },
  },
  typography: {
    secondFontFamily: {
      fontFamily: 'Source Code Pro, monospace',
    },
  },
};

const theme = deepmerge(themeSettings, customThemeSettings);

export default theme;
