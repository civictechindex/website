import React, { useState, useEffect } from 'react';
import axios from "axios";
import sanitizeHtml from 'sanitize-html';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accordion: {
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
    '&.MuiAccordion-rounded:last-child': {
      marginBottom: theme.spacing(2),
    },
    '&.Mui-expanded:last-child': {
      marginBottom: theme.spacing(2),
    },
  },
  detail: {
    paddingTop: theme.spacing(2),
  },
  summary: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    '&.Mui-expanded': {
      backgroundColor: theme.palette.secondary.dark,
      '& h6': {
        color: theme.palette.text.secondary,
      },
      '& svg': {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

const SanitizedAnswer = ({ answer }) => {
  const unescapeQuotes = (s) => {
    return s.replace(/\\"/g, '"');
  }
  const sanitize = (s) => {
    return {
      __html: sanitizeHtml(s),
    };
  };
  return (
    <span dangerouslySetInnerHTML={sanitize(unescapeQuotes(answer))} />
  );
};

const AccordionSection = (props) => {
  const [currentFaq, setCurrentFaq] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const faqs = props.faqs;
  const classes = useStyles();

  useEffect(() => {
    const incrementViewCount = async function () {
      const requestBody = {
        question: currentFaq.question,
        answer: currentFaq.answer,
        view_count: currentFaq.view_count,
      };
      await axios.post(`${process.env.REACT_APP_API_URL}/api/faqs/${currentFaq.id}/increment_count/`, requestBody);
    };
    if (sendRequest) {
      // send the request
      incrementViewCount()
      setSendRequest(false);
    }
  }, [sendRequest, currentFaq]);

  return (
    <Grid item xs={12} sm={9} lg={11}>
      {faqs.map((faq) => (
        <Box key={faq.id}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              className={classes.summary}
              data-cy='faq-question'
              disabled={sendRequest}
              expandIcon={<ExpandMoreRoundedIcon />}
              onClick={() => { setSendRequest(true); setCurrentFaq(faq) }}
            >
              <Typography variant='h6'>{faq.question}</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails data-cy='faq-answer' className={classes.detail}>
              <Typography>
                <SanitizedAnswer answer={faq.answer} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Grid>
  )
}

export default AccordionSection;
