import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IShowSearchResult } from '../types';
import { List, ListItem, ListItemText, Skeleton, Stack, Typography } from '@mui/material';

interface IResultsListProps {
  results: IShowSearchResult[] | [];
  pending: boolean;
}

const ResultsList: React.FC<IResultsListProps> = ({ results, pending = false }) => {
  const navigate = useNavigate();
  return (
    <List style={{ height: '600px' }} dense>
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
      {pending ? (
        <Stack spacing={2}>
          <Typography color="black" variant="h3" fontSize={18}>
            Laddar tv serie... ha tålamod
          </Typography>
          <Skeleton variant="rectangular" height={24} />
          <Skeleton variant="rectangular" height={24} />
          <Skeleton variant="rectangular" height={24} />
          <Skeleton variant="rectangular" height={24} />
          <Skeleton variant="rectangular" height={24} />
          <Skeleton variant="rectangular" height={24} />
          <Skeleton variant="rectangular" height={24} />
        </Stack>
      ) : null}
    </List>
  );
};

export default ResultsList;
