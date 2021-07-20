import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  // Large Screens
  nav: {
    color: theme.palette.primary.main,
    position: 'relative',
    height: '128px',
    backgroundColor: theme.palette.background.default,
    fontSize: '16px',
    fontFamily: theme.typography.fontFamily,
    zIndex: '900',
  },
  flexContainer: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '240px',
    '& a': {
      padding: '0 0 0 1rem',
    },
    '& button': {
      height: '48px',
      width: '173px',
    },
  },
  logo: {
    position: 'absolute',
    width: '188px',
    top: '35px',
    left: '32px',
  },
  searchContainer: {
    width: '200px',
    '& a': {
      padding: '0',
    },
  },
  // Small Screens
  mobileContainer: {
    display: 'none',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    marginLeft: '220px',
  },
  '@media (max-width: 959px)': {
    nav: {
      height: '72px',
    },
    flexContainer: {
      display: 'flex',
      position: 'absolute',
      bottom: '0px',
      left: '-240px',
      transform: 'translateY(0)',
      backgroundColor: theme.palette.background.default,
      width: '100%',
      height: 'fit-content',
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '0px 35px 40px 35px',
      zIndex: '-10',
      '& p': {
        display: 'none',
      },
      '& a': {
        display: 'none',
      },
      '& svg': {
        display: 'none',
      },
    },
    logo: {
      src: '/images/cti-logo.svg',
      position: 'absolute',
      width: '112px',
      top: '19px',
      left: '36px',
    },
    hideMobileNav: {
      transform: 'translateY(0%)',
      transitionDuration: theme.transitions.duration.leavingScreen,
    },
    showMobileNav: {
      transform: 'translateY(100%)',
      transitionDuration: theme.transitions.duration.enteringScreen,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      '& p': {
        display: 'inline',
        padding: '16px 0px',
        fontSize: '20px',
        fontWeight: '700',
        color: '#0F1D2F',
      },
      '& a': {
        display: 'inline',
        padding: '12px 0px',
        fontSize: '16px',
        fontWeight: '400',
        color: '#0F1D2F',
      },
      '& a:link': {
        underline: 'none',
      },
      '& svg': {
        display: 'inline',
        justifyContent: 'right',
      },
      '& $searchContainer': {
        alignContent: 'center',
        width: '200px',
        padding: '16px 0px',
        '& a': {
          color: 'white',
        },
      },
    },
    mobileContainer: {
      display: 'flex',
      marginRight: '2rem',
    },
    dropdownHeader: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    collapse: {
      '& .MuiListItem-dense': {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
  },
}));

export default useStyles;
