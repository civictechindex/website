import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import TopicTag from './TopicTag';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ChipInput from "material-ui-chip-input";
import { useClipboard } from 'use-clipboard-copy';

const useStyles = makeStyles((theme) => ({
  addTag: {
    '& .MuiChip-clickable': {
      backgroundColor: theme.palette.background.default,
      border: '1px solid',
      borderColor: theme.palette.outline.gray,
      borderRadius: '24px',
      padding: '0 10px',
      '&.MuiChip-deletable svg': {
        color: theme.palette.outline.gray,
      },
      [theme.breakpoints.down('md')]: {
        height: '42px',
        width:'180px',
      },
      [theme.breakpoints.up('md')]: {
        height: '48px',
        width:'215px',
      },
    },
  },
  tagGridStyle:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection:'row',
    },
  },
  typoStyle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
}))


export const CurrentTopicTagSection = ({ currentTags, repositoryName }) => {

  return (
    <>
      {currentTags.length !== 0 ?<Grid>
        <Grid style={{ padding:'24px 0px' }}>
          <Typography variant='body1'>Current topic tags on {repositoryName}:</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center" data-cy='current-tags'>
          <TopicTag topicnames={currentTags} variant='generated' />
        </Grid> </Grid>: <Grid item md={8} style={{ margin:'auto', padding:'30px' }}>
        <Typography variant='h5' style={{ textAlign:'center' }}>There are currently no topic tags in your project’s repository. Add tags to increase your project visibility.</Typography>
      </Grid> }
      <Grid style={{ padding:'24px 0px' }}>
        <Divider />
      </Grid>
    </>
  )
}

export const AddTagsQuestion = ({ resetForm,setDisplayState,setChangeValue }) =>{
  const [addTagValue, setAddTagValue] = useState('');
  const handleChangeTag = (event) => {
    setAddTagValue(event.target.value)
  }
  const showAddTopicTag = () =>{
    if (addTagValue === 'yes'){
      setDisplayState('AddTopicTags')
    }
    if (addTagValue === 'no'){
      setChangeValue('GenerateTags')
      setDisplayState('GenerateTags')
    }
  }
  const handleResetForm = () => {
    resetForm()
  }
  return (
    <>
      <AffiliationQuestionSection value={addTagValue} handleChange={handleChangeTag} question={"Do you want to add more tags specific to your project's subject area to increase visibility?"} />
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={showAddTopicTag} id='generate-button'>Generate Tags</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm} id='reset-form-button'>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}

export const AddTopicTagSection = ({ setDisplayState,setChangeValue,resetForm,handleChangeChip,chipInputValue,handleUpdateChipInput }) =>{
  const classes = useStyles();
  const handleGenerateTag = () =>{
    setChangeValue('GenerateTags')
    setDisplayState('GenerateTags')
  }
  const handleResetForm = () => {
    resetForm()
  }
  return (
    <>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='body1'>What topic(s), cause(s), or civic issue(s) does your project address?</Typography>
      </Grid>
      <Grid data-cy='add-topic-tags'>
        <ChipInput
          fullWidth
          placeholder='Add topic tag'
          onChange={(chips) => handleChangeChip(chips)}
          onUpdateInput={handleUpdateChipInput}
          inputValue={chipInputValue}
          className = {classes.addTag}
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleGenerateTag} id='generateTagsButton'>Generate Tags</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm} id='reset-form-button'>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}

