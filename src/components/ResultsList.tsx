import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IShowSearchResult } from '../types';
import { useTheme } from '@mui/material/styles';
import { List, ListItem, ListItemText, Skeleton, Stack, Typography, useMediaQuery } from '@mui/material';

interface IResultsListProps {
  results: IShowSearchResult[] | [];
  isBusy: boolean;
}

const ResultsList: React.FC<IResultsListProps> = ({ results, isBusy = false }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <List dense>
      {results?.map((result, index) => (
        <ListItem key={`${result.show.name}__${index}`}>
          <ListItemText
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/show/${result.show.id}`)}
            primary={result.show.name}
            secondary={
              matchesMdUp
                ? result.show?.rating?.average
                  ? `betyg: ${result.show?.rating.average.toString()}`
                  : 'inget betyg hittat'
                : null
            }
          />
        </ListItem>
      ))}
      {isBusy && (
        <Stack spacing={2}>
          <Typography color="black" variant="h3" fontSize={18}>
            Loading results from Tv Maze...
          </Typography>
          <Skeleton role="alert" variant="rectangular" height={24} />
          <Skeleton role="alert" variant="rectangular" height={24} />
          <Skeleton role="alert" variant="rectangular" height={24} />
          <Skeleton role="alert" variant="rectangular" height={24} />
          <Skeleton role="alert" variant="rectangular" height={24} />
          <Skeleton role="alert" variant="rectangular" height={24} />
          <Skeleton role="alert" variant="rectangular" height={24} />
        </Stack>
      )}
    </List>
  );
};

export default ResultsList;
