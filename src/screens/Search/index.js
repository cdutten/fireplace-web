import React, {Fragment, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {blue} from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = () => {
  const [searchValues, setSearchValues] = useState(['']);
  const classes = useStyles();
  const title = 'Fireplace';
  const maxNumberOfInputs = 8;

  const addNewTextField = () => {
    setSearchValues((prevState) => ([...prevState, '']));
  };

  /**
   * Add a search value
   *
   * @param {number} index
   * @param {string} value
   */
  function addSearchValue(index, value) {
    const values = [...searchValues];
    values[index] = value;
    setSearchValues(values);
  }

  /**
   * @param {number} index
   * @param {React.ChangeEvent} event
   */
  const handleInputChange = (index, event) => {
    addSearchValue(index, event.target.value);

    const isTheLastOne = searchValues.length === index + 1;
    if (isTheLastOne && searchValues.length < maxNumberOfInputs) {
      addNewTextField();
    }
  };

  /**
   * @param {number} index
   */
  function destroyInput(index) {
    searchValues.splice(index, 1);
  }

  /**
   * @param {number} index
   * @param {React.ChangeEvent} event
   * @return {undefined}
   */
  function handleInputBlur(index, event) {
    const isEmpty = event.target.value === '';
    const isTheLastOne = searchValues.length === index + 1;
    console.log('isempty: ', isEmpty, 'isThe lastOne', isTheLastOne);
    if (isEmpty && isTheLastOne) {
      destroyInput(index);
    }
    return undefined;
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <p className={classes.title}>{title}</p>
      </Grid>
      <Grid item xs={6}>
        {
          searchValues.map((val, index) => {
            return (
              <Fragment key={index}>
                <TextField
                  className={classes.searchInput}
                  id="outlined-basic"
                  label="Direction"
                  variant="outlined"
                  value={val}
                  onChange={(event) => handleInputChange(index, event)}
                  onBlur={(event) => handleInputBlur(index, event)}
                />
              </Fragment>
            );
          })
        }
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" color="primary">
          Search
        </Button>
      </Grid>

    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  searchInput: {
    width: '100%',
  },
  title: {
    background: blue,
    textAlign: 'center',
  },
}));

export default Search;
