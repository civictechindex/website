/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import { getOrganizationLinks } from "./getOrganizationLinks.js";
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  thumbnailWrapper: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    padding:'8px',
    flexWrap:'nowrap',
  },

  thumbnailImage: {
    width: '48px',
    height: '48px',
    [theme.breakpoints.down('sm')]: {
      width: '32px',
      height: '32px',
    },

  },
  orgText: {
    paddingLeft:'16px',
    color:theme.palette.secondary.dark,
    '& a:link': {
      color: theme.palette.secondary.dark,
    },
    '& a:visited': {
      color: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft:'8px',
    },
  },
  blueColorText: {
    paddingLeft:'16px',
    color: theme.palette.text.secondary,
    '& a:link': {
      color: theme.palette.text.secondary,
    },
    '& a:visited': {
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft:'8px',
    },
  },
  thumbnails:{

  },
}));

export const ContributorThumbnail = ({ organization, isOpen, dropdownLength, isChildThumbnail }) => {
  const classes = useStyles();

  const [thumbnailInfo, setThumbnailInfo] = useState({});

  useEffect(() => {
    setThumbnailInfo(getOrganizationLinks(organization));
  }, [organization]);

  return (
    <>
      <Box>
        {thumbnailInfo.organizationUrl ? (

          <Thumbnail
            thumbnailInfo={thumbnailInfo}
            organization={organization}
            isOpen={isOpen}
            dropdownLength={dropdownLength}
            isChildThumbnail={isChildThumbnail}
          />
        )  : (
          <Grid className={classes.textWrapperWithoutImage} component="span">
            <Typography component="span"> No URL Data for {organization.name} </Typography>
          </Grid>
        )}
      </Box>
    </>
  );
};

const Thumbnail = ({  thumbnailInfo, organization, isOpen,dropdownLength,isChildThumbnail }) => {
  const classes = useStyles();
  if (thumbnailInfo.imageUrl.includes('undefined') || thumbnailInfo.imageUrl.includes('scontent')){
    thumbnailInfo.imageUrl = '/images/default-github-repo-image.png';
  }
  return (
    <Grid container className={classes.thumbnailWrapper}>
      <Grid item className={classes.imageWrapper}>
        <CardMedia
          component="img"
          src={thumbnailInfo.imageUrl}
          className={classes.thumbnailImage}
          onError={(e) =>
            // eslint-disable-next-line no-console
            console.log(`${e}: error with ${organization.name} image`)
            // Before MVP: Refactor as on-website error/generic case.
          }
          alt={`${organization.name} logo`}
          loading="lazy"
        />
      </Grid>

      <Grid item data-cy="affthumbnailText" className={classes.affthumbnailText}>
        <Typography variant={isChildThumbnail ? 'body1':'h6'} noWrap  data-cy='thumbnailTextInfn' className={isOpen ? `${classes.blueColorText}` : `${classes.orgText}`}>
          <Link
            href={thumbnailInfo.organizationUrl}
            target="_blank"
            rel="noreferrer noopener"
          >{organization.name ? organization.name : organization}
          </Link> { dropdownLength ? `(${dropdownLength})`  : ` `   }
        </Typography>
      </Grid>

    </Grid>
  );
};
