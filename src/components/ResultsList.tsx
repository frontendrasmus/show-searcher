import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IShowSearchResult } from '../types';
import { List, ListItem, ListItemText, Skeleton, Stack, Typography } from '@mui/material';

interface IResultsListProps {
  results: IShowSearchResult[] | [];
  isBusy: boolean;
}

const ResultsList: React.FC<IResultsListProps> = ({ results, isBusy = false }) => {
  const navigate = useNavigate();
  return (
    <List dense>
      {!results?.length && !isBusy && <p>Seems like you have not tested the search yet? Why dont you try 'House'</p>}
      {results?.map((result, index) => (
        <ListItem key={`${result.show.name}__${index}`}>
          <ListItemText
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/show/${result.show.id}`)}
            primary={result.show.name}
            secondary={
              result.show?.rating?.average ? `betyg: ${result.show?.rating.average.toString()}` : 'inget betyg hittat'
            }
          />
        </ListItem>
      ))}
      {isBusy && (
        <Stack spacing={2}>
          <Typography color="black" variant="h3" fontSize={18}>
            Laddar tv serie... ha tålamod
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
