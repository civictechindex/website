import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FileUploadIcon from "../../../icons/FileUploadIcon";

import { GenericHeaderSection } from '../../../components/'
const useStyles = makeStyles((theme) => ({
  headerStyle: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 32px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 100px",
    },
    "& h6": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        fontWeight: "700",
        margin: "0px 0px 71px 0px",
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        fontWeight: "700",
        margin: "0px 0px 86px 0px",
        color: theme.palette.text.secondary,
      },
    },
  },
  formStyle: {
    textAlign: "left",
    padding: "48px 0px",
    justifyContent: "center",
    "& h3": {
      fontSize: "20px",
      fontWeight: "500",
      margin: "32px 0px 8px 0px",
      color: theme.palette.text.primary,
    },
    "& h4": {
      fontSize: "20px",
      fontWeight: "500",
      margin: "8px 0px 0px 0px",
      color: theme.palette.text.primary,
    },
  },
}));



const ContactForm = () => {
  const classes = useStyles();
  return (
    <Box className="containerGray">
      <Container>
        <Grid container className={classes.formStyle}>
          <Grid item xs={1} md={2} lg={3} />
          <Grid item xs={10} md={8} lg={6} container direction="column">
            <Grid item xs={12}>
              <Typography variant="h3">
                Email <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField id="email-input" placeholder="Your email"></TextField>

              <Typography variant="h3">
                I have a question, comment or feature suggestion.
              </Typography>
              <TextField
                id="user-message"
                placeholder="Your message"
                multiline="true"
              ></TextField>

              <Typography variant="h3">
                I added the civictechindex tag to my project, please add my logo
                to your website.
              </Typography>
              <Button
                style={{ width: "200px", height: "48px", margin: "4px 0px" }}
                variant="contained"
                color="default"
              >
                <FileUploadIcon />
                &nbsp;&nbsp;Upload File
              </Button>
              <Typography variant="h4">
                [ADD FILE DETAILS (SIZE, TYPE)]
              </Typography>

              <Typography variant="h3">
                Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField id="name-input" placeholder="Your name"></TextField>

              <Typography variant="h3">
                Organization / Brigade / Affiliation{" "}
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                id="user-affiliation"
                placeholder="Name of your organization, brigade, affiliation"
              ></TextField>

              <Typography variant="h3">
                Your Project or Organization&apos;s GitHub URL{""}
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField id="github-url" placeholder="GitHub URL"></TextField>

              <Button
                style={{
                  width: "105px",
                  height: "48px",
                  padding: "10px",
                  margin: "32px 0px",
                }}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={1} md={2} lg={3} />
        </Grid>
      </Container>
    </Box>
  );
};

const Contact = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    { name: "Home", href: "/home" },
    { name: "Contact", href: "/about/contact" },
  ];

  return (
    <Box>
      <GenericHeaderSection mainTitle ="Contact Us" breadCrumbLinks ={breadCrumbLinks} lg='322px'>
        <Grid container justify="center" className={classes.headerStyle}>
          <Grid item xs={12} md={10}>
            <Typography variant="h6">
                We would love to hear your thoughts or feedback on how we can
                improve your experience with the Civic Tech Index!
            </Typography>
          </Grid>
        </Grid>
      </GenericHeaderSection>

      <ContactForm />
    </Box>
  );
};

export default Contact;