export const NewTags =({ resetForm,setDisplayState,tagsToAdd,setChangeValue,linkStyles })=>{
  const classes = useStyles();
  const handleResetForm = () => {
    resetForm()
  }
  const handleAddTags = () =>{
    setChangeValue('CopyPasteTags')
    setDisplayState('CopyPasteTags')
  }
  return (
    <>
      <Grid>
        <Grid style={{ padding:'20px 20px 0px 20px' }}>
          <Typography variant='body1'>New tags to add to your repository:</Typography>
        </Grid>
        <Grid container className={classes.tagGridStyle}>
          <Grid item sm={8} data-cy='new-tags'>
            <Grid container direction="row" alignItems="center" >
              <TopicTag topicnames={tagsToAdd} variant='generated' />
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <Link component="button" variant='body1' onClick={()=>setDisplayState('AddMoreTags')} underline='always' style={linkStyles} >Add More tags</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center' spacing={3} style={{ padding: '10px' }}>
        <Grid item style={{ padding: '10px' }}>
          <Button onClick={handleAddTags} id='add-tags-button'>
            Add these tags to your repo
          </Button>
        </Grid>
        <Grid item style={{ padding: '10px' }}>
          <Button onClick={handleResetForm} id='reset-form-button'>
            Reset Form
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export const CopyPasteTags = ({ tagsToAdd,setDisplayState,repositoryName,repositoryUrl,linkStyles }) =>{
  const classes = useStyles();
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });
  const handleQueryParamLink = () => {
    clipboard.copy(window.location.href)
  }

  return (
    <>
      <Grid style={{ padding:'24px 0px' }}>
        <Typography variant='h5'>How to add your tags to your project’s repository</Typography>
      </Grid>
      <Grid style={{ paddingBottom:'20px' }}>
        <Typography variant='h6' style={{  fontWeight: '400' }} className={classes.typoStyle} >We recommend having your <Link target="_blank" href={repositoryUrl} >project’s repository</Link> open in another browser for ease of convenience. </Typography>
      </Grid>
      <Grid item xs={12} sm={10} style={{ paddingBottom:'20px' }}>
        <Typography variant='h6' style={{  fontWeight: '400' }} className={classes.typoStyle}>If you don’t see the (Github Gear icon) button it means you don’t have “edit repository settings” privileges (and can’t perform the steps below).
        Please click <Link component="button" variant='h6' onClick={()=>handleQueryParamLink()} underline='always' style={linkStyles}>{clipboard.copied ? 'Copied' : 'here'}</Link> to copy this page link and send it to your repository admin.</Typography>
      </Grid>
      <Grid>
        <Grid style={{ padding:'20px 0px' }}>
          <Typography variant='h6'>Here are the Topic Tags to add to {repositoryName}:</Typography>
        </Grid>
        <Grid container>
          <Grid item data-cy='copy-paste-tags'>
            <Grid container direction="row" alignItems="center" >
              <TopicTag topicnames={tagsToAdd} variant='copypaste'/>
              <Grid item  style={{ padding:'8px' }}>
                <Link component="button" variant='body1' onClick={()=>setDisplayState('AddMoreTags')} underline='always' style={linkStyles} >Add More tags</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Typography variant='h6' style={{  fontWeight: '300', fontStyle:'italic',paddingTop:'36px' }} className={classes.typoStyle}>Click each individual generated topic tag to copy it one at a time. Paste selected tag into your repository.</Typography>
      </Grid>
    </>
  )
}


export const AddMoreTags = ({ userTags,setDisplayState,resetForm,handleChangeChip,changeValue,chipInputValue,handleUpdateChipInput }) =>{
  const classes = useStyles();
  const handleAddMoreTags = () =>{
    if (changeValue === 'CopyPasteTags'){
      setDisplayState('CopyPasteTags')
    }
    else
      setDisplayState('GenerateTags')
  }

  const handleResetForm = () => {
    resetForm()
  }
  return (
    <>
      <Grid style={{ padding:'20px' }}>
        <Typography variant='body1'>What topic(s), cause(s), or civic issue(s) does your project address?</Typography>
      </Grid>
      <Grid>
        <ChipInput
          defaultValue={userTags}
          fullWidth
          placeholder='Add topic tag'
          onChange={(chips) => handleChangeChip(chips)}
          onUpdateInput={handleUpdateChipInput}
          inputValue={chipInputValue}
          className = {classes.addTag}
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} style={{ padding:'10px' }}>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleAddMoreTags}>Generate Tags</Button></Grid>
        <Grid item style={{ padding:'10px' }}><Button onClick={handleResetForm}>Reset Form</Button></Grid>
      </Grid>
    </>
  )
}
