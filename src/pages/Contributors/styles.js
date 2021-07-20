import makeStyles from '@material-ui/core/styles/makeStyles'
const DARK_GRAY = '#6D6E74';

export const useStyle = makeStyles((theme) => ({
  firstSectionWrapper: {
    background: theme.palette.secondary.dark,
    color: '#FFE06D',
    boxSizing: 'border-box',
    backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
    minHeight: '35vh',
    backgroundPositionY: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    '& h1': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '25vh',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      minHeight: '28vh',
    },
    [theme.breakpoints.down('xl')]: {
      minHeight: '16vh',
    },
  },

  banner: {
    height: '20px',
    width: '100px',
  },
  textStyle: {
    color:theme.palette.text.secondary,
    fontSize: '24px',
    textAlign:'center',
    marginTop: '-1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  sectionContainer: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '70%',
    '& p': {
      margin: '0',
    },
  },
  indicator: {
    backgroundColor: '#006B95',
  },
  tabVal: {
    color: DARK_GRAY,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
    },

    "&:hover": {
      color: "#006B95",
      opacity: 1,
    },

  },
  tabRoot: {
    color: DARK_GRAY,
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '32px',
    "&$tabSelected": {
      color: "#006B95",
    },
  },
  tabSelected: {},
  
  chkBoxStyle: {
    color: DARK_GRAY,
    paddingLeft: '59rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '45rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '23rem',
    },
  },
  
  formControlLabel: {
    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
  },

}));
