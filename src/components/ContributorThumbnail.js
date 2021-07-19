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
    paddingLeft:'9px',
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
  contributorIcon: {
    marginTop: '2%',
    marginRight: '2%',
    width: '14.39px',
    height: '14.39px',
  },
  contributorItem: {
    display: 'grid',
    justifyContent: 'right',
    marginRight: '2%',
    marginTop: '2%',
  },
  thumbnailWrapperContributor: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    padding:'8px',
    flexWrap:'nowrap',
    position: 'relative',
    marginTop: '-6%',
  },
  thumbnailChildImage: {
    width: '38px',
    height: '38px',
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

  let thumbnailImageStyle,thumbnailWrapperStyle;
  if (organization.cti_contributor){
    thumbnailWrapperStyle = classes.thumbnailWrapperContributor;
  }
  else
  {
    thumbnailWrapperStyle = classes.thumbnailWrapper;
  }
  if (organization.affiliated && dropdownLength > 0){

    thumbnailImageStyle = classes.thumbnailImage;
  }
  else
  {
    thumbnailImageStyle = classes.thumbnailChildImage;
  }
  return (
    <>
      <Box className={classes.contributorItem} item xs={4} justify="flex-end">{ organization.cti_contributor  ? <img className={classes.contributorIcon} src='/images/contributor-icon.png' alt="contributor-icon" />  : ``   }</Box>
      <Grid className={thumbnailWrapperStyle} item container xs={4}>
        <Grid item className={classes.imageWrapper}>
          <CardMedia
            component="img"
            src={thumbnailInfo.imageUrl}
            // className={classes.thumbnailImage}
            className={thumbnailImageStyle}
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

    </>
  );
};
