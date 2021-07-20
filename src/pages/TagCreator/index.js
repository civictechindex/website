
import React, { useState,useEffect,useRef } from 'react';
import {
  useQueryParam,
  StringParam,
  ArrayParam,
  withDefault,
} from 'use-query-params';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GenericHeaderSection } from '../../components/'
import { AffiliationQuestionSection } from "./AffilationQuestionSection";
import { OrgNameSection,OrganizationSelectorSection,OrgChange } from './Organization'
import { ProjectRepositorySection,ProjectRepositoryInput } from './ProjectRepository'
import { AddTopicTagSection,AddTagsQuestion,NewTags,CopyPasteTags,AddMoreTags,CurrentTopicTagSection } from './TopicTagSection'
import useTheme from '@material-ui/core/styles/useTheme';
import TagGeneratorInstructions from '../../components/TagGeneratorInstructions'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  containerPadding: {
    paddingLeft:'100px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft:'40px',
    },
    [theme.breakpoints.down('xs')]: {
      padding:'0px 16px',
    },
  },
}))

/**
 * By removing matched text, we allow leeway in entering repository URL,
 * including how it might be pasted from GitHub. All these would work:
 * https://github.com/civictechindex/CTI-website-frontend.git
 * git@github.com:civictechindex/CTI-website-frontend.git
 * github.com/civictechindex/CTI-website-frontend
 * civictechindex / CTI-website-frontend
 */
const getRepositoryUrlPath = (repositoryUrl) => {
  let result = repositoryUrl.replace(/ /g, '')
  const prefix = /^(?:https?:\/\/)?github\.com\/|git@github\.com:/
  const suffix = /\.git$/
  result = result.replace(prefix, '')
  result = result.replace(suffix, '')
  return result
}

// checks if URL is deifferent
const usePrevious =(refValue) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = refValue;
  });
  return ref.current;
}

