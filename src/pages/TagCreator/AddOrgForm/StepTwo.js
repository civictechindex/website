import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import CountrySelect from './CountrySelect';

const StepTwo = (props) => {
  const classes = useStyles();
  const facebookUrlApiErr = props.apiErrors.facebook_url;
  const twitterUrlApiErr = props.apiErrors.twitter_url;
  const meetupUrlApiErr = props.apiErrors.meetup_url;
  return (
    <>
      <DialogTitle>
        <Box textAlign='center'>
          <Typography variant='h2' className={classes.infoLarge}>Add Organization to the Civic Tech Index</Typography>
        </Box>
        <Box className={classes.progress}>
          <Typography variant='body1'>Social Media and Location</Typography>
          <Typography variant='body1'><b>2/2</b></Typography>
        </Box>
        <LinearProgress variant='determinate' color='secondary' value={100} />
      </DialogTitle>
      <DialogContent>
        <Typography variant='h5' className={classes.heading}>
          Social Media URL <Box component='span' fontWeight='normal'>(optional)</Box>
        </Typography>
        <TextField
          className={classes.field}
          error={!!facebookUrlApiErr}
          helperText={facebookUrlApiErr}
          label='Facebook URL'
          onChange={(event) => {
            props.onFacebookUrl(event.target.value);
            props.setApiErrors({ ...props.apiErrors, facebook_url: '' });
          }}
          placeholder='https://facebook.com/example...'
          value={props.facebookUrl}
        />
        <TextField
          className={classes.field}
          error={!!twitterUrlApiErr}
          helperText={twitterUrlApiErr}
          label='Twitter URL'
          placeholder='https://twitter.com/example...'
          onChange={(event) => {
            props.onTwitterUrl(event.target.value);
            props.setApiErrors({ ...props.apiErrors, twitter_url: '' });
          }}
          value={props.twitterUrl}
        />
        <TextField
          className={classes.field}
          error={!!meetupUrlApiErr}
          helperText={meetupUrlApiErr}
          label='Meetup URL'
          onChange={(event) => {
            props.onMeetupUrl(event.target.value);
            props.setApiErrors({ ...props.apiErrors, meetup_url: '' });
          }}
          placeholder='http://meetup.com/example...'
          value={props.meetupUrl}
        />
        <Typography variant='h5' className={classes.heading}>
          Location <Box component='span' fontWeight='normal'>(optional)</Box>
        </Typography>
        <TextField
          className={classes.field}
          label='City'
          onChange={(event) => {
            props.onCity(event.target.value);
          }}
          value={props.city}
        />
        <TextField
          className={classes.field}
          label='State'
          onChange={(event) => {
            props.onStateProvCo(event.target.value);
          }}
          value={props.stateProvCo}
        />
        <CountrySelect country={props.country} onChange={props.onCountryChange} />
      </DialogContent>
      <DialogActions>
        <Box className={classes.buttons}>
          <Button variant='contained' color='default' onClick={props.onPrev}>Back</Button>
          <Tooltip
            title='Once your org is submitted, you can return to the Tag Generator and add it to the CTI.'
            aria-label='submit'
          >
            <Button variant='contained' color='secondary' onClick={props.onSubmit}>Submit</Button>
          </Tooltip>
        </Box>
      </DialogActions>
    </>
  );
};

export default StepTwo;
