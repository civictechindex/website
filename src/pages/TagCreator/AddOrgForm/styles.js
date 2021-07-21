import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    '&>*': {
      margin: theme.spacing(1),
    },
  },
  complete: {
    paddingBottom: theme.spacing(3),
    textAlign: 'right',
  },
  field: {
    marginTop: theme.spacing(2),
  },
  firstHeading: {
    color: theme.palette.secondary.dark,
  },
  heading: {
    color: theme.palette.secondary.dark,
    marginTop: theme.spacing(3),
  },
  icon: {
    color: theme.palette.text.disabled,
    fontSize: '5rem',
    marginTop: theme.spacing(10),
  },
  info: {
    fontStyle: 'italic',
  },
  infoLarge: {
    color: theme.palette.secondary.dark,
    fontSize: '2.5rem',
  },
  progress: {
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      fontSize: '1.25rem',
    },
    '& :last-child': {
      color: theme.palette.secondary.dark,
    },
  },
  return: {
    textAlign: 'center',
    padding: theme.spacing(5),
    '&>*': {
      background: 'none',
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      width: '15rem',
      '&:hover': {
        background: 'none',
      },
    },
  },
  title: {
    color: theme.palette.secondary.dark,
    fontSize: '3rem',
    textAlign: 'center',
  },
}));

export default useStyles;
