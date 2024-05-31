import React, { useState } from 'react';
import axios from 'axios';
import ResultsList from '../components/ResultsList';
import { IShowSearchResult } from '../types';
import SearchBox from '../components/SearchBox';
import { TV_MAZE_API_FUZZY_SEARCH_URL } from '../constants/api-constants';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<IShowSearchResult[]>([]);
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleSearch = (newQuery: string) => {
    axios
      .get(`${TV_MAZE_API_FUZZY_SEARCH_URL}?q=${newQuery}`)
      .then((response) => {
        const sortedResults = response.data.sort((a: IShowSearchResult, b: IShowSearchResult) => b.score - a.score);
        setResults([...sortedResults].slice(0, 10));
      })
      .catch((error) => {
        console.error('There was an error fetching the search results!', error);
      });
  };

  const searchHeaderText = 'The Search Tv Ap2';

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Stack spacing={2}>
            {matchesMdUp ? (
              <Typography color="black" variant="h1">
                {searchHeaderText}
              </Typography>
            ) : (
              <Typography color="black" variant="h1" fontSize={24}>
                {searchHeaderText}
              </Typography>
            )}
            <SearchBox onSearch={handleSearch} />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <ResultsList results={results} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchPage;
