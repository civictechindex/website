import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    maxWidth: '8rem',
  },
  query: {
    color: theme.palette.secondary.main,
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      width: '55vw',
    },
  },
}));

const ResultHeader = (props) => {
  const classes = useStyles();

  const resultCount = (
    <Typography variant='body2' color='primary'>
      Displaying {props.itemLength} of {props.totalCount} results matching:
      <span className={classes.query}> “{props.queryStr}”</span>
    </Typography>
  );
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
        {props.variant === 'large' ? resultCount : (
          <Button className={classes.button} onClick={props.onHeaderClick}>
            <FilterListIcon />Filter
          </Button>
        )}
        <FormControl variant='outlined'>
          <InputLabel id='sort-select-label'>Sort</InputLabel>
          <Select
            labelId='sort-select-label'
            label='Sort'
            defaultValue='best match'
            className={classes.select}
            onChange={(e) => props.onSortChange(e.target.value)}
          >
            <MenuItem value='best match'>Best Match</MenuItem>
            {/*
              Issue#626: This is the temporary fix that removes the 'Last Updated' option from Dropdown in the search page.
              <MenuItem value='updated'>Last Updated</MenuItem>
            */}
            <MenuItem value='stars'>Stargazer Count</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {props.variant === 'small' && resultCount}
    </>
  );
};

export default ResultHeader;
