import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BottomCallToAction from '../../components/BottomCallToAction';
import Link from '../../components/common/Link';
import useStyles from './styles.js';
import { GenericHeaderSection } from '../../components/'


const Donation = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    { href: '/home', name: 'Home' },
    { href: '/support/donate', name: 'Donate' },
  ];

  return (
    <Box className='pageContainer'>
      <Box className='containerDefault'>
        <Container>
          <GenericHeaderSection mainTitle ="Make a Donation" breadCrumbLinks ={breadCrumbLinks} lg='312px'/>
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <Grid container direction='row'>
            <Grid item xs={12} md={6} className={classes.infoGrid}>
              <Typography variant='body1' className={classes.infoDescription}>
                The Civic Tech Index is being developed by Hack For LA, and is currently taking
                donations through Code For America.
              </Typography>
              <Typography variant='body1' className={classes.infoSteps}>
                1. Please follow this link to the Code For America{' '}
                <Link to='https://www.codeforamerica.org/donate'>donation form</Link>.
              </Typography>
              <Typography variant='body1' className={classes.infoSteps}>
                2. To make a donation to the Civic Tech Index, please select{' '}
                <strong>Hack for LA</strong> under the brigades listed.
              </Typography>
              <Typography variant='h4' className={classes.infoThank}>
                We appreciate your contribution.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                alt='A gif demonstrating the use of the donation form'
                className={classes.infoGif}
                src='./images/CTI-Donate-to-HfLA.gif'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='containerWhite'>
        <Container>
          <BottomCallToAction heading='Want to support in other ways?' />
        </Container>
      </Box>
    </Box>
  );
}

export default Donation;
