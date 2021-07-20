import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  gridStyle:{
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '8px',
    },
  },
  typoStyle: {
    fontWeight:'400',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
    },
  },
}))

export const ProjectRepositorySection = ({ repositoryUrl,setDisplayState,linkStyles }) => {
  const classes = useStyles()
  return (
    <Grid container direction="row" alignItems="center" style={{ paddingBottom: '32px' }}>
      <Grid item xs={12} sm={3} className={classes.gridStyle} >
        <Typography variant='h6' className={classes.typoStyle}>Project Repository URL:</Typography>
      </Grid>
      <Grid item xs={10} sm={7} data-cy='grid-repository-url'>
        <Link variant='body1' className={classes.typoStyle} href={repositoryUrl} >{repositoryUrl}</Link>
      </Grid>
      <Grid item xs={2}>
        <Link id="change-url" component="button" variant='body1' onClick={()=>setDisplayState('ProjectUrl')} underline='always' style={linkStyles} >change</Link>
      </Grid>
    </Grid>
  )
}

export const ProjectRepositoryInput = ({ handleEnter, repositoryUrl, setRepositoryUrl, topicSearchError, setTopicSearchError, handleSubmit }) => {
  const handleChange = (e) =>{
    setRepositoryUrl(e.target.value)
    setTopicSearchError('')
  }
  return (
    <>
      <Grid item style={{ padding: '16px 0px' }} xs={12}>
        <Typography variant='h6'>Project Repository URL</Typography>
      </Grid>
      <Grid data-cy='grid-repository'>
        <TextField id="repository-url" onKeyPress={handleEnter} value={repositoryUrl} onChange={handleChange} variant="outlined" placeholder="https://github.com/hackforla/example" fullWidth />
      </Grid>
      <Grid style={{ paddingTop: '10px' }}><Typography variant='body1' style={{ color: 'red' }}>{topicSearchError}</Typography></Grid>
      <Grid item xs={12} sm={12} style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
        <Grid align='center'><Button onClick={handleSubmit} id='projectButton'>Find Project</Button></Grid>
      </Grid>
    </>
  )
}

