import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';

const SocialSection = ({ size }) => {
  const classes = useStyles()

  return (
    <div
      className={size !== 'lg'
        ? `${classes.sectionPaddingSm}`
        : `${classes.containerItem}`
      }
    >
      <Grid
        container direction='column'
        spacing={size !== 'lg' ? 4 : 0}
        className={size === 'lg' ? classes.socialContainerLarge : null}
      >
        <Grid item >
          <Typography variant='body2' color='textSecondary' className={size !== 'lg' ? classes.followTypographySm : classes.followTypographyLg}>Follow Us</Typography>
        </Grid>

        <Grid item  className={size !== 'lg' ? classes.socialContainer : classes.socialIcons}>
          <a href='https://www.instagram.com/civictechindex'>
            <img src='/images/insta-logo.svg' alt='Instagram logo' />
          </a>
          <a href='https://twitter.com/civictechindex'>
            <img src='/images/twitter-logo.svg' alt='Twitter logo' />
          </a>
          <a href='https://www.facebook.com/civictechindex'>
            <img src='/images/fb-logo.svg' alt='Facebook logo' />
          </a>
          <a href='https://github.com/civictechindex'>
            <img src='/images/github-logo.svg' alt='GitHub logo' />
          </a>
        </Grid>
      </Grid>
    </div>
  )
};

export default SocialSection;
