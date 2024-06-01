import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ResultsList from '../components/ResultsList';
import SearchBox from '../components/SearchBox';
import { fetchShows } from '../api/show-api';

const SearchView: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const { isPending, error, data } = useQuery({
    queryKey: ['shows', query],
    queryFn: () => fetchShows(query),
  });

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  const searchHeaderText = 'The Search Tv Ap2';

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Stack spacing={2}>
            {matchesMdUp ? (
              <Typography color="black" variant="h1" fontSize={40}>
                {searchHeaderText}
              </Typography>
            ) : (
              <Typography color="black" variant="h1" fontSize={28}>
                {searchHeaderText}
              </Typography>
            )}
            <SearchBox onSearch={handleSearch} />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          {error ? (
            <Typography color="error">An error occurred: {error.message}</Typography>
          ) : (
            <ResultsList results={data || []} pending={isPending} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchView;