// eslint-disable-next-line max-lines-per-function
const TagCreator = () => {
  const theme = useTheme();
  const classes = useStyles()
  const [displayState, setDisplayState] = useQueryParam('displayState',withDefault(StringParam,''));
  const [value, setValue] = useQueryParam('value',withDefault(StringParam,''));
  const [orgName, setOrgName] = useQueryParam('orgName',withDefault(StringParam,''));
  const [changeValue, setChangeValue] = useQueryParam('changeValue',withDefault(StringParam,''));
  const [repositoryUrl, setRepositoryUrl] = useQueryParam('repositoryUrl',withDefault(StringParam,''));
  const [repositoryName, setRepositoryName] = useQueryParam('repositoryName',withDefault(StringParam,''));
  const [topicSearchError, setTopicSearchError] = useQueryParam('topicSearchError',withDefault(StringParam,''));
  const [tagsToAdd, setTagsToAdd] = useQueryParam('tagsToAdd',withDefault(ArrayParam,[]));
  const [currentTags, setCurrentTags] = useQueryParam('currentTags',withDefault(ArrayParam,[]));
  const [userTags, setUserTags] = useQueryParam('userTags',withDefault(ArrayParam,[]));
  const [orgTags, setOrgTags] = useQueryParam('orgTags',withDefault(ArrayParam,[]));
  const [options, setOptions] = useState([]);
  const breadCrumbLinks = [{ href: '/home', name: 'Home' }, { href: '/join-index', name: 'Join the Index' }]

  const resetForm = () => {
    setValue('')
    setOrgName('')
    setRepositoryUrl('')
    setRepositoryName('')
    setTopicSearchError('')
    setTagsToAdd([])
    setCurrentTags([])
    setUserTags([])
    setOrgTags([])
    setChangeValue('')
    setDisplayState('')
  }

  useEffect(() => {
    let active = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
      .then(res => {
        const orgs = (res.data).map((org) => org.name)
        if (active) {
          setOptions(["",...orgs]);
        }
      })
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const civicName = []
    if (!currentTags.includes("civictechindex")) {
      civicName.push("civictechindex")
    }
    if (orgTags.length !== 0 && currentTags.length !== 0){
      const result = orgTags.filter(ot => !currentTags.includes(ot))
      setTagsToAdd([...civicName,...result,...userTags])
    }
    else {
      setTagsToAdd([...civicName,...orgTags,...userTags])
    }
  },[orgTags, currentTags, setTagsToAdd, userTags])


  useEffect(() => {
    if (value === 'no'){
      setOrgName('')
      setOrgTags([])
    }
  },[setOrgName, setOrgTags, value])


  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleChangeProjectRepository = () =>{
    if (changeValue === 'TopicTag'){
      setDisplayState('TopicTag')
    }
    else if (changeValue === 'GenerateTags'){
      setDisplayState('GenerateTags')
    }
    else if (changeValue === 'CopyPasteTags'){
      setDisplayState('CopyPasteTags')
    }
    else {
      setChangeValue('TopicTag')
      setDisplayState('TopicTag')
    }
  }
  const prevRefUrl = usePrevious(repositoryUrl)

  const handleSubmit = (event) => {
    const urlPath = getRepositoryUrlPath(repositoryUrl)
    // Setting Repository Name
    const patt = /[a-z]+\//g
    const repName = urlPath.replace(patt, '')
    setRepositoryName(repName)
    // Return error message if no url present
    if (urlPath.length === 0){
      return setTopicSearchError('Please enter a URL');
    }
    // Fetches Tags from API only if URL is changed
    if (prevRefUrl !== repositoryUrl){
      axios.get('https://api.github.com/repos/' + urlPath + '/topics', {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
      })
        .then(res => {
          setTopicSearchError('')
          setCurrentTags(res.data.names)
          handleChangeProjectRepository()
        }).catch(e => {
        /*
         * This should store the error state.
         * Component should check for error state and resolve the correct response.
         */
          if (e){
            setTopicSearchError('Cannot find repository. Please check the name and try again')
            setDisplayState('ProjectUrl')
          }
        })
    }
    if ((prevRefUrl === repositoryUrl) && ((topicSearchError) === 'Cannot find repository. Please check the name and try again')){
      setDisplayState('ProjectUrl')
    }
    else {
      handleChangeProjectRepository()
    }
  }
  const handleChangeChip = (chips) =>{
    let chipsArr = []
    chipsArr = chips.map(chip => chip.toLowerCase().trim().replaceAll(" ", "-"))
    setUserTags(chipsArr)
  }

  const linkStyles = {
    fontWeight: '400',
    color: theme.palette.secondary.main,
  }


  const OrgProjSection = () => {
    return (
      <>
        <OrgNameSection setDisplayState={setDisplayState} orgName={orgName} linkStyles={linkStyles} />
        <ProjectRepositorySection repositoryUrl={repositoryUrl} setDisplayState={setDisplayState} linkStyles={linkStyles}/>
      </>
    )
  }

  const RadioYes = ({ value,setOrgName }) =>{
    return (
      <Grid container id='container-affiliated'>
        <OrganizationSelectorSection orgName={orgName} setOrgName={setOrgName} options={options} setOptions={setOptions}/>
        <OrgChange value={value} orgName={orgName} setOrgName={setOrgName} setOrgTags={setOrgTags}
          changeValue={changeValue} setDisplayState={setDisplayState} linkStyles={linkStyles}/>
      </Grid>
    )
  }


  // eslint-disable-next-line complexity
  const renderCurrentState = () => {
    switch (displayState) {
    case "ProjectUrl":
      return (
        <>
          <OrgNameSection setDisplayState={setDisplayState} orgName={orgName} linkStyles={linkStyles}/>
          <ProjectRepositoryInput
            repositoryUrl={repositoryUrl}
            handleEnter={handleEnter}
            setRepositoryUrl={setRepositoryUrl}
            topicSearchError={topicSearchError}
            setTopicSearchError={setTopicSearchError}
            handleSubmit={handleSubmit}/>
        </>
      )
    case "TopicTag":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection currentTags={currentTags} repositoryName={repositoryName}/>
          <AddTagsQuestion setDisplayState={setDisplayState} setChangeValue={setChangeValue} resetForm={resetForm}/>
        </>
      )
    case "AddTopicTags":
      return (
        <>
          <CurrentTopicTagSection currentTags={currentTags} repositoryName={repositoryName}/>
          <AddTopicTagSection
            setDisplayState={setDisplayState}
            setChangeValue={setChangeValue}
            resetForm={resetForm}
            handleChangeChip={handleChangeChip}/>
        </>
      )
    case "GenerateTags":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection currentTags={currentTags} repositoryName={repositoryName}/>
          <NewTags tagsToAdd={tagsToAdd}
            setDisplayState={setDisplayState}
            setChangeValue={setChangeValue}
            resetForm={resetForm}
            linkStyles={linkStyles}/>
        </>
      )
    case "AddMoreTags":
      return (
        <AddMoreTags userTags={userTags} setDisplayState={setDisplayState}
          resetForm={resetForm} handleChangeChip={handleChangeChip} changeValue={changeValue} />
      )
    case "CopyPasteTags":
      return (
        <>
          <OrgProjSection/>
          <CurrentTopicTagSection currentTags={currentTags} repositoryName={repositoryName}/>
          <CopyPasteTags tagsToAdd={tagsToAdd} setDisplayState={setDisplayState}
            repositoryName={repositoryName}
            repositoryUrl={repositoryUrl}
            linkStyles={linkStyles}/>
        </>
      )
    default:
      return (
        <>
          <AffiliationQuestionSection value={value} handleChange={handleChange}
            question={'Are you affiliated with an organization?'} />
          {(value === 'yes')?<RadioYes value={value} setOrgName={setOrgName}/>:null}
          {(value === 'no')?<OrgChange  value={value} orgName={orgName} setOrgName={setOrgName} setOrgTags={setOrgTags}
            changeValue={changeValue} setDisplayState={setDisplayState}/>:null}
        </>
      )
    }

  }

  return (
    <Box>
      <GenericHeaderSection mainTitle ="Tag Generator" breadCrumbLinks ={breadCrumbLinks} lg='320px' md='304px' sm='304px' subText>
        <Typography variant='h6' color='textSecondary' style={{ fontWeight:'500' , textAlign:'center' }} >Join the Civic Tech Index by submitting your open-source project.<br /> This process takes less than one minute to complete.</Typography>
      </GenericHeaderSection>

      <Box className='containerGray' style={{ paddingBottom:'30px' }} >
        <Container className={classes.containerPadding} >
          {renderCurrentState()}
        </Container>
      </Box>
      {(displayState === 'CopyPasteTags')?<TagGeneratorInstructions/>:null}
    </Box>
  )
}

export default TagCreator
