import React, { useState } from 'react';
import axios from 'axios';
import ResultsList from '../components/ResultsList';
import { IShowSearchResult } from '../types';
import SearchBox from '../components/SearchBox';
import { TV_MAZE_API_FUZZY_SEARCH_URL } from '../constants/api-constants';
import { Container, Grid, Typography } from '@mui/material';

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<IShowSearchResult[]>([]);

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

  return (
    <Container maxWidth="lg">
      <Grid spacing={2}>
        <Grid xs={12} md={8}>
          <Typography color="#646cff" variant="h1" gutterBottom>
            Search Tv Show
          </Typography>
        </Grid>
        <Grid xs={12} md={8}>
          <SearchBox onSearch={handleSearch} />
        </Grid>
        <Grid xs={12} md={8}>
          <ResultsList results={results} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchPage;
