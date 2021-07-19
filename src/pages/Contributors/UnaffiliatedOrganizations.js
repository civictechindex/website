import React, { useState } from "react";
import { ContributorThumbnail } from "../../components/ContributorThumbnail";

import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  unAfflText: {
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
  noargText: {
    fontSize:'24px',
    marginLeft: '38%',
  },
  unaffiliatedThumbnailsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
  },
  unaffiliatedThumbnails: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    width: '496px',
    height:'80px',
    borderRadius: '6px',
    border:'1px solid',
    borderColor:theme.palette.outline.gray,
    margin:'8px',
    '& p': {
      fontSize:'24px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'440px',
      height: '80px',
      '& p': {
        fontSize:'18px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width:'276px',
      height: '64px',
      '& p': {
        fontSize:'18px',
      },
    },
  },
}));

export const UnaffiliatedOrganizations = (props) => {
  const { searchCount, unaffiliatedCount, totalunaffiliatedCount, unaffiliatedOpen, organization, checkboxValue } = props;
  const classes = useStyles();
  const [isChildThumbnail] = useState(true);

  return (
    <Grid>

      <Grid style={{ padding:'24px 0px 32px' }}>
        <Typography variant='h4' className={classes.unAfflText}>
          Unaffiliated Organizations
          <span style={{ paddingLeft: "1px" }}> {searchCount ? `(${unaffiliatedCount}/${totalunaffiliatedCount})`  : `(${totalunaffiliatedCount})`   } </span>
        </Typography>
      </Grid>
      { checkboxValue ?
        <Box><Typography color='primary' className={classes.noargText}> No organization found </Typography> </Box>
        :
        <Grid>
          {unaffiliatedOpen && (
            <Grid  className={classes.unaffiliatedThumbnailsWrapper}>
              {organization && organization.map((org, index) => (
                <Grid className={classes.unaffiliatedThumbnails} key={index}>
                  <ContributorThumbnail
                    organization={org}
                    isChildThumbnail={isChildThumbnail}
                  ></ContributorThumbnail>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      }
    </Grid>
  );
};
