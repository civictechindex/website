import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  containerFooter: {
    backgroundColor: '#0F1D2F',
    border: 'none',
    paddingBottom:'64px',
  },
  subscribeSection: {
    padding: '0px 30px',
  },
  dropdownHeader: {
    alignItems: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  errorMessage: {
    color: theme.palette.error.main,
  },
  footerContainer: {
    position: "relative",
    padding:'56px 51.5px 0 51.5px',
    display: "flex",
    height: "100%",
    maxWidth:'100vw',
    justifyContent: "space-between",
    // info header links
    '& a:nth-child(1)': {
      fontWeight: 700,
      marginTop: 0,
    },
    // info links
    '& a': {
      color: theme.palette.text.secondary,
      display: 'block',
      marginTop: theme.spacing(1.5),
      textDecoration: 'none',
    },
  },
  annotation: {
    paddingTop: '30px',
    marginTop: theme.spacing(6),
    textAlign: 'center',
    '& a': {
      display: 'inline',
      textDecoration: 'underline',
    },
    '& p': {
      margin: 0,
      paddingBottom: theme.spacing(1),
      fontSize: theme.font.small.fontSize,
    },
  },
  socialContainer: {
    width:'208px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    '& a': {
      margin: 0,
    },
  },
  socialIcons: {
    paddingTop:'12px',
  },
  socialContainerLarge: {
    textAlign: 'center',
    '& a': {
      marginBottom: theme.spacing(1.5),
    },
  },
  subscribeSectionLarge:{
    maxWidth:'293px',
  },
  subscribeSectionSmall:{
    display:'flex',
    justifyContent:'space-between',
  },
  newsLetter:{
    maxWidth:'403px',
  },
  emailSubscribe: {
    display:'flex',
    justifyContent:'space-between',
    '& button': {
      marginLeft:'8px',
    },
  },
  successMessage: {
    textAlign: 'center',
  },
  textField: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    marginBottom: '0px 8px 5px 0px',
    width:'100%',
  },
  sectionPaddingSm: {
    padding: '0px 10px 16px 0px',
    fontSize: '16px!important',
  },
  sectionPaddingLg: {
    padding: '0px 10px 10px 5px',
    fontSize: '14px!important',
  },
  submitBtn:{
    marginTop:'5px!important' ,
    fontSize:'16px!important',
  },
  linkTypography:{
    fontSize: '14px!important',
  },
  followTypographyLg:{
    fontSize: '14px!important',
  },
  followTypographySm:{
    fontSize: '16px!important',
  },
}));

export default useStyles;
