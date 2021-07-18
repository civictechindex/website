import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

import DropdownList from './DropdownList';
import SocialSection from './socialSection';
import SubscribeSection from './subscribeSection';
import Annotation from './Annotation';
import { navigation } from '../../navigation';

const FooterSmall = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerFooter}>
      <Box className={classes.footerPadding}>
        <Grid container className={classes.footerContainer}>
          <Grid container item spacing={4} xs={12} direction='row'>
            {navigation.map((nav) => {
              return (
                <Grid key={nav.id} item xs={12}>
                  <DropdownList
                    header={nav.header}
                    route={nav.route}
                    links={nav.subNavigation}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <SocialSection size='sm' />
            </Grid>
            <Grid item xs={12}>
              <SubscribeSection size='sm' />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Annotation />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FooterSmall;
