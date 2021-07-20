import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import ParentSelect from './ParentSelect';

// eslint-disable-next-line max-lines-per-function
const StepOne = (props) => {
  const classes = useStyles();
  const githubUrlApiErr = props.apiErrors.github_url;
  const orgEmailApiErr = props.apiErrors.organization_email;
  const orgNameApiErr = props.apiErrors.name;
  const websiteUrlApiErr = props.apiErrors.website_url;
  return (
    <>
      <DialogTitle>
        <Box textAlign='center'>
          <Typography variant='h2' className={classes.infoLarge}>Add Organization to the Civic Tech Index</Typography>
        </Box>
        <Box className={classes.progress}>
          <Typography variant='body1'>Project Information</Typography>
          <Typography variant='body1'><b>1/2</b></Typography>
        </Box>
        <LinearProgress variant='determinate' color='secondary' value={50} />
        <Typography variant='body1'>(*) Required Field</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant='h5' className={classes.firstHeading}>Organization Detail</Typography>
        <TextField
          className={classes.field}
          error={!!orgEmailApiErr}
          helperText={orgEmailApiErr}
          label='Organization Email'
          onChange={(event) => {
            props.onOrgEmail(event.target.value);
            props.setApiErrors({ ...props.apiErrors, organization_email: '' })
          }}
          placeholder='Name@example.com'
          required
          value={props.orgEmail}
        />
        <TextField
          className={classes.field}
          error={!!orgNameApiErr}
          helperText={orgNameApiErr}
          label='Organization Name'
          onChange={(event) => {
            props.onOrgName(event.target.value);
            props.setApiErrors({ ...props.apiErrors, name: '' });
          }}
          required
          value={props.orgName}
        />
        <ParentSelect org={props.parentOrg} orgList={props.parentOrgList} onChange={props.onParentOrg} />
        <Typography variant='h5' className={classes.heading}>Organization URL</Typography>
        <TextField
          className={classes.field}
          error={!!websiteUrlApiErr}
          helperText={websiteUrlApiErr}
          label='Website URL'
          onChange={(event) => {
            props.onWebsiteUrl(event.target.value);
            props.setApiErrors({ ...props.apiErrors, website_url: '' });
          }}
          placeholder='http://example.com...'
          required
          value={props.websiteUrl}
        />
        <TextField
          className={classes.field}
          error={!!githubUrlApiErr}
          helperText={githubUrlApiErr}
          label='GitHub URL'
          onChange={(event) => {
            props.onGithubUrl(event.target.value);
            props.setApiErrors({ ...props.apiErrors, github_url: '' });
          }}
          placeholder='https://github.com/example...'
          required
          value={props.githubUrl}
        />
        <Typography variant='h5' className={classes.heading}>Your GitHub Organization Tags</Typography>
        <Typography variant='subtitle2' className={classes.info}>
          This is the GitHub tag that your organization uses such as <br />
          &quot;code-for-america&quot;, &quot;open-oakland&quot; or &quot;hack4la&quot;.
        </Typography>
        <TextField
          label='GitHub Tag'
          onChange={(event) => {
            props.onGithubTag(event.target.value);
            props.setApiErrors({ ...props.apiErrors, org_tag: '' });
          }}
          placeholder='open-oakland'
          required
          value={props.githubTag}
        />
      </DialogContent>
      <DialogActions disableSpacing>
        <Box className={classes.buttons}>
          <Button variant='contained' color='default' onClick={props.onCancel}>Cancel</Button>
          <Button
            variant='contained'
            color='secondary'
            disabled={!(props.orgEmail && props.orgName && props.githubTag && props.websiteUrl && props.githubUrl)}
            onClick={props.onNext}
          >
            Next
          </Button>
        </Box>
      </DialogActions>
    </>
  );
};

export default StepOne;
