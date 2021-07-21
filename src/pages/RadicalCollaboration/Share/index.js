import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { GenericHeaderSection } from '../../../components'

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    paddingBottom: theme.spacing(6),
  },
  imageStyle: {
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
    },
  },
  ctiImageStyle: {
    maxWidth: '100%',

    [theme.breakpoints.down('xs')]: {
      width: '102px',
      height: '62px',
    },
  },
  ctiSquareStyle: {
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '150px',
    },
  },
  starMediaStyle: {
    backgroundColor: theme.palette.background.default,
    '& img': {
      marginBottom: '36px',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '32px',
    },
  },
  starMediaSection: {
    height: '252px',
    marginBottom: '42px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      height: '272px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '632px',
      justifyContent: 'center',
    },
  },
  socialMediaSectionStyle: {
    padding: '99px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '47px 0 72px 0',
    },
  },
  mediaInfoStyle: {
    padding: '112px 0 153px 0 ',
    [theme.breakpoints.down('md')]: {
      padding: '112px 0 77px 0 ',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '112px 0 96px 0 ',
    },
  },
}));

const StarMediaSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems='center'
      justify='space-between'
      className={classes.starMediaSection}>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        xs={12}
        md={3}
        className={classes.starMediaStyle}>
        <Grid item style={{ paddingBottom: ' 32px 0 32px' }}>
          <img src='/images/image3.svg' alt='StarCount logo' />
        </Grid>
        <Typography variant='h6'>
                    Don’t forget to star our repository
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        justify='space-around'
        xs={12}
        md={3}
        className={classes.starMediaStyle}>
        <Grid item>
          <img
            src='/images/Medium_logo_Monogram.svg'
            alt='Medium logo'
          />
        </Grid>
        <Typography variant='h6'>
                    Mention or write about us on Medium
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        xs={12}
        md={3}
        className={classes.starMediaStyle}>
        <Grid item style={{ padding: ' 16px 0 32px' }}>
          <img src='/images/mail.png' alt='Mail logo' />
        </Grid>
        <Typography variant='h6'>
                    Send an email to your project admin with suggested tags for
                    your repository
        </Typography>
      </Grid>
    </Grid>
  );
};
const SocialMediaPostSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      style={{ marginTop: '24px' }}>
      <Grid item>
        <img
          src='/images/CTI-Twitter-latest.png'
          alt='CTI Twitter latest'
          className={classes.imageStyle}
        />
      </Grid>
    </Grid>
  );
};
const SocialMediaSection = () => {
  const classes = useStyles();
  return (
    <Box className='containerGray'>
      <Container>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
          className={classes.socialMediaSectionStyle}>
          <Typography
            variant='h3'
            color='Primary'
            style={{
              marginBottom: '24px',
            }}>
                        Follow us on Social Media
          </Typography>
          <Typography
            variant='h6'
            color='Primary'
            style={{
              marginBottom: '48px',
            }}>
                        #Civictechindex
          </Typography>
          <Grid
            container
            alignItems='center'
            justify='space-between'
            style={{ maxWidth: '576px' }}>
            <a href='https://www.instagram.com/civictechindex'>
              <img
                src='/images/insta-logo-variant.png'
                alt='Instagram logo'
              />
            </a>
            <a href='https://twitter.com/civictechindex'>
              <img
                src='/images/twitter-logo-variant.png'
                alt='Twitter logo'
              />
            </a>
            <a href='https://www.facebook.com/civictechindex'>
              <img
                src='/images/fb-logo-variant.png'
                alt='Facebook logo'
              />
            </a>
            <a href='https://github.com/civictechindex'>
              <img
                src='/images/github-logo-variant.png'
                alt='GitHub logo'
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const MediaInfo = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.mediaInfoStyle}>
        <Grid
          container
          direction='column'
          alignItems='center'
          item
          lg={6}
          sm={12}
          md={12}
          style={{ marginBottom: '32px' }}>
          <Box>
            <Typography
              variant='h4'
              color='Primary'
              style={{ marginBottom: '32px' }}>
                            Use our Logo on your Project!
            </Typography>
            <Typography
              variant='h6'
              color='Primary'
              style={{ marginBottom: '16px' }}>
                            If you have done the following:
            </Typography>

            <Typography
              variant='body1'
              color='Primary'
              style={{ paddingBottom: '15px' }}>
                            • Your have listed your project on Civic Tech Index
            </Typography>
            <Typography
              variant='body1'
              color='Primary'
              style={{ paddingBottom: '15px' }}>
                            • You have added the topic tag
                            &quot;civictechindex&quot;to your project repository
            </Typography>
            <Typography
              variant='body1'
              color='Primary'
              style={{ paddingBottom: '15px' }}>
                            • You have developed your own interface to search
                            the Index
            </Typography>
            <Typography
              variant='body1'
              color='Primary'
              style={{ paddingBottom: '15px' }}>
                            • In articles or social media posts featuring Civic
                            Tech Index.
            </Typography>
            <Typography
              variant='body1'
              color='Primary'
              style={{ paddingBottom: '15px' }}>
                            • For all other uses, please
              <a
                style={{
                  color: '#0D99C6',
                  textDecoration: ' none',
                }}
                href='/'>
                {' '}
                                contact us
              </a>{' '}
                            for permission.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          direction='column'
          alignItems='center'
          item
          lg={6}
          sm={12}
          md={12}>
          <CtiImageSection />
          <ButtonSection />
        </Grid>
      </Grid>
    </Container>
  );
};

const CtiImageSection = () => {
  const classes = useStyles();
  return (
    <Grid container justify='space-evenly'>
      <img
        src='/images/Rectangle55.png'
        alt='CTI  logo'
        className={classes.ctiImageStyle}
      />
      <img
        src='/images/Rectangle51.png'
        alt='Facebook logo'
        className={classes.ctiSquareStyle}
      />
      <img
        src='/images/Rectangle53.png'
        alt='CTI logo'
        className={classes.ctiImageStyle}
      />
    </Grid>
  );
};

const ButtonSection = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      style={{ marginTop: '48px' }}>
      <Button
        href='https://drive.google.com/drive/folders/1EORoPWmALLXJCfHyDXJemYpO5HvnMzPN'
        target='blank'>
                Download the CTI Assets Kit
      </Button>

      <Typography variant='body1' style={{ marginTop: '18px' }}>
                (All sizes & formats listed above in a .zip file)
      </Typography>
    </Grid>
  );
};

export default function ShareTheCti() {
  const classes = useStyles();
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Share the CTI', href: '/support/share' },
  ];

  return (
    <Box>
      <GenericHeaderSection mainTitle ="Share the CTI" breadCrumbLinks ={breadCrumbLinks} lg='312px'/>
      <Container className={classes.containerStyle}>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
          style={{
            padding: '64px 0 47px 0',
            textAlign: 'center',
          }}>
          <Typography variant='h3' color='Primary'>
                        Tell others about us!
          </Typography>
          <Typography
            variant='h5'
            color='Primary'
            style={{
              fontWeight: '400',
              fontSize: '20px',
              marginTop: '8px',
            }}>
                        Here are some suggested content to share with your
                        networks.
          </Typography>
        </Grid>
        <StarMediaSection />
        <Typography
          variant='h3'
          color='Primary'
          style={{ textAlign: 'center' }}>
                    Latest Updates from the CTI
        </Typography>
        <SocialMediaPostSection />
      </Container>
      <SocialMediaSection />
      <MediaInfo />
    </Box>
  );
}
