/* eslint-disable sort-keys */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import _ from 'lodash';

import { GetStartedCard,GenericHeaderSection } from '../../../components';
import SearchBar from '../../SearchProjects/SearchBar';
import FAQCard from '../../../components/FAQCard';

const useStyles = makeStyles({
  searchBar: {
    marginBottom: '40px',
  },
});

const Faq = () => {
  const breadCrumbLinks = [
    { name: "Home", href: "/home" },
    { name: "FAQ", href: "/about/faq" },
  ];
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('fetchedFaq');
  const [totalCount, setTotalCount] = useState(0);
  const classes = useStyles();
  const apiUrl = `${process.env.REACT_APP_API_URL}/api/faqs/`;

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });

  const getFAQData = async (currentQuery, resetPageNum) => {
    const params = {
      page: resetPageNum ? 1 : pageNum,
      page_size: largeScreen ? 10 : 5,
      search: currentQuery,
    };
    // reset pagination current page to 1 in certain cases such as new search query input
    if (resetPageNum) {
      setPageNum(1);
    }
    const res = await axios.get(apiUrl, { params: params });
    setData(res.data.results);
    setTotalCount(res.data.count);
    setStatus(params.search ? 'fetchedSearch' : 'fetchedFaq');
  }

  const debounce = useCallback(_.debounce((value) => {
    getFAQData(value, true);
  }, 300), []);

  useEffect(() => {
    getFAQData(query, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, largeScreen]);

  const handleInput = (event) => {
    setQuery(event.target.value);
    debounce(event.target.value);
  };

  const handlePageNumChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <Box className='boxBackground'>
      <Container >
        <GenericHeaderSection mainTitle ="How can we help?" breadCrumbLinks ={breadCrumbLinks} lg='320px'>
          <Grid container justify='center' className={classes.searchBar}>
            <Grid item xs={12} sm={9}>
              <SearchBar
                dataCy='search-faq'
                onInput={handleInput}
                placeholder="Search the Civic Tech Index"
              />
            </Grid>
          </Grid>
        </GenericHeaderSection>
      </Container>
      <FAQCard
        title={status === 'fetchedFaq' ? 'Top Asked Questions' : `Search results (${totalCount})`}
        faqs={data}
        pages={Math.ceil(totalCount / (largeScreen ? 10 : 5))}
        currentPageNum={pageNum}
        onPageChange={handlePageNumChange}
      />
      <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />
    </Box>
  );
}

export default Faq;
