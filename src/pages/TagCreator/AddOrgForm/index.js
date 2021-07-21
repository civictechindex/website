import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Complete from './Complete';

// eslint-disable-next-line max-lines-per-function
const AddOrgForm = React.forwardRef(({ open, onClose }, ref) => {
  const [step, setStep] = useState(0);
  const [apiErrors, setApiErrors] = useState({});
  const [city, setCity] = useState('');
  const [country, setCountry] = useState({ code: '', label: '' });
  const [facebookUrl, setFacebookUrl] = useState('');
  const [githubTag, setGithubTag] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [meetupUrl, setMeetupUrl] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [parentOrg, setParentOrg] = useState({ id: '', name: '' });
  const [parentOrgList, setParentOrgList] = useState([]);
  const [stateProvCo, setStateProvCo] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/organizations/`)
      .then((response) => {
        setParentOrgList([{ id: '', name: '' }, ...response.data]);
      });
  }, []);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    if (step === 2) {
      onClose(orgName);
    } else {
      onClose();
    }
    setStep(0);
    setApiErrors({});
    setOrgEmail('');
    setOrgName('');
    setParentOrg({ id: '', name: '' })
    setWebsiteUrl('');
    setGithubUrl('');
    setGithubTag('');
    setFacebookUrl('');
    setTwitterUrl('');
    setMeetupUrl('');
    setCity('');
    setStateProvCo('');
    setCountry({ code: '', label: '' });
  };

  // eslint-disable-next-line complexity
  const handleSubmit = async () => {
    const updatedGithubUrl = githubUrl.indexOf('https://') < 0 ? 'https://' + githubUrl : githubUrl;
    const updatedWebsiteUrl = websiteUrl.indexOf('http://') < 0 && websiteUrl.indexOf('https://') < 0
      ? 'https://' + websiteUrl : websiteUrl;
    const orgProps = {
      name: orgName,
      github_url: updatedGithubUrl,
      website_url: updatedWebsiteUrl,
      organization_email: orgEmail,
      org_tag: githubTag,
    };
    if (city) { orgProps.city = city }
    if (stateProvCo) { orgProps.state = stateProvCo }
    if (country.label) { orgProps.country = country.label }
    if (parentOrg.id) { orgProps.parent_organization = parentOrg.id }
    if (facebookUrl) {
      orgProps.facebook_url = facebookUrl.indexOf('https://') < 0 ? 'https://' + facebookUrl : facebookUrl;
    }
    if (meetupUrl) {
      orgProps.meetup_url = meetupUrl.indexOf('https://') < 0 ? 'https://' + meetupUrl : meetupUrl;
    }
    if (twitterUrl) {
      orgProps.twitter_url = twitterUrl.indexOf('https://') < 0 ? 'https://' + twitterUrl : twitterUrl;
    }
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/organizations/`, orgProps);
      setStep(2);
    } catch (error) {
      const errors = error.response.data;
      if (errors.name || errors.github_url || errors.website_url || errors.organization_email || errors.org_tag) {
        setStep(0);
      } else {
        setStep(1);
      }
      setApiErrors(errors);
    }
  };

  const renderStep = () => {
    const stepOne = <StepOne
      apiErrors={apiErrors}
      setApiErrors={setApiErrors}
      orgEmail={orgEmail}
      onOrgEmail={setOrgEmail}
      orgName={orgName}
      onOrgName={setOrgName}
      websiteUrl={websiteUrl}
      onWebsiteUrl={setWebsiteUrl}
      githubUrl={githubUrl}
      onGithubUrl={setGithubUrl}
      githubTag={githubTag}
      onGithubTag={setGithubTag}
      parentOrg={parentOrg}
      onParentOrg={setParentOrg}
      parentOrgList={parentOrgList}
      onCancel={handleClose}
      onNext={handleNext}
    />;
    const stepTwo = <StepTwo
      apiErrors={apiErrors}
      setApiErrors={setApiErrors}
      facebookUrl={facebookUrl}
      onFacebookUrl={setFacebookUrl}
      twitterUrl={twitterUrl}
      onTwitterUrl={setTwitterUrl}
      meetupUrl={meetupUrl}
      onMeetupUrl={setMeetupUrl}
      city={city}
      onCity={setCity}
      stateProvCo={stateProvCo}
      onStateProvCo={setStateProvCo}
      country={country}
      onCountryChange={setCountry}
      onPrev={handlePrev}
      onSubmit={handleSubmit}
    />;
    switch (step) {
    case 0: return stepOne;
    case 1: return stepTwo;
    case 2: return <Complete onClose={handleClose} />;
    default: return stepOne;
    }
  };

  return (
    <Dialog fullWidth maxWidth='sm' open={open} ref={ref}>
      {renderStep()}
    </Dialog>
  );
});

AddOrgForm.displayName = "AddOrgForm";

export default AddOrgForm;
