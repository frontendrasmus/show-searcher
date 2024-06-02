import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Alert, Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ResultsList from '../components/ResultsList';
import SearchBox from '../components/SearchBox';
import { fetchShows } from '../api/api-calls';

const SearchView: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const { isPending, isFetching, error, data } = useQuery({
    queryKey: ['shows', query],
    queryFn: () => {
      const showsResult = fetchShows(query);
      return showsResult ?? null;
    },
    retry: 3,
    retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
    enabled: !!query,
  });

  console.log(isPending, isFetching);

  const handleSearch = (newQuery: string) => {
    console.log('handleSearch');
    setQuery(newQuery);
  };

  const searchHeaderText = 'Search TV shows super app';

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Stack spacing={2}>
            {matchesMdUp ? (
              <Typography color="black" variant="h1" fontSize={40}>
                &#x1F4FA;&nbsp;{searchHeaderText}
              </Typography>
            ) : (
              <React.Fragment>
                <Typography align="center" color="black" variant="button" fontSize={64}>
                  &#x1F4FA;
                </Typography>
                <Typography align="center" color="black" variant="h1" fontSize={32}>
                  {searchHeaderText}
                </Typography>
              </React.Fragment>
            )}
            <SearchBox onSearch={handleSearch} />
          </Stack>
        </Grid>

        <Grid item xs={12} minHeight={600}>
          {error ? (
            <Alert severity="error">Something went wrong, details for support: {error.message}</Alert>
          ) : data || (isFetching && isPending) ? (
            <ResultsList results={data} isBusy={isPending} />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchView;
